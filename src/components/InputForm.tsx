import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

interface InputFormProps {
  onSubmit: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
}

const InputForm = ({ onSubmit, initialTitle = "", initialContent = "" }: InputFormProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit(title, content);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-lg font-semibold">
              제목
            </Label>
            <p className="text-sm text-muted-foreground">
              글의 제목을 입력해주세요.
            </p>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-lg font-semibold">
              내용
            </Label>
            <p className="text-sm text-muted-foreground">
              글의 내용을 입력해주세요.
            </p>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-2 min-h-[300px] resize-y"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-14 bg-primary/90 hover:bg-primary text-white font-semibold text-lg transition-all shadow-md hover:shadow-lg"
        >
          <Sparkles className="mr-2 h-8 w-8 fill-white stroke-white" strokeWidth={2.5} />
          AI 피드백 생성
        </Button>
      </form>
    </div>
  );
};

export default InputForm;
