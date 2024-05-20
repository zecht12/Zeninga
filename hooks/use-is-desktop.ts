import { useEffect, useState } from "react";

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const updateIsDesktop = () => {
        setIsDesktop(window.innerWidth >= 768);
        };

        updateIsDesktop();

        window.addEventListener("resize", updateIsDesktop);
        return () => window.removeEventListener("resize", updateIsDesktop);
    }, []);

    return isDesktop;
};

export default useIsDesktop;
