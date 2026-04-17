import { Link, useLocation } from "react-router-dom";
import { Home, Image as ImageIcon, User } from "lucide-react";
import { cn } from "../lib/utils";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "首页" },
    { path: "/photography", icon: ImageIcon, label: "作品" },
    { path: "/about", icon: User, label: "关于" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 apple-nav border-t sm:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16 px-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                isActive ? "text-ink" : "text-ink-light hover:text-ink"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "fill-ink/10" : "")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
