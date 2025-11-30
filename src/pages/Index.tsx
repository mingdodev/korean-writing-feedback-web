import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputForm from "@/components/InputForm";
import LoadingState from "@/components/LoadingState";
import ResultView from "@/components/ResultView";
import { fetchFeedback } from "@/lib/api";
import { SentenceSchema } from "@/types/api";

// View 컴포넌트에서 사용할 새로운 데이터 타입
export type FeedbackData = {
  title: string;
  contextFeedback: string;
  sentences: SentenceSchema[];
};

const Index = () => {
  const [viewState, setViewState] = useState<"input" | "loading" | "result">("input");
  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);
  const [previousInput, setPreviousInput] = useState<{ title: string; content: string } | null>(null);

  const handleSubmit = async (title: string, content: string) => {
    setPreviousInput({ title, content });
    setViewState("loading");

    try {
      // 1. 수정된 fetchFeedback 함수 호출
      const apiResponse = await fetchFeedback(title, content);

      // 2. API 응답을 View에서 사용할 데이터 형식으로 변환
      const newFeedbackData: FeedbackData = {
        title,
        contextFeedback: apiResponse.context_feedback.feedback,
        sentences: apiResponse.sentences, // 서버가 내려준 문장 배열을 그대로 사용
      };
      
      setFeedbackData(newFeedbackData);
      setViewState("result");

    } catch (error) {
      console.error("Feedback fetch failed:", error);
      toast.error(error instanceof Error ? error.message : "피드백 생성 중 오류가 발생했습니다.");
      setViewState("input");
    }
  };

  const handleReset = () => {
    setViewState("input");
    setFeedbackData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {viewState === "input" && (
          <InputForm 
            onSubmit={handleSubmit} 
            initialTitle={previousInput?.title || ""}
            initialContent={previousInput?.content || ""}
          />
        )}
        {viewState === "loading" && <LoadingState />}
        {viewState === "result" && feedbackData && (
          <ResultView data={feedbackData} onReset={handleReset} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
