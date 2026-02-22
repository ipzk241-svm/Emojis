import { useState, useEffect } from "react";

/**
 * Custom hook to track the current dimensions of the browser window.
 * Listens to the 'resize' event and updates the state accordingly.
 * Useful for responsive calculations, such as determining the number of columns in the game board.
 *
 * @module useWindowSize
 * @returns {Object} An object containing the current window dimensions.
 * @property {number|undefined} width - The current inner width of the window in pixels.
 * @property {number|undefined} height - The current inner height of the window in pixels.
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    /**
     * Handler to update the state with the latest window dimensions.
     * @function handleResize
     * @inner
     */
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
