import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <div className="relative h-7 w-7">
            <Sparkles 
              className="h-7 w-7 absolute inset-0"
              style={{
                fill: 'url(#sparkles-gradient)',
                stroke: 'url(#sparkles-gradient)',
                strokeWidth: 2.5
              }}
            />
            <svg className="absolute inset-0 w-0 h-0">
              <defs>
                <linearGradient id="sparkles-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="rgb(128, 255, 31)" />
                  <stop offset="100%" stopColor="rgb(232, 255, 169)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          Korean Writing Feedback AI
        </h1>
      </div>
    </header>
  );
};

export default Header;
