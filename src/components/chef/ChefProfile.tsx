"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Chef, menus } from "@/lib/data";
import { ChefHat, Star, Clock, Globe, Play, Utensils, Sparkles } from "lucide-react";
import Image from "next/image";
import ChefBookingForm from "./ChefBookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ChefMenuSelector from "./ChefMenuSelector";

interface ChefProfileProps {
    chef: Chef;
}

export default function ChefProfile({ chef }: ChefProfileProps) {
    const chefMenus = menus.filter(m => m.chef === chef.name);
    const [selectedMenu, setSelectedMenu] = useState<string>(chefMenus[0]?.id || "");
    const [totalPrice, setTotalPrice] = useState<number>(chefMenus[0]?.basePrice || 0);

    return (
        <main className="bg-cream min-h-screen">
            <Navbar />

            {/* Full-Width Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={chef.heroImage}
                        alt={`${chef.name} cooking`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
                </div>

                <div className="container mx-auto px-5 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange text-sm font-bold mb-6">
                            <ChefHat size={16} />
                            <span>Master Chef Profile</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 drop-shadow-2xl">
                            {chef.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-lg font-medium">
                            {chef.description}
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
                            <div className="flex items-center gap-2">
                                <Clock size={24} className="text-orange" />
                                <span>{chef.experience} Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={24} className="text-orange fill-orange" />
                                <span>5.0 Rating</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe size={24} className="text-orange" />
                                <span>{chef.languages.join(", ")}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-white/60">Scroll to Explore</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-6 bg-orange rounded-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Culinary Showcase</h2>
                        <div className="w-24 h-1 bg-orange mx-auto rounded-full" />
                    </div>

                    {/* Top Row: Video (Large) & Main Image (Matching Height) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 items-stretch">
                        {chef.videoUrl && (
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group md:col-span-8">
                                <iframe
                                    src={chef.videoUrl}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                            </div>
                        )}
                        {chef.gallery[0] && (
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group md:col-span-4 min-h-[300px]">
                                <Image
                                    src={chef.gallery[0]}
                                    alt={`${chef.name} signature dish`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                            </div>
                        )}
                    </div>

                    {/* Bottom Row: Horizontal Grid of 3 (Shorter Height) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {chef.gallery.slice(1, 4).map((img, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
                            >
                                <Image
                                    src={img}
                                    alt={`${chef.name} work ${idx + 2}`}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Info & Philosophy */}
            <section className="py-24 bg-cream">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-heading font-bold text-dark mb-8">The Philosophy</h2>
                            <p className="text-2xl italic font-serif text-orange mb-8 leading-relaxed">
                                "{chef.philosophy}"
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                                {chef.longDescription}
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-dark flex items-center gap-3">
                                    <Star className="text-orange fill-orange" size={20} />
                                    Accolades & Recognition
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {chef.awards?.map((award, i) => (
                                        <span key={i} className="px-4 py-2 bg-white rounded-full border border-orange/20 text-dark font-medium shadow-sm">
                                            {award}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] p-10 shadow-xl border border-orange/10"
                        >
                            <h3 className="text-2xl font-heading font-bold text-dark mb-8 flex items-center gap-3">
                                <Utensils className="text-orange" size={24} />
                                Signature Specialties
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {chef.specialties.map((s, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-cream/50 rounded-2xl hover:bg-orange/5 transition-colors group">
                                        <div className="w-2 h-2 rounded-full bg-orange group-hover:scale-125 transition-transform" />
                                        <span className="text-gray-800 font-medium">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Menu Selection Section */}
            <ChefMenuSelector 
                chef={chef} 
                menus={chefMenus} 
                onSelectionChange={(menuId, price) => {
                    setSelectedMenu(menuId);
                    setTotalPrice(price);
                }}
            />

            {/* Booking Section - Mirroring Homepage Layout */}
            <section id="booking" className="py-32 bg-dark relative overflow-hidden">
                 {/* Ambient Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#F27D42]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-5 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left Side: Visual Hook */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F27D42] text-sm font-medium tracking-wide mb-6">
                                <Sparkles size={14} />
                                <span>Exclusive Culinary Experiences</span>
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-cream mb-6 leading-tight">
                                Reserve Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D42] to-[#FF9F6D]">
                                    {chef.name}
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Bring the art of fine dining into your home. Secure your date with {chef.name} today and start crafting your perfect menu.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-white/5 text-[#F27D42]">
                                        <Star size={16} fill="currentColor" />
                                    </div>
                                    <span>Top Rated Chef</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-white/5 text-[#F27D42]">
                                        <Utensils size={16} />
                                    </div>
                                    <span>Bespoke Menu Creation</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 w-full max-w-xl">
                            <ChefBookingForm 
                                chef={chef} 
                                preSelectedMenu={selectedMenu} 
                                preSelectedPrice={totalPrice} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
