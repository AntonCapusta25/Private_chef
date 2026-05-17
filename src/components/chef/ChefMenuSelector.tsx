"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chef, Menu, MenuItem, Extra } from "@/lib/data";
import { Plus, Minus, Check, ChevronRight, ShoppingBag, UtensilsCrossed, Sparkles } from "lucide-react";
import Image from "next/image";

interface ChefMenuSelectorProps {
    chef: Chef;
    menus: Menu[];
    onSelectionChange?: (menuId: string, totalPrice: number, summary: string) => void;
}

export default function ChefMenuSelector({ chef, menus, onSelectionChange }: ChefMenuSelectorProps) {
    const [selectedMenuId, setSelectedMenuId] = useState<string>(menus[0]?.id || "");
    const [selectedDishes, setSelectedDishes] = useState<Record<string, boolean>>({});
    const [selectedExtras, setSelectedExtras] = useState<Record<string, boolean>>({});
    const [activeDishModal, setActiveDishModal] = useState<MenuItem | null>(null);
    const [activeMenuModal, setActiveMenuModal] = useState<Menu | null>(null);
    const [modalStep, setModalStep] = useState<1 | 2 | 3 | 4>(1);
    const [filterTab, setFilterTab] = useState<string>("All");

    const activeMenu = useMemo(() => menus.find(m => m.id === selectedMenuId), [selectedMenuId, menus]);

    const totalPrice = useMemo(() => {
        if (!activeMenu) return 0;
        let total = activeMenu.basePrice;
        
        activeMenu.items.forEach(item => {
            if (selectedDishes[item.id]) {
                total += item.price;
            }
        });

        activeMenu.extras?.forEach(extra => {
            if (selectedExtras[extra.id]) {
                total += extra.price;
            }
        });

        activeMenu.desserts?.forEach(dessert => {
            if (selectedExtras[dessert.id]) {
                total += dessert.price;
            }
        });

        activeMenu.serviceExtras?.forEach(service => {
            if (selectedExtras[service.id]) {
                total += service.price;
            }
        });

        return total;
    }, [activeMenu, selectedDishes, selectedExtras]);

    // Notify parent of changes
    useEffect(() => {
        if (onSelectionChange && activeMenu) {
            const selectedDishNames = Object.keys(selectedDishes)
                .filter(id => selectedDishes[id])
                .map(id => activeMenu.items.find(i => i.id === id)?.name)
                .filter(Boolean);

            const selectedExtraNames = Object.keys(selectedExtras)
                .filter(id => selectedExtras[id])
                .map(id => 
                    activeMenu.extras?.find(e => e.id === id)?.name || 
                    activeMenu.desserts?.find(d => d.id === id)?.name || 
                    activeMenu.serviceExtras?.find(s => s.id === id)?.name
                )
                .filter(Boolean);

            const summary = [
                `Package: ${activeMenu.title}`,
                selectedDishNames.length > 0 ? `Dishes: ${selectedDishNames.join(', ')}` : '',
                selectedExtraNames.length > 0 ? `Extras & Services: ${selectedExtraNames.join(', ')}` : ''
            ].filter(Boolean).join(' | ');

            onSelectionChange(selectedMenuId, totalPrice, summary);
        }
    }, [selectedMenuId, totalPrice, onSelectionChange, activeMenu, selectedDishes, selectedExtras]);

    const toggleDish = (id: string) => {
        setSelectedDishes(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleExtra = (id: string) => {
        setSelectedExtras(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section id="menu-selection" className="py-24 bg-white">
            <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Select Your Experience</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Customize your meal by selecting the perfect menu and dishes for your event.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Menu Selection (Left) */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {menus.map(menu => (
                                <div
                                    key={menu.id}
                                    onClick={() => {
                                        setSelectedMenuId(menu.id);
                                        setActiveMenuModal(menu);
                                    }}
                                    className={`
                                        group h-full flex flex-col bg-white p-4 rounded-[2rem] shadow-xl border 
                                        transition-all duration-300 relative cursor-pointer hover:shadow-2xl
                                        ${selectedMenuId === menu.id ? 'border-orange ring-2 ring-orange/50 scale-[1.02]' : 'border-white/40 hover:-translate-y-1'}
                                    `}
                                >
                                    <div className="relative h-[200px] rounded-3xl overflow-hidden mb-6 bg-gray-200">
                                        <Image
                                            src={menu.image}
                                            alt={menu.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    
                                    <h3 className={`text-2xl font-heading font-bold mb-1 transition-colors ${selectedMenuId === menu.id ? 'text-orange' : 'text-dark group-hover:text-orange'}`}>
                                        {menu.title}
                                    </h3>
                                    
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                        {menu.description}
                                    </p>

                                    {menu.includes && menu.includes.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Includes:</p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {menu.includes.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-orange" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    <div className="flex justify-between items-center border-t border-dark/10 pt-4 mt-auto">
                                        <span className="font-bold text-dark text-lg">
                                            €{menu.basePrice} <span className="text-sm font-normal text-gray-500">starting price</span>
                                        </span>
                                        <button className={`
                                            px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300
                                            ${selectedMenuId === menu.id ? 'bg-orange text-white' : 'bg-gray-100 text-espresso group-hover:bg-espresso group-hover:text-white'}
                                        `}>
                                            {selectedMenuId === menu.id ? 'Configuring...' : 'Configure'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                {/* Package Details Modal - Multi-Step */}
                <AnimatePresence>
                    {activeMenuModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => {
                                    setActiveMenuModal(null);
                                    setModalStep(1);
                                    setFilterTab("All");
                                }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-white rounded-[3rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
                            >
                                {/* Modal Header */}
                                <div className="p-8 md:p-12 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                                    <div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${modalStep === 1 ? 'bg-orange text-white' : 'bg-gray-100 text-gray-400'}`}>1</span>
                                            <div className="h-px w-6 bg-gray-200" />
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${modalStep === 2 ? 'bg-orange text-white' : 'bg-gray-100 text-gray-400'}`}>2</span>
                                            <div className="h-px w-6 bg-gray-200" />
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${modalStep === 3 ? 'bg-orange text-white' : 'bg-gray-100 text-gray-400'}`}>3</span>
                                            <div className="h-px w-6 bg-gray-200" />
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${modalStep === 4 ? 'bg-orange text-white' : 'bg-gray-100 text-gray-400'}`}>4</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-espresso">
                                            {modalStep === 1 ? "Included Signature Dishes" : modalStep === 2 ? "Starters & Extras" : modalStep === 3 ? "Sweet Desserts" : "Event & Service Extras"}
                                        </h2>
                                    </div>
                                    <button 
                                        onClick={() => {
                                            setActiveMenuModal(null);
                                            setModalStep(1);
                                            setFilterTab("All");
                                        }}
                                        className="p-4 rounded-full bg-gray-100 text-espresso hover:bg-orange/10 transition-colors"
                                    >
                                        <Plus className="rotate-45" size={24} />
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-gray-50/50">
                                    {modalStep === 1 ? (
                                        <div className="space-y-8">
                                            {/* Dietary Tabs */}
                                            {activeMenuModal.items.some(item => item.dietary && item.dietary.length > 0) && (
                                                <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar">
                                                    {["All", ...Array.from(new Set(activeMenuModal.items.flatMap(i => i.dietary || [])))].map(tab => (
                                                        <button
                                                            key={tab}
                                                            onClick={() => setFilterTab(tab)}
                                                            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                                                                filterTab === tab ? "bg-orange text-white" : "bg-white text-gray-500 border border-gray-200 hover:border-orange/50"
                                                            }`}
                                                        >
                                                            {tab}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {activeMenuModal.items
                                                    .filter(item => filterTab === "All" || item.dietary?.includes(filterTab))
                                                    .map(item => (
                                                    <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                                                        <div className="relative h-48 w-full overflow-hidden">
                                                            <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                                            <div className="absolute top-4 right-4 bg-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                                Included
                                                            </div>
                                                            {item.dietary && item.dietary.length > 0 && (
                                                                <div className="absolute top-4 left-4 flex gap-2">
                                                                    {item.dietary.map(d => (
                                                                        <span key={d} className="bg-white/90 backdrop-blur text-espresso px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                                            {d}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="p-6">
                                                            <h4 className="text-xl font-bold text-espresso mb-2">{item.name}</h4>
                                                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                                                            
                                                            {item.allergens && item.allergens.length > 0 && (
                                                                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-orange font-medium">
                                                                    <Sparkles size={14} />
                                                                    <span>Allergens: {item.allergens.join(", ")}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : modalStep === 2 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {activeMenuModal.extras && activeMenuModal.extras.length > 0 ? (
                                                activeMenuModal.extras.map(extra => (
                                                    <div
                                                        key={extra.id}
                                                        onClick={() => toggleExtra(extra.id)}
                                                        className={`group relative flex items-center gap-6 p-4 rounded-[2rem] border-2 cursor-pointer transition-all ${
                                                            selectedExtras[extra.id] ? "border-orange bg-white shadow-lg" : "border-transparent bg-white/50 hover:border-orange/20"
                                                        }`}
                                                    >
                                                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                                                            {extra.image ? (
                                                                <Image src={extra.image} alt={extra.name} fill className="object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center">
                                                                    <ShoppingBag className="text-gray-300" size={32} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-bold text-espresso mb-1">{extra.name}</p>
                                                            <p className="text-orange font-bold">€{extra.price}</p>
                                                        </div>
                                                        <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all ${
                                                            selectedExtras[extra.id] ? "bg-orange border-orange text-white" : "border-gray-200"
                                                        }`}>
                                                            {selectedExtras[extra.id] ? <Check size={20} /> : <Plus size={20} />}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-span-2 py-20 text-center text-gray-400">
                                                    No food extras available for this package.
                                                </div>
                                            )}
                                        </div>
                                    ) : modalStep === 3 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {activeMenuModal.desserts && activeMenuModal.desserts.length > 0 ? (
                                                activeMenuModal.desserts.map(dessert => (
                                                    <div
                                                        key={dessert.id}
                                                        onClick={() => toggleExtra(dessert.id)}
                                                        className={`group relative flex items-center gap-6 p-4 rounded-[2rem] border-2 cursor-pointer transition-all ${
                                                            selectedExtras[dessert.id] ? "border-orange bg-white shadow-lg" : "border-transparent bg-white/50 hover:border-orange/20"
                                                        }`}
                                                    >
                                                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                                                            {dessert.image ? (
                                                                <Image src={dessert.image} alt={dessert.name} fill className="object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center">
                                                                    <ShoppingBag className="text-gray-300" size={32} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-bold text-espresso mb-1">{dessert.name}</p>
                                                            <p className="text-orange font-bold">€{dessert.price}</p>
                                                        </div>
                                                        <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all ${
                                                            selectedExtras[dessert.id] ? "bg-orange border-orange text-white" : "border-gray-200"
                                                        }`}>
                                                            {selectedExtras[dessert.id] ? <Check size={20} /> : <Plus size={20} />}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-span-2 py-20 text-center text-gray-400">
                                                    No desserts available for this package.
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {activeMenuModal.serviceExtras && activeMenuModal.serviceExtras.length > 0 ? (
                                                activeMenuModal.serviceExtras.map(service => (
                                                    <div
                                                        key={service.id}
                                                        onClick={() => toggleExtra(service.id)}
                                                        className={`group relative flex items-center gap-6 p-4 rounded-[2rem] border-2 cursor-pointer transition-all ${
                                                            selectedExtras[service.id] ? "border-orange bg-white shadow-lg" : "border-transparent bg-white/50 hover:border-orange/20"
                                                        }`}
                                                    >
                                                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                                                            {service.image ? (
                                                                <Image src={service.image} alt={service.name} fill className="object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center">
                                                                    <UtensilsCrossed className="text-gray-300" size={32} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-bold text-espresso mb-1">{service.name}</p>
                                                            <p className="text-orange font-bold">€{service.price}</p>
                                                        </div>
                                                        <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all ${
                                                            selectedExtras[service.id] ? "bg-orange border-orange text-white" : "border-gray-200"
                                                        }`}>
                                                            {selectedExtras[service.id] ? <Check size={20} /> : <Plus size={20} />}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-span-2 py-20 text-center text-gray-400">
                                                    No service extras available for this package.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Modal Footer */}
                                <div className="p-8 md:p-10 border-t border-gray-100 bg-white flex justify-between items-center">
                                    <div className="hidden md:block">
                                        <p className="text-gray-400 text-sm">Package: <span className="text-espresso font-bold">{activeMenuModal.title}</span></p>
                                        <p className="text-orange font-bold text-xl">€{totalPrice}</p>
                                    </div>
                                    <div className="flex gap-4 w-full md:w-auto">
                                        {modalStep > 1 && (
                                            <button
                                                onClick={() => setModalStep(prev => (prev - 1) as any)}
                                                className="px-8 py-4 rounded-2xl bg-gray-100 text-espresso font-bold hover:bg-gray-200 transition-all flex-1 md:flex-none"
                                            >
                                                Back
                                            </button>
                                        )}
                                        <button
                                            onClick={() => {
                                                if (modalStep === 1) setModalStep(2);
                                                else if (modalStep === 2) setModalStep(3);
                                                else if (modalStep === 3) setModalStep(4);
                                                else {
                                                    setActiveMenuModal(null);
                                                    setModalStep(1);
                                                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }}
                                            className="px-12 py-4 rounded-2xl orange-gradient text-white font-bold shadow-lg shadow-orange/20 hover:-translate-y-1 transition-all flex-1 md:flex-none flex items-center justify-center gap-2"
                                        >
                                            {modalStep === 1 ? "Next: Starters & Extras" : modalStep === 2 ? "Next: Sweet Desserts" : modalStep === 3 ? "Next: Service Extras" : "Confirm Selection"}
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
                    </div>

                    {/* Summary (Right) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-dark rounded-[3rem] p-8 text-white shadow-2xl border border-white/10">
                            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                                <ShoppingBag className="text-orange" />
                                Your Order
                            </h3>

                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                <div className="flex justify-between text-white/60 text-sm">
                                    <span>Base Package ({activeMenu?.title})</span>
                                    <span>€{activeMenu?.basePrice}</span>
                                </div>
                                
                                {Object.keys(selectedDishes).filter(id => selectedDishes[id]).map(id => {
                                    const item = activeMenu?.items.find(i => i.id === id);
                                    return (
                                        <div key={id} className="flex justify-between items-center text-sm">
                                            <span className="text-white/80 line-clamp-1">{item?.name}</span>
                                            <span className="text-orange font-bold">+€{item?.price}</span>
                                        </div>
                                    );
                                })}

                                {Object.keys(selectedExtras).filter(id => selectedExtras[id]).map(id => {
                                    const extra = activeMenu?.extras?.find(e => e.id === id) || activeMenu?.serviceExtras?.find(s => s.id === id);
                                    return (
                                        <div key={id} className="flex justify-between items-center text-sm">
                                            <span className="text-white/80 line-clamp-1">{extra?.name}</span>
                                            <span className="text-orange font-bold">+€{extra?.price}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="border-t border-white/10 pt-8 mt-8">
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-white/60 font-medium">Total Estimate</span>
                                    <span className="text-4xl font-heading font-bold text-orange">€{totalPrice}</span>
                                </div>

                                <button
                                    onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                                    className="w-full orange-gradient text-white py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-orange/20"
                                >
                                    Proceed to Booking
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-center text-[10px] text-white/40 mt-4 uppercase tracking-widest">
                                    No payment taken now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dish Details Modal */}
            <AnimatePresence>
                {activeDishModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveDishModal(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[3rem] overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl"
                        >
                            {/* Left: Image */}
                            <div className="flex-1 relative aspect-square md:aspect-auto group overflow-hidden">
                                <Image
                                    src={activeDishModal.image}
                                    alt={activeDishModal.name}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-125 cursor-zoom-in"
                                />
                                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold border border-white/30">
                                    Hover to Zoom
                                </div>
                            </div>

                            {/* Right: Info */}
                            <div className="flex-1 p-10 md:p-16 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-4xl font-heading font-bold text-espresso mb-2">{activeDishModal.name}</h3>
                                        </div>
                                        <p className="text-3xl font-bold text-orange">€{activeDishModal.price}</p>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                        {activeDishModal.description}
                                    </p>

                                    <div className="space-y-6">
                                        <h4 className="font-bold text-espresso flex items-center gap-2">
                                            Customization Options
                                        </h4>
                                        <div className="space-y-4">
                                            {activeMenu?.extras?.map(extra => (
                                                <div 
                                                    key={extra.id}
                                                    onClick={() => toggleExtra(extra.id)}
                                                    className={`flex justify-between items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                                        selectedExtras[extra.id] ? "border-orange bg-orange/5" : "border-cream hover:border-orange/20"
                                                    }`}
                                                >
                                                    <span className="font-medium text-dark">{extra.name}</span>
                                                    <span className="text-orange font-bold">+€{extra.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex gap-4">
                                    <button
                                        onClick={() => {
                                            toggleDish(activeDishModal.id);
                                            setActiveDishModal(null);
                                        }}
                                        className={`flex-1 py-5 rounded-2xl font-bold text-lg transition-all ${
                                            selectedDishes[activeDishModal.id]
                                            ? "bg-red-500 text-white hover:bg-red-600"
                                            : "bg-orange text-white hover:bg-orange/90 shadow-xl shadow-orange/20"
                                        }`}
                                    >
                                        {selectedDishes[activeDishModal.id] ? "Remove from Order" : "Add to Order"}
                                    </button>
                                    <button
                                        onClick={() => setActiveDishModal(null)}
                                        className="px-8 py-5 bg-cream text-dark rounded-2xl font-bold hover:bg-orange/10 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(242, 125, 66, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(242, 125, 66, 0.5);
                }
            `}</style>
        </section>
    );
}
