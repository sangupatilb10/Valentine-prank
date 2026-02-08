"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, HeartCrack } from "lucide-react";
import { Title } from "rizzui/title";
import { Text } from "rizzui/text";
import { Button } from "rizzui/button";
import { toast } from "sonner";

export default function ValentineQuestion() {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [yesPressed, setYesPressed] = useState(false);

    const funnyMessages = [
        "Are you sure? 🥺",
        "My heart is breaking! 💔",
        "Don't do it! 😭",
        "Think about the kittens! 🐱",
        "I'll be sad forever... 🌧️",
        "You're breaking my heart! 💘",
        "Give it another thought! 💭",
        "Is that your final answer? 🧐",
        "But we're perfect together! 💑",
        "I promise to buy you chocolate! 🍫",
        "Please say yes! 🙏",
        "Don't be like that! 😒",
        "I'm crying right now! 💧",
        "You can't catch me! 🏃‍♂️",
        "Try the other button! ➡️",
        "Wrong choice! ❌",
        "Error 404: No not found 🚫",
        "System overload: Cuteness needed 🤖",
        "Press Yes for free hugs! 🤗",
        "I'll cook for you! 🍳"
    ];

    const handleNoHover = () => {
        // Generate random position within larger bounds (Moves FAR)
        const x = Math.random() * 500 - 250;
        const y = Math.random() * 500 - 250;
        setNoPosition({ x, y });

        // Trigger a random funny toast
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

        toast.custom((t) => (
            <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 10 }}
                className="relative bg-transparent p-0 border-none shadow-none flex items-center justify-center pointer-events-none"
            >
                <div className="relative">
                    {/* Big Broken Heart Background - Light Pink */}
                    <HeartCrack size={200} className="text-rose-300 fill-rose-100 drop-shadow-xl" strokeWidth={1.5} />

                    {/* Text Inside */}
                    <div className="absolute inset-0 flex items-center justify-center text-center p-6 pb-12">
                        <span className="text-rose-600 font-bold font-serif text-lg leading-tight transform -rotate-2">
                            {randomMessage}
                        </span>
                    </div>
                </div>
            </motion.div>
        ), { duration: 3000 });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-transparent py-20 overflow-hidden relative border-t border-rose-100">
            {/* Background Decor */}
            <div className="absolute top-20 left-10 text-rose-100/50 -rotate-12">
                <Heart size={120} fill="currentColor" />
            </div>
            <div className="absolute bottom-20 right-10 text-rose-100/50 rotate-12">
                <Heart size={160} fill="currentColor" />
            </div>

            <div className="text-center z-10 px-6">
                <AnimatePresence mode="wait">
                    {yesPressed ? (
                        <motion.div
                            key="celebration"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-4 flex gap-4 text-7xl">
                                <motion.div
                                    animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    🫵
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                >
                                    🤣
                                </motion.div>
                            </div>
                            <Title as="h2" className="text-5xl md:text-7xl font-bold text-rose-600 mb-8 font-serif leading-tight">
                                Sorry, <br />
                                <span className="text-rose-500">Main Randwa Hoon!</span>
                            </Title>

                            {/* Giant Animated Laughing Emoji */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, -10, 10, -10, 0],
                                    y: [0, -20, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-[150px] leading-none mb-8 drop-shadow-2xl filter"
                            >
                                🤣
                            </motion.div>

                            {/* Confetti Explosion */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(60)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 0, y: 0, scale: 0.5, opacity: 1 }}
                                        animate={{
                                            x: (Math.random() - 0.5) * 1400,
                                            y: (Math.random() - 0.5) * 1400,
                                            rotate: Math.random() * 720,
                                            opacity: 0,
                                            scale: Math.random() * 2
                                        }}
                                        transition={{ duration: 3, ease: "easeOut" }}
                                        className="absolute top-1/2 left-1/2 text-5xl"
                                    >
                                        {["❤️", "💖", "💕", "✨", "🌸", "💍"][Math.floor(Math.random() * 6)]}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center"
                        >
                            <Text className="text-rose-400 font-medium tracking-[0.3em] uppercase text-xs mb-6 block">
                                The Final Mystery
                            </Text>
                            <Title as="h2" className="text-5xl md:text-7xl font-bold text-rose-600 mb-16 font-serif leading-tight max-w-3xl">
                                Will You Do Me The Honor Of Being <br />
                                <span className="italic text-rose-500 underline decoration-rose-300 underline-offset-8">My Valentine</span>?
                            </Title>

                            <div className="flex flex-col md:flex-row gap-12 items-center justify-center relative min-h-[100px] w-full">
                                <Button
                                    as={motion.button}
                                    // @ts-ignore
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(225, 29, 72, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setYesPressed(true)}
                                    size="lg"
                                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-8 px-20 rounded-[2.5rem] text-3xl shadow-2xl transition-all duration-300 z-20 h-auto"
                                >
                                    Yes, Absolutely!
                                </Button>

                                <Button
                                    as={motion.button}
                                    // @ts-ignore
                                    animate={noPosition}
                                    transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                                    onHoverStart={handleNoHover}
                                    onClick={handleNoHover}
                                    variant="outline"
                                    className="bg-rose-100/50 backdrop-blur-md border-2 border-rose-400 text-rose-600 font-semibold py-4 px-10 rounded-full text-xl transition-all h-fit z-10 hover:bg-rose-200 hover:border-rose-500 hover:text-rose-700"
                                    style={{ position: 'relative' }}
                                >
                                    No
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
