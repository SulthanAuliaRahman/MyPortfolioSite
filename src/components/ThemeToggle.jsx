import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsIsDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setIsIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            setIsIsDarkMode(false);
        }
    },[])
    const ToggleTheme= ()=> {
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light")
            setIsIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark")
            setIsIsDarkMode(true);
        }
    }

  return (
    <button 
    onClick={ToggleTheme} 
    className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
    
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-950" />
      )}
    </button>
  );
};
