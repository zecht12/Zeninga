import { Variants } from "framer-motion";

export const textVariant = (delay: any) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
            type: "spring",
            duration: 1.25,
            delay: delay,
            },
        },
    };
};

export const fadeIn = (direction:any, delay:any) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
            type: 'tween',
            duration: 1.5,
            delay: delay,
            ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
            type: 'tween',
            duration: 1.4,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
export const zoomIn = (delay: any, duration: any) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
            type: "tween",
            delay: delay,
            duration: duration,
            ease: "easeOut",
            },
        },
    };
};

export const slideIn = (direction: string, type: any, delay: any, duration: any) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
            },
        },
    };
};

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
    return {
        hidden: {},
        show: {
            transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren || 0,
            },
        },
    };
};

export const cardVariantsFadeIn: Variants = {
    offscreen: {
        x: 0,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity:1,
        transition: {
            type: "spring",
            duration: 1.8
        }
    }
};

export const cardVariantsX: Variants = {
    offscreen: {
        x: -10,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.8
        }
    }
};

export const cardVariantsY1: Variants = {
    offscreen: {
        y: 10,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity:1,
        transition: {
            type: "spring",
            duration: 1.8
        }
    }
};

export const cardVariantsY2: Variants = {
    offscreen: {
        y: -10,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity:1,
        transition: {
            type: "spring",
            duration: 1.8
        }
    }
};