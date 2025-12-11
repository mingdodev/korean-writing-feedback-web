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
    const wrapperElement = document.getElementById(`feedback-card-${sentenceId}`);
    if (wrapperElement) {
      wrapperElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // 실제 카드 요소는 wrapper의 첫 번째 자식입니다.
      const cardElement = wrapperElement.firstElementChild;
      if (cardElement) {
        // 기존 애니메이션 클래스를 제거하여 반복 실행이 가능하게 합니다.
        cardElement.classList.remove("animate-flash");

        // 브라우저가 클래스 제거를 인지할 시간을 주기 위해 약간의 딜레이를 줍니다.
        requestAnimationFrame(() => {
          cardElement.classList.add("animate-flash");
        });

        // 애니메이션이 끝난 후 클래스를 다시 제거합니다.
        setTimeout(() => {
          cardElement.classList.remove("animate-flash");
        }, 1500);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">&nbsp;AI 선생님의 피드백 결과</h2>
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
