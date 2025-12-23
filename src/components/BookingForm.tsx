"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Utensils, ArrowRight, Star, Sparkles } from "lucide-react";

export default function BookingForm() {
    const typeformUrl = 'https://zol4dc90rf4.typeform.com/to/MUaBZhSV';
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate processing before redirecting
        setTimeout(() => {
            window.open(typeformUrl, '_blank');
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="booking" className="relative py-32 overflow-hidden bg-dark">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-5 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Visual Hook */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-sm font-medium tracking-wide mb-6"
                        >
                            <Sparkles size={14} />
                            <span>Exclusive Culinary Experiences</span>
                        </motion.div>

                        <h2 className="text-5xl lg:text-7xl font-heading font-bold text-cream mb-6 leading-tight">
                            Reserve Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
                                Private Chef
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            From intimate dinner parties to grand celebrations, bring the art of fine dining into your home. Secure your date today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-full bg-white/5 text-[#D4AF37]">
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <span>5-Star Rated Chefs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-full bg-white/5 text-[#D4AF37]">
                                    <Utensils size={16} />
                                </div>
                                <span>Custom Curated Menus</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Trendy Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-md"
                    >
                        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/20 to-white/0 shadow-2xl backdrop-blur-xl">
                            <div className="relative bg-black/80 rounded-[22px] p-8 border border-white/10">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <div className="space-y-2">
                                        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 ml-1">Event Details</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                                                <input
                                                    type="date"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-12 text-cream placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all font-sans"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-12 text-cream focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                                                    <option>2 Guests</option>
                                                    <option>3-5 Guests</option>
                                                    <option>6-10 Guests</option>
                                                    <option>10+ Guests</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full relative group overflow-hidden rounded-xl bg-[#D4AF37] p-4 font-bold text-dark transition-all hover:bg-[#c4a030]"
                                    >
                                        <div className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <span>Check Availability</span>
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </div>
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                    </motion.button>

                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        No payment required instantly. <br />You'll be redirected to finalize details.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
