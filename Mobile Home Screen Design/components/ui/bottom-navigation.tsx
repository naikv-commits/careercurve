import React from "react";
import { cn } from "./utils";
import { Home, Calendar, Search, MessageCircle, User } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  href?: string;
}

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "sessions",
    label: "Sessions",
    icon: Calendar,
  },
  {
    id: "explore",
    label: "Explore",
    icon: Search,
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageCircle,
    badge: 2,
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
];

export function BottomNavigation({ 
  activeTab = "home", 
  onTabChange, 
  className 
}: BottomNavigationProps) {
  const handleTabClick = (tabId: string) => {
    onTabChange?.(tabId);
  };

  return (
    <nav 
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-background border-t border-border",
        "safe-area-pb-4 px-2 py-2",
        "flex items-center justify-around",
        "z-50",
        className
      )}
      role="tablist"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={cn(
              "relative flex flex-col items-center justify-center",
              "min-h-[48px] min-w-[48px] px-2 py-1",
              "text-xs font-medium",
              "transition-colors duration-200",
              "rounded-lg",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              isActive 
                ? "text-primary bg-primary/10" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            role="tab"
            aria-selected={isActive}
            aria-label={`${item.label}${item.badge ? ` (${item.badge} notifications)` : ""}`}
            type="button"
          >
            <div className="relative">
              <Icon 
                className={cn(
                  "h-5 w-5 mb-1",
                  isActive ? "text-primary" : "text-current"
                )} 
              />
              {item.badge && item.badge > 0 && (
                <span 
                  className={cn(
                    "absolute -top-1 -right-1",
                    "h-4 w-4 rounded-full",
                    "bg-destructive text-destructive-foreground",
                    "text-xs font-bold",
                    "flex items-center justify-center",
                    "animate-pulse"
                  )}
                  aria-label={`${item.badge} notifications`}
                >
                  {item.badge > 9 ? "9+" : item.badge}
                </span>
              )}
            </div>
            <span 
              className={cn(
                "text-xs leading-none",
                isActive ? "text-primary font-semibold" : "text-current"
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

// Safe area bottom padding utility component
export function SafeAreaBottom({ className }: { className?: string }) {
  return (
    <div 
      className={cn("h-16 w-full", className)} 
      aria-hidden="true"
    />
  );
}