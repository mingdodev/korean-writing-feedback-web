import { ApiResponseSchema } from "@/types/api";

/**
 * 서버에 텍스트를 보내고 피드백을 요청합니다.
 * @param title 사용자가 입력한 제목
 * @param content 사용자가 입력한 내용
 * @returns 서버로부터 받은 피드백 데이터
 */
export const fetchFeedback = async (title: string, contents: string): Promise<ApiResponseSchema> => {
  const payload = { title, contents };
  const response = await fetch('/api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '피드백을 받아오는 데 실패했습니다.');
  }

  return response.json();
};
