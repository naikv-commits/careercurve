import React, { useState } from "react";
import { Card } from "./ui/card";
import { cn } from "./ui/utils";
import { ChevronRight } from "lucide-react";

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
  badge?: string;
  disabled?: boolean;
  className?: string;
}

export function FeatureCard({ 
  emoji, 
  title, 
  description, 
  onClick, 
  badge,
  disabled = false,
  className 
}: FeatureCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <Card 
      className={cn(
        "relative p-4 cursor-pointer transition-all duration-200",
        "hover:bg-accent hover:shadow-md hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "group",
        isPressed && "scale-95",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={`${title}: ${description}`}
      aria-disabled={disabled}
    >
      {badge && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-destructive rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="text-center space-y-2">
        <div 
          className="text-3xl mb-2 transition-transform duration-200 group-hover:scale-110"
          role="img"
          aria-label={`${title} icon`}
        >
          {emoji}
        </div>
        <h3 className="font-medium text-sm leading-tight">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle arrow indicator */}
      <ChevronRight 
        className={cn(
          "absolute bottom-2 right-2 h-3 w-3 text-muted-foreground/50",
          "transition-all duration-200",
          "group-hover:text-muted-foreground group-hover:translate-x-0.5",
          disabled && "hidden"
        )}
      />
    </Card>
  );
}