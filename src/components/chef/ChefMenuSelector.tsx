"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chef, Menu, MenuItem, Extra } from "@/lib/data";
import { Plus, Minus, Check, ChevronRight, ShoppingBag, UtensilsCrossed, Sparkles } from "lucide-react";
import Image from "next/image";

interface ChefMenuSelectorProps {
    chef: Chef;
    menus: Menu[];
    onSelectionChange?: (menuId: string, totalPrice: number) => void;
}

export default function ChefMenuSelector({ chef, menus, onSelectionChange }: ChefMenuSelectorProps) {
    const [selectedMenuId, setSelectedMenuId] = useState<string>(menus[0]?.id || "");
    const [selectedDishes, setSelectedDishes] = useState<Record<string, boolean>>({});
    const [selectedExtras, setSelectedExtras] = useState<Record<string, boolean>>({});
    const [activeDishModal, setActiveDishModal] = useState<MenuItem | null>(null);

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

        return total;
    }, [activeMenu, selectedDishes, selectedExtras]);

    // Notify parent of changes
    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(selectedMenuId, totalPrice);
        }
    }, [selectedMenuId, totalPrice, onSelectionChange]);

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
                        <div className="flex flex-wrap gap-4">
                            {menus.map(menu => (
                                <button
                                    key={menu.id}
                                    onClick={() => {
                                        setSelectedMenuId(menu.id);
                                        setSelectedDishes({});
                                        setSelectedExtras({});
                                    }}
                                    className={`px-8 py-4 rounded-2xl font-bold transition-all ${
                                        selectedMenuId === menu.id 
                                        ? "bg-orange text-white shadow-xl scale-105" 
                                        : "bg-cream text-dark hover:bg-orange/10"
                                    }`}
                                >
                                    {menu.title}
                                </button>
                            ))}
                        </div>

                        {activeMenu && (
                            <motion.div
                                key={activeMenu.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-10"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-heading font-bold text-dark">Included Dishes</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {activeMenu.items.map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => setActiveDishModal(item)}
                                                className={`group relative bg-cream/30 rounded-3xl p-6 border-2 transition-all cursor-pointer ${
                                                    selectedDishes[item.id] ? "border-orange bg-white shadow-lg" : "border-transparent hover:border-orange/30"
                                                }`}
                                            >
                                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-125"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="bg-white text-dark px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">View Details</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-xl font-bold text-dark">{item.name}</h4>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                                        selectedDishes[item.id] ? "bg-orange border-orange text-white" : "border-gray-300"
                                                    }`}>
                                                        {selectedDishes[item.id] && <Check size={14} />}
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                                                <p className="text-orange font-bold">+ €{item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {activeMenu.extras && activeMenu.extras.length > 0 && (
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-heading font-bold text-dark">Enhance Your Experience</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeMenu.extras.map(extra => (
                                                <div
                                                    key={extra.id}
                                                    onClick={() => toggleExtra(extra.id)}
                                                    className={`flex justify-between items-center p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                                                        selectedExtras[extra.id] ? "border-orange bg-white shadow-md" : "border-cream bg-cream/20 hover:border-orange/20"
                                                    }`}
                                                >
                                                    <div>
                                                        <p className="font-bold text-dark">{extra.name}</p>
                                                        <p className="text-orange text-sm">+ €{extra.price}</p>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                                        selectedExtras[extra.id] ? "bg-orange border-orange text-white" : "border-gray-300"
                                                    }`}>
                                                        {selectedExtras[extra.id] && <Check size={14} />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
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
                                            <span className="text-orange">+€{item?.price}</span>
                                        </div>
                                    );
                                })}

                                {Object.keys(selectedExtras).filter(id => selectedExtras[id]).map(id => {
                                    const extra = activeMenu?.extras?.find(e => e.id === id);
                                    return (
                                        <div key={id} className="flex justify-between items-center text-sm">
                                            <span className="text-white/80 line-clamp-1">{extra?.name}</span>
                                            <span className="text-orange">+€{extra?.price}</span>
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
                                    className="w-full bg-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-orange/20"
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
                                            <h3 className="text-4xl font-heading font-bold text-dark mb-2">{activeDishModal.name}</h3>
                                            <span className="px-3 py-1 bg-orange/10 text-orange text-xs font-bold rounded-full uppercase tracking-wider">Chef's Specialty</span>
                                        </div>
                                        <p className="text-3xl font-bold text-orange">€{activeDishModal.price}</p>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                        {activeDishModal.description}
                                    </p>

                                    <div className="space-y-6">
                                        <h4 className="font-bold text-dark flex items-center gap-2">
                                            <Sparkles size={18} className="text-orange" />
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
