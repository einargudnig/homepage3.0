import { useState, useEffect } from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

export const useScrollDirection = ({ initialDirection, thresholdPixels, off }) => {
    const [scrollDirection, setScrollDirection] = useState(initialDirection);

    useEffect(() => {
        const threshold = thresholdPixels || 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                // We haven't exceeded the threshold

                ticking = false;
                return;
            }

            setScrollDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection);
                ticking = true;
            }
        };


        /**
         * Bind the scoll handler if 'off' is set to false.
         * If 'off' is set to true reset the scroll direction
         */
        !off ? window.addEventListener('scroll', onScroll) : setScrollDirection(initialDirection);

        return () => window.removeEventListener('scroll', onScroll);
    }, [initialDirection, thresholdPixels, off]);

    return scrollDirection;
};



