export type GrammarDetailSchema = {
    corrects: string;
    reason: string;
};

export type GrammarFeedbackSchema = {
    corrected_sentence: string;
    feedbacks: GrammarDetailSchema[];
}

export type SentenceSchema = {
    sentence_id: number;
    original_sentence: string;
    is_error_candidate: boolean;
    grammar_feedback: GrammarFeedbackSchema | null; 
}

export type ApiResponseSchema = {
    context_feedback: { feedback: string };
    sentences: SentenceSchema[];
};