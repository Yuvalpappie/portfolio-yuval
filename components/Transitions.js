import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Transition = ({ children }) => {
    const { asPath } = useRouter();

    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    console.log(width);

    const variants = {
        out: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.3
            }
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.1
            }
        }
    };
    return (
        <div className="effect-1">
            <AnimatePresence
                initial={false}
                mode='wait'
            >
                <motion.div
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                    key={asPath.startsWith("/#") || width < 700 ? '' : asPath}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;