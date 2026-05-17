"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chef, menus } from "@/lib/data";
import { ChefHat, Star, Clock, Globe, Play, Utensils, Sparkles, MapPin, Share2, Award, UtensilsCrossed, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import ChefBookingForm from "./ChefBookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ChefMenuSelector from "./ChefMenuSelector";

const getDishNameFromPath = (path: string) => {
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return filename
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Fatayer Sambousek', 'Fatayer & Sambousek')
        .replace('Roasted Aubergine Cauliflower', 'Roasted Aubergine & Cauliflower')
        .replace('Olives Herb Platter', 'Olives & Herb Platter');
};

interface ChefProfileProps {
    chef: Chef;
}

export default function ChefProfile({ chef }: ChefProfileProps) {
    const chefMenus = menus.filter(m => m.chef === chef.name);
    const verticalVideos = chef.verticalVideos || [];
    const [selectedMenu, setSelectedMenu] = useState<string>(chefMenus[0]?.id || "");
    const [totalPrice, setTotalPrice] = useState<number>(chefMenus[0]?.basePrice || 0);
    const [orderSummary, setOrderSummary] = useState<string>("");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <main className="bg-white min-h-screen relative">
            <div className="absolute inset-0 lebanese-pattern pointer-events-none z-0" />
            <Navbar />

            {/* Premium Brand Header Section */}
            <section className="relative w-full bg-white">
                {/* Hero Cover Image */}
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                    <Image
                        src={chef.heroImage}
                        alt={`${chef.name} cover`}
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                        priority
                    />
                    {/* Subtle Luxury Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Overlapping Brand Identity Bar */}
                <div className="container mx-auto px-5 relative">
                    <div className="flex flex-col md:flex-row items-end gap-16 relative z-20">
                        {/* Official Royal Logo - Overlapping Element */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-white shadow-2xl border-[6px] border-white p-0 -mt-24 md:-mt-32"
                        >
                            <Image
                                src="/images/logos/heavens-kitchen-logo.jpg"
                                alt="Heaven's Kitchen Logo"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Brand Details - No negative margin for readability */}
                        <div className="flex-1 pb-4 md:pb-12 pt-6">
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-heading font-bold text-espresso mb-4">
                                    {chef.name}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 text-gray-500 font-medium">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={16} className="text-orange" />
                                        Amsterdam, Netherlands
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span className="flex items-center gap-1">
                                        <Clock size={16} className="text-orange" />
                                        {chef.experience} Legacy
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-orange fill-orange" />)}
                                        <span className="text-espresso ml-1 font-bold">5.0</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-4 pb-4 md:pb-8">
                            <a
                                href="#menu-selection"
                                className="px-8 py-4 rounded-2xl orange-gradient text-white font-bold shadow-lg hover:shadow-orange/30 transition-all hover:-translate-y-1 uppercase tracking-widest text-sm"
                            >
                                Reserve Table
                            </a>
                            <button className="p-4 rounded-2xl border-2 border-gray-200 text-espresso hover:bg-gray-50 transition-all">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Secondary Navigation / Stats Bar */}
                <div className="border-y border-gray-100 mt-12">
                    <div className="container mx-auto px-5 py-6">
                        <div className="flex flex-wrap items-center gap-12">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Minimum Order</span>
                                <span className="text-espresso font-heading font-bold text-xl">€250.00</span>
                            </div>
                            <div className="w-px h-8 bg-gray-100" />
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Cuisine Type</span>
                                <span className="text-espresso font-heading font-bold text-xl">Lebanese Fusion</span>
                            </div>
                            <div className="w-px h-8 bg-gray-100" />
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Lead Time</span>
                                <span className="text-espresso font-heading font-bold text-xl">48 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lebanese Premium Gallery & Social Showcase */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute inset-0 lebanese-pattern opacity-5" />
                <div className="container mx-auto px-5 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4"
                        >
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-espresso mb-2">
                                Culinary <span className="text-purple">Artistry</span>
                            </h2>
                            <div className="h-1 w-24 bg-orange mx-auto rounded-full" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Vertical Video Carousel (Instagram Style) */}
                        <div className="lg:col-span-4 h-[600px] relative rounded-[3rem] overflow-hidden shadow-2xl bg-black border-8 border-purple/30 group">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white shadow-lg">
                                    <Image src="/images/logos/heavens-kitchen-logo.jpg" alt={chef.name} width={48} height={48} className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm leading-none drop-shadow-md">Heaven's Kitchen</p>
                                    <p className="text-white/80 text-[10px] uppercase tracking-widest drop-shadow-md">Live from the mountains</p>
                                </div>
                            </div>

                            <div className="h-full w-full overflow-hidden flex relative">
                                {verticalVideos.length > 0 ? (
                                    <div className="relative w-full h-full">
                                        <video
                                            key={activeVideoIndex}
                                            ref={videoRef}
                                            src={verticalVideos[activeVideoIndex]}
                                            autoPlay={false}
                                            muted={false}
                                            playsInline
                                            onClick={togglePlay}
                                            onEnded={() => {
                                                setIsPlaying(false);
                                                setActiveVideoIndex((prev) => (prev + 1) % verticalVideos.length);
                                            }}
                                            className="w-full h-full object-cover cursor-pointer relative z-10"
                                        />

                                        {/* Play Overlay Button */}
                                        {!isPlaying && (
                                            <div 
                                                onClick={togglePlay}
                                                className="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer z-15"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 hover:scale-110 transition-transform duration-300">
                                                    <Play size={32} className="fill-white translate-x-0.5" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Next / Prev Quick Tap Zones */}
                                        <button
                                            onClick={() => setActiveVideoIndex((prev) => (prev === 0 ? verticalVideos.length - 1 : prev - 1))}
                                            className="absolute left-0 top-0 bottom-0 w-1/4 z-20 cursor-w-resize"
                                            aria-label="Previous video"
                                        />
                                        <button
                                            onClick={() => setActiveVideoIndex((prev) => (prev + 1) % verticalVideos.length)}
                                            className="absolute right-0 top-0 bottom-0 w-1/4 z-20 cursor-e-resize"
                                            aria-label="Next video"
                                        />

                                        <div className="absolute bottom-10 left-0 right-0 px-8 z-25 pointer-events-auto">
                                            <div className="flex gap-1.5 mb-4 relative z-30">
                                                {verticalVideos.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setActiveVideoIndex(i)}
                                                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i === activeVideoIndex ? 'bg-white scale-y-110 shadow' : 'bg-white/30 hover:bg-white/50'}`}
                                                        aria-label={`Go to video ${i + 1}`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-white text-sm font-medium relative z-30 drop-shadow-md">
                                                Watch {chef.name} prepare signature Lebanese dishes...
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-dark flex items-center justify-center">
                                        <Play size={48} className="text-white/20" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Main Visuals (Right) */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {chef.gallery.slice(0, 6).map((img, idx) => {
                                const isLast = idx === 5 && chef.gallery.length > 6;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        onClick={() => setLightboxIndex(idx)}
                                        className={`relative h-[180px] rounded-[2rem] overflow-hidden shadow-lg border-2 border-cream cursor-pointer ${
                                            idx === 0 ? "col-span-2 md:col-span-2 md:row-span-2 md:h-[384px]" : ""
                                        }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={getDishNameFromPath(img)}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                        
                                        {/* Luxury Glassmorphic Overlay for "Show More" on 6th slot */}
                                        {isLast ? (
                                            <div className="absolute inset-0 bg-espresso/70 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
                                                <span className="text-white text-3xl font-bold font-heading">+{chef.gallery.length - 5}</span>
                                                <span className="text-white/80 text-xs font-bold uppercase tracking-wider mt-1">Dishes</span>
                                            </div>
                                        ) : (
                                            /* Subtle label on hover for items */
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <span className="text-white text-sm font-bold font-heading">{getDishNameFromPath(img)}</span>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Heritage Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 lebanese-pattern opacity-5" />
                <div className="container mx-auto px-5 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/chefs/heavens-kitchen-hero.png"
                                alt="Lebanese Cedar Heritage"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
                        </motion.div>
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-espresso leading-tight">
                                The Spirit of the <span className="text-orange underline decoration-orange/30">Cedar</span>
                            </h2>
                            <p className="text-gray-600 text-xl leading-relaxed font-serif italic">
                                "{chef.philosophy}"
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="space-y-2">
                                    <h4 className="text-espresso font-bold uppercase tracking-widest text-sm">Authenticity</h4>
                                    <p className="text-gray-400 text-xs">Directly sourced spices from the Beqaa Valley.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-espresso font-bold uppercase tracking-widest text-sm">Craftsmanship</h4>
                                    <p className="text-gray-400 text-xs">Techniques passed down through generations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Menu Selection Section */}
            <ChefMenuSelector
                chef={chef}
                menus={chefMenus}
                onSelectionChange={(menuId, price, summary) => {
                    setSelectedMenu(menuId);
                    setTotalPrice(price);
                    setOrderSummary(summary);
                }}
            />

            {/* Booking Section - Mirroring Homepage Layout */}
            {/* Booking Section - Pure White */}
            <section id="booking" className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-5 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left Side: Visual Hook */}
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-5xl lg:text-8xl font-heading font-bold text-espresso mb-6 leading-tight">
                                Secure Your <br />
                                <span className="text-orange">Royal Table</span>
                            </h2>

                            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Bring the art of fine dining into your home. Secure your date with {chef.name} today and start crafting your perfect menu.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-orange/10 text-orange">
                                        <ChefHat size={16} />
                                    </div>
                                    <span>Top Rated Chef</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-orange/10 text-orange">
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
                                prefilledNotes={orderSummary}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Full-Screen Premium Lightbox Modal */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setLightboxIndex(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />

                        {/* Close button */}
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
                        >
                            <Plus className="rotate-45" size={24} />
                        </button>

                        {/* Lightbox Content Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative max-w-4xl w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center z-10"
                        >
                            <div className="relative w-full flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src={chef.gallery[lightboxIndex]}
                                    alt={getDishNameFromPath(chef.gallery[lightboxIndex])}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Info bar below image */}
                            <div className="text-center mt-6 space-y-2">
                                <h3 className="text-white text-2xl font-heading font-bold">
                                    {getDishNameFromPath(chef.gallery[lightboxIndex])}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    Dish {lightboxIndex + 1} of {chef.gallery.length}
                                </p>
                            </div>

                            {/* Left Navigation */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(prev => 
                                        prev !== null ? (prev === 0 ? chef.gallery.length - 1 : prev - 1) : null
                                    );
                                }}
                                className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all hover:scale-110"
                            >
                                <ChevronLeft size={32} />
                            </button>

                            {/* Right Navigation */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(prev => 
                                        prev !== null ? (prev === chef.gallery.length - 1 ? 0 : prev + 1) : null
                                    );
                                }}
                                className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all hover:scale-110"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
