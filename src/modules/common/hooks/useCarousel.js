import { useState, useEffect } from "react";
import { categories } from "../../../constants";

const useCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCategories, setVisibleCategories] = useState(4);

    useEffect(() => {
        const updateVisibleCategories = () => {
            if (window.innerWidth < 640) {
                setVisibleCategories(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCategories(2);
            } else if (window.innerWidth < 1280) {
                setVisibleCategories(3);
            } else {
                setVisibleCategories(4);
            }
        };

        updateVisibleCategories();
        window.addEventListener("resize", updateVisibleCategories);

        return () => {
            window.removeEventListener("resize", updateVisibleCategories);
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : categories.length - visibleCategories
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < categories.length - visibleCategories ? prevIndex + 1 : 0
        );
    };

    return { currentIndex, visibleCategories, handlePrev, handleNext };
};

export default useCarousel;
