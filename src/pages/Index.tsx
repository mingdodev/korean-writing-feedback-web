import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputForm from "@/components/InputForm";
import LoadingState from "@/components/LoadingState";
import ResultView from "@/components/ResultView";

export type FeedbackData = {
  title: string;
  content: string;
  contextFeedback: string;
  sentenceFeedbacks: Array<{
    originalSentence: string;
    correctedSentence: string;
    feedback: string;
    startIndex: number;
    endIndex: number;
  }>;
};

const Index = () => {
  const [viewState, setViewState] = useState<"input" | "loading" | "result">("input");
  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);
  const [previousInput, setPreviousInput] = useState<{ title: string; content: string } | null>(null);

  const handleSubmit = async (title: string, content: string) => {
    setPreviousInput({ title, content });
    setViewState("loading");
    
    // 백엔드 통합 전 API call 대신 모의 데이터 사용
    setTimeout(() => {
      const mockFeedback: FeedbackData = {
        title,
        content,
        contextFeedback: "문맥 관련 피드백 또는 잘한 점이 응답됩니다.",
        sentenceFeedbacks: [
          {
            originalSentence: "저는 어제 학교에 갔어요.",
            correctedSentence: "저는 어제 학교에 갔습니다.",
            feedback: "문어에서는 -어요/-아요 대신 -습니다/-ㅂ니다 를 사용하는 것이 좋아요.",
            startIndex: content.indexOf("저는 어제 학교에 갔어요."),
            endIndex: content.indexOf("저는 어제 학교에 갔어요.") + "저는 어제 학교에 갔어요.".length,
          },
        ],
      };
      
      setFeedbackData(mockFeedback);
      setViewState("result");
    }, 2000);
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
