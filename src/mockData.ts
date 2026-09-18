import type { BookItem } from './types';

export const mockBooks: BookItem[] = [
  { id: 'b-01', title: 'Марсианин — Энди Вейер', review: 'Отличная научная фантастика, читается на одном дыхании.', rating: 9, dateAdded: '2026-01-15', category: 'Художественная', status: 'read', isFavorite: true },
  { id: 'b-02', title: 'Sapiens. Краткая история человечества — Юваль Ной Харари', review: 'Меняет взгляд на историю нашего вида.', rating: 10, dateAdded: '2026-02-10', category: 'Научпоп', status: 'read', isFavorite: true },
  { id: 'b-03', title: 'Чистый код — Роберт Мартин', review: 'Нужно перечитать главу про форматирование.', rating: 8, dateAdded: '2026-03-05', category: 'Обучение', status: 'reading', isFavorite: false },
  { id: 'b-04', title: 'Атомные привычки — Джеймс Клир', review: 'Много полезных советов по самоорганизации.', rating: 9, dateAdded: '2026-04-20', category: 'Бизнес', status: 'read', isFavorite: false },
  { id: 'b-05', title: 'Дюна — Фрэнк Герберт', review: 'Тяжелое начало, но потом затягивает.', rating: 7, dateAdded: '2026-05-12', category: 'Художественная', status: 'read', isFavorite: false },
  { id: 'b-06', title: 'Думай медленно, решай быстро — Даниэль Канеман', review: 'Планирую прочитать в отпуске.', rating: 0, dateAdded: '2026-08-01', category: 'Научпоп', status: 'to-read', isFavorite: false },
  { id: 'b-07', title: 'Грокаем алгоритмы — Адитья Бхаргава', review: 'Очень понятные иллюстрации к базовым алгоритмам.', rating: 9, dateAdded: '2026-06-18', category: 'Обучение', status: 'read', isFavorite: true },
  { id: 'b-08', title: 'Пикник на обочине — Стругацкие', review: 'Только начал читать.', rating: 0, dateAdded: '2026-09-10', category: 'Художественная', status: 'reading', isFavorite: false },
  { id: 'b-09', title: 'От хорошего к великому — Джим Коллинз', review: '', rating: 0, dateAdded: '2026-09-15', category: 'Бизнес', status: 'to-read', isFavorite: false },
  { id: 'b-10', title: 'Искусство программирования — Дональд Кнут', review: 'Классика, которую тяжело осилить.', rating: 0, dateAdded: '2026-01-05', category: 'Обучение', status: 'to-read', isFavorite: false },
];