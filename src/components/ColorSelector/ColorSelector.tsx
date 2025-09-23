"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";

const colorMap = {
  fire: "#BF5D67",
  ocean: "#68AFC7",
  jungle: "#5DBF9F",
  candy: "#D87AA7",
  galaxy: "#A065BB",
};

export default function ColorSelector() {
  const { theme, changeTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);
  const [currentKey, setCurrentKey] = useState<keyof typeof colorMap>("fire");

  useEffect(() => {
    // Sync with actual theme name
    if (Object.keys(colorMap).includes(theme.name)) {
      setCurrentKey(theme.name as keyof typeof colorMap);
    }
  }, [theme.name]);

  const toggleOptions = () => setShowOptions((prev) => !prev);

  return (
    <div className="relative inline-block z-20">
      <div
        className="flex items-center gap-2 p-2 rounded-xl cursor-pointer mr-6 bg-slate-100"
        onClick={toggleOptions}
      >
        <div
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: colorMap[currentKey] }}
        />
        {showOptions ? (
          <ChevronUp size={16} color={theme.primary} />
        ) : (
          <ChevronDown size={16} color={theme.primary} />
        )}
      </div>

      {showOptions && (
        <div className="absolute mt-2 bg-white shadow-lg p-2 rounded-xl z-10 flex flex-col gap-2">
          {Object.entries(colorMap).map(([key, color]) => {
            if (key === currentKey) return null;
            return (
              <div
                key={key}
                className="w-6 h-6 rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => {
                  changeTheme(key as keyof typeof colorMap);
                  setCurrentKey(key as keyof typeof colorMap);
                  setShowOptions(false);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
