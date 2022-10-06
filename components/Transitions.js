import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
    const { asPath } = useRouter();

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
                    key={asPath.startsWith("/#") ? '' : asPath}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;