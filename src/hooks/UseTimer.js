import { useEffect, useRef, useState } from "react";

const useTimer = (initialActive = false) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(initialActive);
  const intervalRef = useRef(null);

  const start = () => setIsActive(true);

  const stop = () => setIsActive(false);

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
