
export enum View {
  HOME = 'home',
  STATISTICS = 'statistics',
  MODULES = 'modules',
  RESOURCES = 'resources',
  CHAT = 'chat',
  QUIZ = 'quiz',
  FEEDBACK = 'feedback'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface StatData {
  category: string;
  male: number;
  female: number;
}

export interface ReferenceLink {
  label: string;
  url: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  type: 'Law' | 'Article' | 'Study';
  region: 'PH' | 'Global';
  link: string;
  icon: string;
  detailedContent: string;
  keyPoints: string[];
  references?: ReferenceLink[];
}

export interface Organization {
  name: string;
  description: string;
  url: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface FeedbackSubmission {
  name: string;
  rating: number;
  comments: string;
}
