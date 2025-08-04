import { Card } from "./ui/card";

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
}

export function FeatureCard({ emoji, title, description, onClick }: FeatureCardProps) {
  return (
    <Card 
      className="p-4 cursor-pointer hover:bg-accent transition-colors active:scale-95 transition-transform"
      onClick={onClick}
    >
      <div className="text-center space-y-2">
        <div className="text-3xl">{emoji}</div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}