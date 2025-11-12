import { Sparkles } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] space-y-6">
      <div className="relative">
        <Sparkles className="h-16 w-16 text-primary animate-pulse" />
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
      </div>
      
      <div className="text-center space-y-2 max-w-md">
        <h2 className="text-2xl font-semibold text-foreground">
          피드백 생성 중...
        </h2>
        <p className="text-muted-foreground">
          AI가 글을 분석하고 피드백을 준비하는 중이에요.
          <br />
          최대 30초가 소요될 수 있어요.
        </p>
      </div>

      <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 75%; margin-left: 12.5%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingState;
