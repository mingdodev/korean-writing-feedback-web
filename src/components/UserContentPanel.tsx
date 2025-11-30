import { FeedbackData } from "@/pages/Index";

interface UserContentPanelProps {
  data: FeedbackData;
  onSentenceClick: (sentenceId: number) => void;
}

const UserContentPanel = ({ data, onSentenceClick }: UserContentPanelProps) => {
  const hasErrorSentences = data.sentences.some(s => s.grammar_feedback !== null);

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border space-y-4 h-fit lg:sticky lg:top-6">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">제목</h3>
        <p className="text-xl font-semibold text-foreground">{data.title}</p>
      </div>

      <div className="pt-4 border-t border-border">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">
          내용
        </h3>
        <div className="text-foreground text-base leading-relaxed">
          {data.sentences.map((sentence) => {
            const hasFeedback = sentence.grammar_feedback !== null;
            return (
              <span
                key={sentence.sentence_id}
                onClick={() => hasFeedback && onSentenceClick(sentence.sentence_id)}
                className={`mr-1 ${
                  hasFeedback
                    ? "bg-[hsl(var(--error-highlight))] text-[hsl(var(--error-text))] rounded px-1 font-medium cursor-pointer"
                    : "font-normal"
                }`}
              >
                {sentence.original_sentence}
              </span>
            );
          })}
        </div>
      </div>

      {hasErrorSentences && (
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <mark className="bg-[hsl(var(--error-highlight))] text-[hsl(var(--error-text))] rounded px-1">
              빨간색
            </mark>{" "}
            으로 표시한 곳은 오류가 있는 문장이에요.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserContentPanel;

