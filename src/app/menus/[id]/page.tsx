"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { menus, type Menu, type MenuItem } from "@/lib/data";

export default function MenuDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const resolvedParams = use(params);
    const menu = menus.find((m) => m.id === resolvedParams.id);

    if (!menu) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream">
            <div className="fixed top-0 left-0 w-full z-50 px-5 py-6 flex justify-between items-center pointer-events-none">
                <Link
                    href="/#menu-boxes"
                    className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-dark transition-all flex items-center gap-2"
                >
                    &larr; Back to Menu
                </Link>
                <Link
                    href="/#booking"
                    className="pointer-events-auto bg-orange text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange/90 shadow-lg hover:shadow-orange/30 transition-all uppercase tracking-wider"
                >
                    Book Now
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end">
                <Image
                    src={menu.image}
                    alt={menu.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

                <div className="container mx-auto px-5 pb-20 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block bg-orange/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                            {menu.badge}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
                            {menu.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mb-8">
                            Curated by <span className="text-orange font-medium">{menu.chef}</span>
                        </p>
                        <p className="text-white/70 max-w-xl leading-relaxed">
                            {menu.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Menu Items & Ingredients */}
            <section className="py-24 container mx-auto px-5 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-16 text-center">
                    What's Inside The Box
                </h2>

                <div className="space-y-24">
                    {menu.items.map((item, index) => (
                        <MenuItemCard key={index} item={item} index={index} />
                    ))}
                </div>
            </section>

            {/* Floating Booking CTA for Mobile */}
            <div className="md:hidden fixed bottom-5 left-5 right-5 z-40">
                <Link
                    href="/#booking"
                    className="block w-full bg-orange text-white text-center py-4 rounded-full font-bold shadow-xl uppercase tracking-widest"
                >
                    Reserve for €{menu.basePrice}
                </Link>
            </div>
        </main>
    );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row gap-10 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
        >
            <div className={`flex-1 ${!isEven ? 'md:text-right' : ''}`}>
                <span className="text-orange font-bold text-sm uppercase tracking-widest mb-2 block">
                    Course {index + 1}
                </span>
                <h3 className="text-3xl font-heading font-bold text-dark mb-4">
                    {item.name}
                </h3>
                <p className="text-light text-lg mb-8 leading-relaxed">
                    {item.description}
                </p>
            </div>

            {/* Visual Decoration */}
            <div className="flex-1 w-full md:w-auto relative aspect-square max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-3xl opacity-30" />
                <div className="relative w-full h-full bg-white rounded-3xl border border-white/50 shadow-2xl shadow-orange/10 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover opacity-20"
                        />
                    </div>
                    <span className="absolute text-[10rem] opacity-5 font-heading text-dark select-none">
                        {index + 1}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
