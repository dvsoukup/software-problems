export type Question = {
  id: number;
  name: string;
  tags: string[];
};
export type Volunteer = {
  id: string;
  tags: string[];
};

export type QuestionsVolunteers = {
  questions: Question[];
  volunteers: Volunteer[];
};

export type AssignedQuestion = {
  questionId: number;
  volunteer: string;
};

export default class QuestionAssignees {
  getVolunteers(data: QuestionsVolunteers): AssignedQuestion[] {
    return [{ questionId: 1, volunteer: "xy" }];
  }
}
