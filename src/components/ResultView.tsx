import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { FeedbackData } from "@/pages/Index";
import UserContentPanel from "./UserContentPanel";
import FeedbackPanel from "./FeedbackPanel";

interface ResultViewProps {
  data: FeedbackData;
  onReset: () => void;
}

const ResultView = ({ data, onReset }: ResultViewProps) => {
  const handleSentenceClick = (sentenceId: number) => {
    const element = document.getElementById(`feedback-card-${sentenceId}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">&nbsp;피드백 결과</h2>
        <Button
          onClick={onReset}
          variant="outline"
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          새로 쓰기
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <UserContentPanel data={data} onSentenceClick={handleSentenceClick} />
        <FeedbackPanel data={data} />
      </div>
    </div>
  );
};

export default ResultView;
