"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Cloud, Zap, Sun, Moon } from "lucide-react";
import { Title } from "rizzui/title";
import { Text } from "rizzui/text";
import { Box } from "rizzui/box";

const reasons = [
    { text: "Your smile lights up my darkest days.", icon: Sun },
    { text: "You make the best coffee in the world.", icon: Cloud },
    { text: "You support my dreams no matter what.", icon: Star },
    { text: "You are kind to everyone you meet.", icon: Sparkles },
    { text: "You have the cutest laugh.", icon: Zap },
    { text: "You make me want to be a better person.", icon: Moon },
];

export default function Reasons() {
    return (
        <section className="py-32 bg-rose-50/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Title as="h2" className="text-4xl md:text-5xl font-bold text-[#4c0519] mb-4 font-serif">
                            Whispers of the <span className="text-rose-600">Heart</span>
                        </Title>
                    </motion.div>
                    <div className="w-16 h-1 bg-rose-200 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <Box className="group bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-rose-100 shadow-xl shadow-rose-100/20 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-rose-200/40 border-0">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-rose-100">
                                    <reason.icon className="text-rose-500" size={32} strokeWidth={1.5} />
                                </div>
                                <Text className="text-xl text-rose-900 leading-relaxed font-serif italic">"{reason.text}"</Text>
                            </Box>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
