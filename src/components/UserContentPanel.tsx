import { FeedbackData } from "@/pages/Index";

interface UserContentPanelProps {
  data: FeedbackData;
}

const UserContentPanel = ({ data }: UserContentPanelProps) => {
  const highlightErrors = (text: string) => {
    if (data.sentenceFeedbacks.length === 0) {
      return <p className="whitespace-pre-wrap leading-relaxed">{text}</p>;
    }

    const parts: JSX.Element[] = [];
    let lastIndex = 0;

    // 유효한 피드백만 필터링하고 startIndex 기준으로 정렬
    const validFeedbacks = data.sentenceFeedbacks
      .filter(feedback => 
        feedback.startIndex >= 0 && 
        feedback.endIndex > feedback.startIndex &&
        feedback.startIndex < text.length &&
        feedback.endIndex <= text.length
      )
      .sort((a, b) => a.startIndex - b.startIndex);

    validFeedbacks.forEach((feedback, idx) => {
      // startIndex 이전의 텍스트 추가
      if (feedback.startIndex > lastIndex) {
        parts.push(
          <span key={`text-${idx}`}>
            {text.slice(lastIndex, feedback.startIndex)}
          </span>
        );
      }

      // 하이라이트된 오류 부분 추가
      parts.push(
        <mark
          key={`error-${idx}`}
          className="bg-[hsl(var(--error-highlight))] text-[hsl(var(--error-text))] rounded px-1 font-medium"
        >
          {text.slice(feedback.startIndex, feedback.endIndex)}
        </mark>
      );

      lastIndex = Math.max(lastIndex, feedback.endIndex);
    });

    // 마지막 피드백 이후의 텍스트 추가
    if (lastIndex < text.length) {
      parts.push(<span key="text-end">{text.slice(lastIndex)}</span>);
    }

    // 유효한 피드백이 없으면 전체 텍스트 반환
    if (validFeedbacks.length === 0) {
      return <p className="whitespace-pre-wrap leading-relaxed">{text}</p>;
    }

    return <p className="whitespace-pre-wrap leading-relaxed">{parts}</p>;
  };

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
        <div className="text-foreground text-base">
          {highlightErrors(data.content)}
        </div>
      </div>

      {data.sentenceFeedbacks.length > 0 && (
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <mark className="bg-[hsl(var(--error-highlight))] text-[hsl(var(--error-text))] rounded px-1">
              빨간색
            </mark>{" "}
            으로 표시한 곳은 오류가 있는 부분이에요.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserContentPanel;
