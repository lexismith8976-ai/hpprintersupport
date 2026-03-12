export interface NavItem {
  name: string;
  path: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  number: string;
  label: string;
}