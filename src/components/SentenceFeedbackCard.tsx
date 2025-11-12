import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle2 } from "lucide-react";

interface FeedbackCardProps {
  type: "context" | "sentence";
  title?: string;
  feedback: string;
  originalSentence?: string;
  correctedSentence?: string;
}

const SentenceFeedbackCard = ({
  type,
  feedback,
  originalSentence,
  correctedSentence,
}: FeedbackCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
          {type === "context" ? (
            <BookOpen className="h-5 w-5 text-primary" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-primary" />
          )}
        </div>
        <div className="flex-1 space-y-4">
          {type === "sentence" && originalSentence && correctedSentence && (
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">교정 전:</p>
                <p className="text-sm text-foreground bg-secondary/50 px-3 py-2 rounded">
                  {originalSentence}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">교정 후:</p>
                <p className="text-sm text-foreground bg-primary/5 px-3 py-2 rounded border border-primary/20">
                  {correctedSentence}
                </p>
              </div>
            </div>
          )}
          <p className="text-sm text-foreground leading-relaxed">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default SentenceFeedbackCard;
