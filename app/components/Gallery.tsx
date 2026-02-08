"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "rizzui/title";
import { Text } from "rizzui/text";
import { Box } from "rizzui/box";

const photos = [
    { src: "/images/photo1.jpeg", caption: "King Style 👑" },
    { src: "/images/photo2.jpeg", caption: "Biker Boy 🏍️" },
    { src: "/images/photo3.jpeg", caption: "Cool Vibes 😎" },
    { src: "/images/photo4.jpeg", caption: "Beach Day 🌊" },
    { src: "/images/photo5.jpeg", caption: "Strike a Pose 📸" },
    { src: "/images/photo6.jpeg", caption: "Swag On 🕶️" },
    { src: "/images/photo7.jpeg", caption: "Looking Good 😉" },
    { src: "/images/photo8.jpeg", caption: "Full Power 🔥" },
];

export default function Gallery() {
    return (
        <section className="py-32 bg-[#fff9fa]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Title as="h2" className="text-5xl md:text-6xl font-bold text-[#4c0519] mb-6">
                            Beautiful <span className="italic font-serif text-rose-600">Chapters</span>
                        </Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Text className="text-rose-800/60 text-lg">
                            Every moment captured is a treasure in the book of our journey together.
                        </Text>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                        >
                            <Box className="p-0 border-0 bg-transparent shadow-none overflow-hidden rounded-[2.5rem]">
                                <div className="relative aspect-[4/5] w-full overflow-hidden group">
                                    <Image
                                        src={photo.src}
                                        alt={photo.caption}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4c0519]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                        <div className="glass p-6 rounded-2xl w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <Text className="text-wine-900 font-serif italic text-2xl mb-1 text-center">{photo.caption}</Text>
                                            <div className="w-12 h-px bg-rose-300 mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
