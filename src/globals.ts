import { getDateFormatter, number } from 'svelte-i18n';

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_TITLE = 'Satbayev University - Petroleum Engineering';

export enum UserRole {
  user = "user",
  admin = "admin"
};

export enum DataType {
  category = "category", 
  answer = "answer", 
  unknown = "unknown"
};

export interface ContentType {
  type: DataType;
};

export interface Content extends ContentType {
  id: number,
  name: string,
  path: string,
  title: string,
  createdAt: string,
  updatedAt: string,
  parents: Category[]
};

export interface Answer extends Content {
  content: string,
  messagesCount: number
};

export interface Category extends Content {  
  description: string,
  answersCount: number,
  categories: Category[],
  answers: Answer[]
};

export interface User {
  email: string,
  name: string,
  role: UserRole,
  image: string,
  createdAt: string,
  updatedAt: string
};

export interface Session {
  token: string,
  user: User,
  createdAt: string
};

export interface SearchSettings {
  categoryTitle?: string,
  description?: string,
  answersCountFrom?: number,
  answersCountTo?: number,
  createdAtFrom?: Date,
  createdAtTo?: Date,

  contentTitle?: string,
  content?: string,
  updatedAtFrom?: Date,
  updatedAtTo?: Date
};

export function formatDate(dateStr: string, language: string): string {
  return getDateFormatter({
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    locale: language
  }).format(Date.parse(dateStr));
}

export function displayErrorMessage(elem: HTMLInputElement, message: string) {
  if(!elem.validity.valid) {
    elem.setCustomValidity(message);
  } else {
    elem.setCustomValidity('');
  }
}
