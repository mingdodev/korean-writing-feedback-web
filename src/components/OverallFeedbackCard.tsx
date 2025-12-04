import { BookOpen, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface FeedbackCardProps {
  type: "context" | "sentence";
  feedback: string;
  originalSentence?: string;
  correctedSentence?: string;
}

const OverallFeedbackCard = ({
  type,
  feedback,
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
        <div className="flex-1">
          <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
            <ReactMarkdown>{feedback}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallFeedbackCard;
