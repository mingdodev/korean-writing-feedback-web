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
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-4">문맥 피드백</h2>
        <OverallFeedbackCard
          type="context"
          feedback={data.contextFeedback}
        />
      </div>

      {/* 스크롤 컨테이너 */}
      <div className="max-h-[42rem] overflow-y-auto space-y-4 pr-2 -mr-2">
        {sentencesWithFeedback.map((sentence, index) => (
          <div key={sentence.sentence_id} id={`feedback-card-${sentence.sentence_id}`}>
            <SentenceFeedbackCard
              sentence={sentence}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPanel;
