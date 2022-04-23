import { Choices } from "./choices"

export interface Question {
    id: number;
    courseId: number;
    questionText: string;
    choices: Array<Choices>;
    explanation: string;



}