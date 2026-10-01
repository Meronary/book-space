import type { BookItem } from "../types";

const books: BookItem[] = [
  {
    id: "b-01",
    title: "Мастер и Маргарита — Михаил Булгаков",
    review: "Вечная классика о добре, зле и любви. Перечитываю каждые пару лет.",
    rating: 10,
    dateAdded: "2026-01-15",
    category: "Художественная",
    status: "read",
    isFavorite: true
  },
  {
    id: "b-02",
    title: "1984 — Джордж Оруэлл",
    review: "Жуткая антиутопия, которая со временем становится всё актуальнее.",
    rating: 9,
    dateAdded: "2026-01-18",
    category: "Художественная",
    status: "read",
    isFavorite: true
  },
  {
    id: "b-03",
    title: "Атомные привычки — Джеймс Клир",
    review: "Практичная система маленьких изменений. Помогла наладить режим.",
    rating: 8,
    dateAdded: "2026-01-22",
    category: "Художественная",
    status: "reading",
    isFavorite: false
  },
  {
    id: "b-04",
    title: "Sapiens. Краткая история человечества — Юваль Ной Харари",
    review: "Масштабный взгляд на историю человечества. Местами спорно, но очень увлекательно.",
    rating: 9,
    dateAdded: "2026-01-25",
    category: "Художественная",
    status: "read",
    isFavorite: false
  },
  {
    id: "b-05",
    title: "Три товарища — Эрих Мария Ремарк",
    review: "Трогательная история о дружбе на фоне кризисной эпохи.",
    rating: 9,
    dateAdded: "2026-02-01",
    category: "Художественная",
    status: "read",
    isFavorite: true
  },
  {
    id: "b-06",
    title: "Цветы для Элджернона — Дэниел Киз",
    review: "Сильная и грустная история, которая заставляет задуматься.",
    rating: 8,
    dateAdded: "2026-02-05",
    category: "Художественная",
    status: "read",
    isFavorite: false
  },
  {
    id: "b-07",
    title: "Дюна — Фрэнк Герберт",
    review: "Эпичная научная фантастика с глубокой политикой и экологией.",
    rating: 9,
    dateAdded: "2026-02-10",
    category: "Художественная",
    status: "reading",
    isFavorite: true
  },
  {
    id: "b-08",
    title: "Преступление и наказание — Фёдор Достоевский",
    review: "Тяжёлая, но гениальная проза о совести и морали.",
    rating: 10,
    dateAdded: "2026-02-14",
    category: "Художественная",
    status: "read",
    isFavorite: true
  },
  {
    id: "b-09",
    title: "Тонкое искусство пофигизма — Марк Мэнсон",
    review: "Освежающий взгляд на ценности. Легко читается, есть полезные мысли.",
    rating: 7,
    dateAdded: "2026-02-18",
    category: "Художественная",
    status: "read",
    isFavorite: false
  },
  {
    id: "b-10",
    title: "Шантарам — Грегори Дэвид Робертс",
    review: "Захватывающий роман о побеге, Бомбее и перерождении. Читается на одном дыхании.",
    rating: 8,
    dateAdded: "2026-02-22",
    category: "Художественная",
    status: "to-read",
    isFavorite: false
  },
];


export function getBooksMock(): Promise<BookItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 700);
  });
}