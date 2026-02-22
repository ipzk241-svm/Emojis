import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that provides timer functionality for tracking game duration.
 * Manages an interval to count seconds and provides controls to start, stop, and reset.
 *
 * @module useTimer
 * @param {boolean} [initialActive=false] - Determines if the timer should start immediately upon initialization.
 * @returns {Object} The timer state and control methods.
 * @property {number} seconds - The total elapsed time in seconds.
 * @property {Function} formatTime - Returns the elapsed time formatted as a string (MM:SS).
 * @property {Function} start - Starts or resumes the timer interval.
 * @property {Function} stop - Pauses the timer interval.
 * @property {Function} reset - Resets the elapsed seconds back to zero.
 * @property {boolean} isActive - Current state indicating whether the timer is currently running.
 */
const useTimer = (initialActive = false) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(initialActive);
  const intervalRef = useRef(null);

  /**
   * Starts the timer.
   * @function start
   */
  const start = () => setIsActive(true);

  /**
   * Stops the timer.
   * @function stop
   */
  const stop = () => setIsActive(false);

  /**
   * Resets the timer to 0 seconds.
   * @function reset
   */
  const reset = () => setSeconds(0);

  useEffect(() => {
    if (!isActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive]);

  /**
   * Formats the current seconds into a MM:SS string.
   * @function formatTime
   * @returns {string} The formatted time.
   */
  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return { seconds, formatTime, start, stop, reset, isActive };
};

export default useTimer;
