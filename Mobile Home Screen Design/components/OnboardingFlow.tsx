import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ProgressBar } from "./ui/loading-states";
import { 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Star,
  Calendar,
  MessageCircle 
} from "lucide-react";
import { cn } from "./ui/utils";

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  benefits?: string[];
}

interface OnboardingFlowProps {
  onComplete: () => void;
  onSkip?: () => void;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "welcome",
    title: "Welcome to CareerCurve! 👋",
    description: "Your personal career growth companion. Let's help you accelerate your professional journey.",
    icon: Star,
    benefits: [
      "Connect with experienced mentors",
      "Practice with mock interviews",
      "Track your progress",
      "Get personalized recommendations"
    ]
  },
  {
    id: "mentors",
    title: "Connect with Expert Mentors",
    description: "Book 1-on-1 sessions with industry professionals who've been where you want to go.",
    icon: Users,
    benefits: [
      "FAANG engineers and senior leaders",
      "Personalized career guidance",
      "Real-world insights and tips",
      "Flexible scheduling"
    ]
  },
  {
    id: "practice",
    title: "Master Your Interviews",
    description: "Practice makes perfect. Get ready for your dream job with realistic mock interviews.",
    icon: Target,
    benefits: [
      "System design interviews",
      "Coding challenges",
      "Behavioral questions",
      "Instant feedback and tips"
    ]
  },
  {
    id: "growth",
    title: "Track Your Progress",
    description: "See your improvement over time and celebrate your wins along the way.",
    icon: TrendingUp,
    benefits: [
      "Performance analytics",
      "Skill assessments",
      "Goal tracking",
      "Achievement badges"
    ]
  }
];

export function OnboardingFlow({ onComplete, onSkip }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  const currentStepData = onboardingSteps[currentStep];
  const isLastStep = currentStep === onboardingSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (isLastStep) {
      handleComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsCompleting(true);
    // Simulate completion delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    onComplete();
  };

  const handleSkip = () => {
    onSkip?.();
  };

  const Icon = currentStepData.icon;

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Header with progress */}
      <div className="px-4 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {onboardingSteps.length}
          </div>
          {!isLastStep && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleSkip}
              className="text-muted-foreground hover:text-foreground"
            >
              Skip
            </Button>
          )}
        </div>
        
        <ProgressBar 
          value={currentStep + 1} 
          max={onboardingSteps.length}
          className="mb-6"
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 flex flex-col justify-center">
        <div className="text-center space-y-6 max-w-sm mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="h-10 w-10 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            {currentStepData.title}
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-center leading-relaxed">
            {currentStepData.description}
          </p>

          {/* Benefits */}
          {currentStepData.benefits && (
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="space-y-3">
                {currentStepData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-3">
        <Button 
          onClick={handleNext}
          className="w-full h-12"
          disabled={isCompleting}
        >
          {isCompleting ? (
            <>
              <CheckCircle className="h-5 w-5 mr-2" />
              Getting Started...
            </>
          ) : isLastStep ? (
            <>
              <CheckCircle className="h-5 w-5 mr-2" />
              Get Started
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>

        {!isFirstStep && (
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            className="w-full"
            disabled={isCompleting}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        )}
      </div>

      {/* Step indicators */}
      <div className="flex justify-center space-x-2 pb-8">
        {onboardingSteps.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-8 rounded-full transition-all duration-200",
              index <= currentStep 
                ? "bg-primary" 
                : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}

// Quick setup component for existing users
interface QuickSetupProps {
  onComplete: () => void;
  userName?: string;
}

export function QuickSetup({ onComplete, userName = "User" }: QuickSetupProps) {
  const [goals, setGoals] = useState<string[]>([]);
  const [experience, setExperience] = useState<string>("");

  const careerGoals = [
    { id: "interview", label: "Ace my interviews", icon: Target },
    { id: "promotion", label: "Get promoted", icon: TrendingUp },
    { id: "switch", label: "Switch careers", icon: Users },
    { id: "skills", label: "Learn new skills", icon: Star },
  ];

  const experienceLevels = [
    { id: "entry", label: "Entry Level (0-2 years)" },
    { id: "mid", label: "Mid Level (3-5 years)" },
    { id: "senior", label: "Senior Level (6+ years)" },
    { id: "lead", label: "Leadership Role" },
  ];

  const toggleGoal = (goalId: string) => {
    setGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const canComplete = goals.length > 0 && experience.length > 0;

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div className="flex-1 px-4 py-8">
        <div className="max-w-sm mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {userName}! 👋
            </h1>
            <p className="text-muted-foreground">
              Let's personalize your experience
            </p>
          </div>

          {/* Goals Selection */}
          <div className="space-y-3">
            <h2 className="font-semibold">What are your career goals?</h2>
            <div className="grid grid-cols-2 gap-3">
              {careerGoals.map((goal) => {
                const Icon = goal.icon;
                const isSelected = goals.includes(goal.id);
                
                return (
                  <Card
                    key={goal.id}
                    className={cn(
                      "p-3 cursor-pointer transition-all duration-200",
                      isSelected 
                        ? "bg-primary/10 border-primary ring-2 ring-primary/20" 
                        : "hover:bg-accent"
                    )}
                    onClick={() => toggleGoal(goal.id)}
                  >
                    <div className="text-center space-y-2">
                      <Icon className={cn(
                        "h-6 w-6 mx-auto",
                        isSelected ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className="text-sm font-medium">{goal.label}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-3">
            <h2 className="font-semibold">What's your experience level?</h2>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <Card
                  key={level.id}
                  className={cn(
                    "p-3 cursor-pointer transition-all duration-200",
                    experience === level.id 
                      ? "bg-primary/10 border-primary ring-2 ring-primary/20" 
                      : "hover:bg-accent"
                  )}
                  onClick={() => setExperience(level.id)}
                >
                  <span className="text-sm font-medium">{level.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Complete Button */}
      <div className="p-4">
        <Button 
          onClick={onComplete}
          className="w-full h-12"
          disabled={!canComplete}
        >
          <CheckCircle className="h-5 w-5 mr-2" />
          Complete Setup
        </Button>
      </div>
    </div>
  );
}