import { BookOpen, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface FeedbackCardProps {
  type: "context" | "sentence";
  title?: string;
  feedback: string;
  originalSentence?: string;
  correctedSentence?: string;
}

const OverallFeedbackCard = ({
  type,
  title,
  feedback,
}: FeedbackCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border space-y-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          {type === "context" ? (
            <BookOpen className="h-5 w-5 text-primary" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-primary" />
          )}
        </div>
        {title && (
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>
        )}
      </div>
      <div className="pl-11">
        <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
          <ReactMarkdown>{feedback}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default OverallFeedbackCard;
