import React from "react";
import { cn } from "./utils";
import { Loader2 } from "lucide-react";

// Skeleton component for loading states
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  );
}

// Progress card skeleton
export function ProgressCardSkeleton() {
  return (
    <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <Skeleton className="h-6 w-8 mx-auto mb-1" />
            <Skeleton className="h-3 w-12 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Session card skeleton
export function SessionCardSkeleton() {
  return (
    <div className="p-4 border border-orange-200 bg-orange-50/50 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-48" />
            <div className="flex items-center space-x-1">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </div>
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}

// Feature card skeleton
export function FeatureCardSkeleton() {
  return (
    <div className="p-4 border rounded-lg">
      <div className="text-center space-y-2">
        <Skeleton className="h-8 w-8 mx-auto rounded-full" />
        <Skeleton className="h-4 w-20 mx-auto" />
        <Skeleton className="h-3 w-24 mx-auto" />
      </div>
    </div>
  );
}

// Full home screen skeleton
export function HomeScreenSkeleton() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-sm mx-auto">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between p-4 pt-8">
        <div className="flex items-center space-x-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-5 w-20 mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Search Bar Skeleton */}
      <div className="px-4 pb-4">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      {/* Progress Card Skeleton */}
      <div className="px-4 pb-4">
        <ProgressCardSkeleton />
      </div>

      {/* Next Session Skeleton */}
      <div className="px-4 pb-4">
        <Skeleton className="h-5 w-24 mb-3" />
        <SessionCardSkeleton />
      </div>

      {/* Quick Actions Skeleton */}
      <div className="px-4 flex-1">
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <FeatureCardSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Recent Activity Skeleton */}
      <div className="px-4 pb-4">
        <Skeleton className="h-5 w-28 mb-3" />
        <div className="p-3 border rounded-lg">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Action Skeleton */}
      <div className="p-4">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  );
}

// Spinner component for inline loading
interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <Loader2 
      className={cn(
        "animate-spin text-muted-foreground",
        sizeClasses[size],
        className
      )}
    />
  );
}

// Loading overlay component
interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  className?: string;
}

export function LoadingOverlay({ 
  isVisible, 
  message = "Loading...", 
  className 
}: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-background/80 backdrop-blur-sm z-50",
        "flex items-center justify-center",
        className
      )}
      role="progressbar"
      aria-label={message}
    >
      <div className="text-center space-y-3">
        <Spinner size="lg" className="mx-auto" />
        <p className="text-sm text-muted-foreground font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}

// Progress bar component
interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  label?: string;
}

export function ProgressBar({ 
  value, 
  max = 100, 
  className,
  label 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{label}</span>
          <span className="text-foreground font-medium">{value}/{max}</span>
        </div>
      )}
      <div 
        className="h-2 bg-secondary rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}