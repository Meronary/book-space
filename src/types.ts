export interface BookItem {
  id: string;
  title: string;
  review: string;
  rating: number;
  dateAdded: string;
  category: 'Художественная' | 'Научпоп' | 'Бизнес' | 'Обучение';
  status: 'to-read' | 'reading' | 'read';
  isFavorite: boolean;
}