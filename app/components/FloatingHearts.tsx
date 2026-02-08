"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

// Sub-component for individual floating items to handle their own click/burst state
const FloatingItem = ({ item, onComplete }: { item: any, onComplete: () => void }) => {
    const [isBursting, setIsBursting] = useState(false);

    const handleBurst = () => {
        setIsBursting(true);
        // Remove from DOM after animation
        setTimeout(onComplete, 500);
    };

    return (
        <AnimatePresence>
            {!isBursting ? (
                <motion.div
                    initial={{ y: "110vh", opacity: 0, rotate: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.8, 0],
                        rotate: 360
                    }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{ duration: item.duration, ease: "linear" }}
                    onAnimationComplete={onComplete}
                    style={{
                        left: `${item.x}vw`,
                        position: "absolute",
                    }}
                    className="text-rose-400 cursor-pointer pointer-events-auto hover:text-rose-600 transition-colors z-0"
                    onClick={handleBurst}
                    whileHover={{ scale: 1.2 }}
                >
                    <item.Icon size={item.size} fill="currentColor" className="drop-shadow-sm" />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2.5, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        left: `${item.x}vw`,
                        // We use a fixed 'top' here because tracking the exact moving position is complex 
                        // without refs/layout animation, but for a burst effect, fading out in place 
                        // (conceptually) via 'exit' or this state is fine. 
                        // Actually, if we swap components, position might jump.
                        // Let's rely on AnimatePresence's 'exit' prop on the FIRST div instead for smoother UX.
                        // But wait, if we remove the first div, AnimatePresence handles the exit.
                        // So we just set isBursting to true, which removes the first div. 
                        // But we want a SPECIFIC burst animation (scale up, explode).
                        // Let's just use the 'exit' prop of the main div for simplicity and cleaner code.
                        position: "absolute",
                    }}
                    className="text-rose-600 pointer-events-none"
                >
                    {/* Placeholder for burst, but actually better to let the first div exit with a burst animation */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Simplified Sub-component that handles the burst via Framer's exit animation
const InteractiveItem = ({ item, onRemove }: { item: any, onRemove: () => void }) => {
    return (
        <motion.div
            layout
            initial={{ y: "110vh", opacity: 0, rotate: 0 }}
            animate={{
                y: "-10vh",
                opacity: [0, 0.8, 0],
                rotate: 360
            }}
            // Burst animation on exit
            exit={{ scale: 2.5, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: item.duration, ease: "linear" }}
            onAnimationComplete={onRemove}
            style={{
                left: `${item.x}vw`,
                position: "absolute",
            }}
            className="text-rose-300/60 cursor-pointer pointer-events-auto hover:text-rose-500 hover:opacity-100 transition-colors z-10"
            onClick={onRemove} // Trigger removal, which triggers exit animation (burst)
            whileHover={{ scale: 1.2 }}
        >
            <item.Icon size={item.size} fill="currentColor" />
        </motion.div>
    );
};

export default function FloatingHearts() {
    const [items, setItems] = useState<{ id: number; x: number; size: number; duration: number; Icon: any }[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const icons = [Heart, Star, Sparkles];

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => {
                const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
                const newItem = {
                    id: Date.now(),
                    x: Math.random() * 100,
                    size: Math.random() * 25 + 15,
                    duration: Math.random() * 15 + 10,
                    Icon: RandomIcon,
                };
                // Keep max 40 items
                return [...prev.slice(-39), newItem];
            });
        }, 600);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Cursor Follower */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="fixed top-0 left-0 -ml-3 -mt-3 z-50 pointer-events-none text-rose-500 mixed-blend-difference"
            >
                <div className="animate-spin-slow">
                    <Star size={24} fill="currentColor" className="animate-pulse" />
                </div>
            </motion.div>

            {/* Background Floating Elements */}
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <InteractiveItem
                        key={item.id}
                        item={item}
                        onRemove={() => setItems(prev => prev.filter(i => i.id !== item.id))}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
