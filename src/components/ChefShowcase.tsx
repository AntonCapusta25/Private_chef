"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { chefs } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";

export default function ChefShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
                        Meet Our <span className="text-orange">Master Chefs</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        World-class culinary talent ready to transform your home into a Michelin-star restaurant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {chefs.filter(chef => chef.slug === "heavens-kitchen").map((chef, index) => (
                        <motion.div
                            key={chef.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <Link href={`/chef/${chef.slug}`} className="block">
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl">
                                    <Image
                                        src={chef.image}
                                        alt={chef.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <div className="flex items-center gap-2 text-orange mb-2">
                                            <Star size={16} fill="currentColor" />
                                            <span className="font-bold">5.0 Rating</span>
                                        </div>
                                        <p className="text-white/80 text-sm line-clamp-3">
                                            {chef.longDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-dark group-hover:text-orange transition-colors">
                                            {chef.name}
                                        </h3>
                                        <p className="text-orange font-medium text-sm">
                                            {chef.specialties.join(" • ")}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
