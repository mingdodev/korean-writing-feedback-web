import { SentenceSchema } from "@/types/api";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface SentenceFeedbackCardProps {
  sentence: SentenceSchema;
}

const SentenceFeedbackCard = ({ sentence }: SentenceFeedbackCardProps) => {
  // 이 카드는 grammar_feedback이 null이 아닌 경우에만 렌더링됩니다.
  const feedback = sentence.grammar_feedback;
  if (!feedback) return null;

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
          <CheckCircle2 className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 space-y-4">
          {/* 원본 문장 및 교정된 문장 */}
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">교정 전:</p>
              <p className="text-sm text-foreground bg-secondary/50 px-3 py-2 rounded">
                {sentence.original_sentence}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">교정 후:</p>
              <p className="text-sm text-foreground bg-primary/5 px-3 py-2 rounded border border-primary/20">
                {feedback.corrected_sentence}
              </p>
            </div>
          </div>

          {/* 상세 피드백 목록 */}
          <div className="space-y-3 pt-2">
            {feedback.feedbacks.map((detail, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  {detail.corrects.trim() !== '->' && (
                    <p className="font-semibold text-foreground">{detail.corrects}</p>
                  )}
                  <p className="text-muted-foreground">{detail.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceFeedbackCard;
