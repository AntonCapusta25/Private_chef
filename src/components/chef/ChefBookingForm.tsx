"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Users, Utensils, ArrowRight, Sparkles, ChefHat, BookOpen, CheckCircle2 } from "lucide-react";
import { menus, Chef } from "@/lib/data";
import confetti from "canvas-confetti";

interface ChefBookingFormProps {
    chef: Chef;
    preSelectedMenu?: string;
    preSelectedPrice?: number;
}

export default function ChefBookingForm({ chef, preSelectedMenu, preSelectedPrice }: ChefBookingFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedMenuId, setSelectedMenuId] = useState(preSelectedMenu || "");
    const [selectedCuisine, setSelectedCuisine] = useState("");

    useEffect(() => {
        if (preSelectedMenu) {
            setSelectedMenuId(preSelectedMenu);
            const foundMenu = menus.find(m => m.id === preSelectedMenu);
            if (foundMenu) setSelectedCuisine(foundMenu.badge);
        }
    }, [preSelectedMenu]);

    const chefMenus = menus.filter(m => m.chef === chef.name && !m.soldOut);

    const handleMenuChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const menuId = e.target.value;
        setSelectedMenuId(menuId);
        const foundMenu = menus.find(m => m.id === menuId);
        if (foundMenu) {
            setSelectedCuisine(foundMenu.badge);
        } else {
            setSelectedCuisine("");
        }
    };

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const bookingData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            selectedMenu: selectedMenuId || "Custom/Not Selected",
            selectedChef: chef.name,
            cuisine: selectedCuisine || formData.get('cuisine') || chef.specialties[0],
            eventDate: formData.get('eventDate') as string,
            guests: formData.get('guests') as string,
            message: formData.get('message') as string || "",
            totalPrice: preSelectedPrice || 0,
        };

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) throw new Error('Failed to submit booking');

            setIsSubmitting(false);
            setIsSuccess(true);
            triggerConfetti();
        } catch (error) {
            console.error('Booking error:', error);
            setIsSubmitting(false);
            alert('Failed to submit booking. Please try again.');
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center"
            >
                <div className="bg-[#2D2420]/95 rounded-3xl p-12 border border-white/10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-cream mb-4">Request Sent!</h3>
                    <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                        {chef.name} has been notified. They will contact you shortly to discuss your custom menu!
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="px-8 py-3 bg-[#F27D42] text-white rounded-xl font-bold hover:bg-[#d66a35] transition-colors"
                    >
                        Back to Profile
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-[#2D2420]/90 rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-orange/50 flex-shrink-0">
                    <Image 
                        src={chef.image} 
                        alt={chef.name} 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-heading font-bold text-cream">Book {chef.name}</h3>
                    <p className="text-orange text-xs font-medium uppercase tracking-wider">{chef.specialties[0]} Specialty</p>
                </div>
            </div>
            
            <div className="mb-8">
                <p className="text-gray-400 text-sm">Secure your date with {chef.name} and start planning your bespoke menu.</p>
                {preSelectedPrice && preSelectedPrice > 0 ? (
                    <div className="mt-4 p-3 bg-orange/10 border border-orange/20 rounded-xl">
                        <p className="text-orange text-sm font-bold flex justify-between">
                            <span>Estimated Total:</span>
                            <span>€{preSelectedPrice}</span>
                        </p>
                    </div>
                ) : null}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Menu Selection */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Select a Menu (Optional)</label>
                        <div className="relative group">
                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F27D42] transition-colors" size={18} />
                            <select
                                value={selectedMenuId}
                                onChange={handleMenuChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-12 text-cream focus:outline-none focus:border-[#F27D42]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                            >
                                <option className="bg-[#2D2420]" value="">-- Custom {chef.name} Experience --</option>
                                {chefMenus.map(menu => (
                                    <option key={menu.id} value={menu.id} className="bg-[#2D2420]">
                                        {menu.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Date</label>
                        <div className="relative group">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F27D42] transition-colors" size={18} />
                            <input
                                name="eventDate"
                                type="date"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-12 text-cream focus:outline-none focus:border-[#F27D42]/50 focus:bg-white/10 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Guests</label>
                        <div className="relative group">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F27D42] transition-colors" size={18} />
                            <select name="guests" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-12 text-cream focus:outline-none focus:border-[#F27D42]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                                <option className="bg-[#2D2420]">2 Guests</option>
                                <option className="bg-[#2D2420]">3-5 Guests</option>
                                <option className="bg-[#2D2420]">6-10 Guests</option>
                                <option className="bg-[#2D2420]">10+ Guests</option>
                            </select>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Your Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder-gray-600 focus:outline-none focus:border-[#F27D42]/50 focus:bg-white/10 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder-gray-600 focus:outline-none focus:border-[#F27D42]/50 focus:bg-white/10 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Message for the Chef</label>
                    <textarea
                        name="message"
                        placeholder="Any dietary requirements or special requests?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder-gray-600 focus:outline-none focus:border-[#F27D42]/50 focus:bg-white/10 transition-all h-24 resize-none"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden rounded-xl bg-[#F27D42] p-4 font-bold text-white transition-all hover:bg-[#d66a35] disabled:opacity-50"
                >
                    <div className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <span>Send Booking Request</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </div>
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                </motion.button>

                <p className="text-center text-xs text-gray-500">
                    No payment required to submit. The chef will contact you to finalize.
                </p>
            </form>
        </div>
    );
}

