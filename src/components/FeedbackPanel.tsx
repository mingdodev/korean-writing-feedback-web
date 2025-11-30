import { FeedbackData } from "@/pages/Index";
import OverallFeedbackCard from "./OverallFeedbackCard";
import SentenceFeedbackCard from "./SentenceFeedbackCard";

interface FeedbackPanelProps {
  data: FeedbackData;
}

const FeedbackPanel = ({ data }: FeedbackPanelProps) => {
  // 피드백이 있는 문장만 필터링
  const sentencesWithFeedback = data.sentences.filter(
    (sentence) => sentence.grammar_feedback !== null
  );

  return (
    <div className="space-y-4">
      <OverallFeedbackCard
        type="context"
        title="AI 선생님의 총평"
        feedback={data.contextFeedback}
      />

      {/* 스크롤 컨테이너 */}
      <div className="max-h-[42rem] overflow-y-auto space-y-4 pr-2 -mr-2">
        {sentencesWithFeedback.map((sentence) => (
          <div key={sentence.sentence_id} id={`feedback-card-${sentence.sentence_id}`}>
            <SentenceFeedbackCard
              sentence={sentence}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPanel;
