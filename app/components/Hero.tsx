"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Title } from "rizzui/title";
import { Text } from "rizzui/text";
import { useEffect, useState } from "react";

export default function Hero() {
    const [hearts, setHearts] = useState<{ id: number; x: string; scale: number; duration: number; delay: number; size: number }[]>([]);

    useEffect(() => {
        setHearts(Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100 + "vw",
            scale: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 15 + 15,
            delay: Math.random() * 20,
            size: Math.random() * 24 + 12
        })));
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#fff9fa] flex items-center justify-center">
            {/* Premium Background Mesh Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100 blur-[120px] opacity-60 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-200 blur-[120px] opacity-40 animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-100 blur-[100px] opacity-50 animate-pulse delay-1000" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{
                            y: "110vh",
                            x: heart.x,
                            opacity: 0,
                            scale: heart.scale,
                        }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.4, 0],
                            rotate: 360,
                        }}
                        transition={{
                            duration: heart.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: heart.delay,
                        }}
                        className="absolute text-rose-300/40"
                    >
                        <Heart size={heart.size} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <div className="z-20 text-center px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Text className="text-rose-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                        Special Edition &middot; 2026
                    </Text>
                    <Title as="h1" className="text-7xl md:text-9xl font-bold text-[#4c0519] leading-tight mb-6">
                        Happy <br />
                        <span className="italic font-serif text-rose-600">Valentine's</span> Day
                    </Title>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <Text className="mt-6 text-lg md:text-2xl text-rose-800/80 font-light max-w-2xl mx-auto leading-relaxed">
                        A small tribute to the person who makes every single day feel like a beautiful dream.
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="mt-16"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-px h-12 bg-rose-200 animate-bounce" />
                        <Text className="text-xs text-rose-400 font-medium tracking-widest uppercase">Scroll to Explore</Text>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
