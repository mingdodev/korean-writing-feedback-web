import { FeedbackData } from "@/pages/Index";
import OverallFeedbackCard from "./OverallFeedbackCard";
import SentenceFeedbackCard from "./SentenceFeedbackCard";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

interface FeedbackPanelProps {
  data: FeedbackData;
}

const FeedbackPanel = ({ data }: FeedbackPanelProps) => {
  const [isContextOpen, setIsContextOpen] = useState(true);
  const [isGrammarOpen, setIsGrammarOpen] = useState(true);

  // 피드백이 있는 문장만 필터링
  const sentencesWithFeedback = data.sentences.filter(
    (sentence) => sentence.grammar_feedback !== null
  );

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">문맥 피드백</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsContextOpen(!isContextOpen)}
          >
            {isContextOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
        {isContextOpen && (
          <OverallFeedbackCard
            type="context"
            feedback={data.contextFeedback}
          />
        )}
      </div>

      {sentencesWithFeedback.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight">문법 피드백</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsGrammarOpen(!isGrammarOpen)}
            >
              {isGrammarOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
          {isGrammarOpen && (
            <div className="max-h-[42rem] overflow-y-auto space-y-4 pr-2 -mr-2">
              {sentencesWithFeedback.map((sentence) => (
                <div
                  key={sentence.sentence_id}
                  id={`feedback-card-${sentence.sentence_id}`}
                >
                  <SentenceFeedbackCard sentence={sentence} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackPanel;
