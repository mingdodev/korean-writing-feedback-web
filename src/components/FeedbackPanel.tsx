import { FeedbackData } from "@/pages/Index";
import OverallFeedbackCard from "./OverallFeedbackCard";
import SentenceFeedbackCard from "./SentenceFeedbackCard";

interface FeedbackPanelProps {
  data: FeedbackData;
}

const FeedbackPanel = ({ data }: FeedbackPanelProps) => {
  return (
    <div className="space-y-4">
      <OverallFeedbackCard
        type="context"
        title="AI 선생님의 피드백"
        feedback={data.contextFeedback}
      />

      {data.sentenceFeedbacks.map((sentenceFeedback, idx) => (
        <SentenceFeedbackCard
          key={idx}
          type="sentence"
          originalSentence={sentenceFeedback.originalSentence}
          correctedSentence={sentenceFeedback.correctedSentence}
          feedback={sentenceFeedback.feedback}
        />
      ))}
    </div>
  );
};

export default FeedbackPanel;
