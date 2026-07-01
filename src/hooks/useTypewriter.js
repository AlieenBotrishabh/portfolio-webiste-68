import { useEffect, useState } from "react";

export function useTypewriter(text, active, speed = 60) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!active) {
      setValue("");
      return undefined;
    }

    let index = 0;
    setValue("");

    const interval = window.setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [active, speed, text]);

  return value;
}