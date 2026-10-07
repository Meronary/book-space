import { useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router";

import { getBooksMock } from "./mocks/booksMock";
import type { BookItem } from "./types";


// =========================
// Layout
// =========================

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            📚 BookSpace
          </Link>

          <div className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Главная
            </NavLink>

            <NavLink
              to="/books"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Каталог
            </NavLink>

            <NavLink
              to="/books/new"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Добавить книгу
            </NavLink>

            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Статистика
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Список покупок
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}


// =========================
// Главная страница
// =========================

function Dashboard() {
  const [books, setBooks] = useState<BookItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBooksMock().then((data) => {
      setBooks(data);
      setIsLoading(false);
    });
  }, []);

  const totalBooks = books.length;

  const readBooks = books.filter((b) => b.status === "read");
  const readCount = readBooks.length;

  const favoriteCount = books.filter(
    (b) => b.isFavorite
  ).length;

  const averageRating =
    readCount > 0
      ? (
          readBooks.reduce(
            (sum, book) => sum + book.rating,
            0
          ) / readCount
        ).toFixed(1)
      : 0;

  const currentReading = books.filter(
    (b) => b.status === "reading"
  );

  const plannedBooks = books
    .filter((b) => b.status === "to-read")
    .slice(0, 3);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "read":
        return "Прочитано";

      case "reading":
        return "Читаю";

      case "to-read":
        return "В планах";

      default:
        return status;
    }
  };

  if (isLoading) {
    return (
      <div className="container">
        <header className="header">
          <h1>📚 BookSpace</h1>
          <p>Загрузка библиотеки...</p>
        </header>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>📚 BookSpace</h1>
        <p>Ваша личная библиотека</p>
      </header>

      <main>
        <section className="stats-grid">

          <div className="stat-card">
            <h3>В каталоге</h3>
            <p className="stat-number">
              {totalBooks}
            </p>
          </div>

          <div className="stat-card">
            <h3>Прочитано</h3>
            <p className="stat-number">
              {readCount}
            </p>
          </div>

          <div className="stat-card">
            <h3>Средняя оценка</h3>
            <p className="stat-number">
              ⭐ {averageRating}
            </p>
          </div>

          <div className="stat-card">
            <h3>В избранном</h3>
            <p className="stat-number">
              ❤️ {favoriteCount}
            </p>
          </div>

        </section>

        <div className="content-grid">

          <section className="list-section">
            <h2>Сейчас читаю</h2>

            {currentReading.length > 0 ? (
              <div className="book-list">

                {currentReading.map((book) => (
                  <div
                    key={book.id}
                    className="book-card"
                  >
                    <div className="book-header">

                      <h3 className="book-title">
                        {book.title}
                      </h3>

                      <span className="badge reading">
                        {getStatusLabel(book.status)}
                      </span>

                    </div>

                    <p className="book-category">
                      {book.category}
                    </p>

                    {book.review && (
                      <p className="book-review">
                        "{book.review}"
                      </p>
                    )}
                  </div>
                ))}

              </div>
            ) : (
              <p className="empty-state">
                Нет книг в процессе чтения.
              </p>
            )}
          </section>


          <section className="list-section">

            <h2>Ближайшие планы</h2>

            <div className="book-list">

              {plannedBooks.map((book) => (
                <div
                  key={book.id}
                  className="book-card"
                >
                  <div className="book-header">

                    <h3 className="book-title">
                      {book.title}
                    </h3>

                    <span className="badge planned">
                      {getStatusLabel(book.status)}
                    </span>

                  </div>

                  <p className="book-category">
                    {book.category}
                  </p>

                </div>
              ))}

            </div>

          </section>

        </div>
      </main>
    </div>
  );
}


// =========================
// Каталог
// =========================

function BooksPage() {
  const [books, setBooks] = useState<BookItem[]>([]);

  useEffect(() => {
    getBooksMock().then(setBooks);
  }, []);

  return (
    <div className="container">
      <header className="page-header">
        <h1>Каталог книг</h1>
        <p>Все книги вашей личной библиотеки</p>
      </header>

      <div className="book-list">

        {books.map((book) => (
          <div
            key={book.id}
            className="book-card"
          >
            <div className="book-header">

              <h2 className="book-title">
                {book.title}
              </h2>

              <span className="badge">
                {book.status}
              </span>

            </div>

            <p className="book-category">
              Категория: {book.category}
            </p>

            <p>
              Оценка: ⭐ {book.rating}
            </p>

            <Link
              to={`/books/${book.id}`}
              className="book-link"
            >
              Открыть книгу →
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}


// =========================
// Карточка книги
// =========================

function BookDetailsPage() {
  const { id } = useParams();

  const [book, setBook] = useState<BookItem | null>(
    null
  );

  useEffect(() => {
    getBooksMock().then((books) => {
      const foundBook = books.find(
        (book) => book.id === id
      );

      setBook(foundBook ?? null);
    });
  }, [id]);

  if (!book) {
    return (
      <div className="container">
        <h1>Книга не найдена</h1>

        <Link to="/books">
          ← Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="container">

      <header className="page-header">
        <h1>{book.title}</h1>
        <p>Подробная информация о книге</p>
      </header>

      <section className="book-card">

        <h2>{book.title}</h2>

        <p>
          <strong>Категория:</strong>{" "}
          {book.category}
        </p>

        <p>
          <strong>Оценка:</strong> ⭐ {book.rating}
        </p>

        <p>
          <strong>Статус:</strong>{" "}
          {book.status}
        </p>

        {book.review && (
          <p className="book-review">
            "{book.review}"
          </p>
        )}

        <Link to="/books" className="book-link">
          ← Вернуться в каталог
        </Link>

      </section>

    </div>
  );
}


// =========================
// Добавление книги
// =========================

function NewBookPage() {
  return (
    <div className="container">

      <header className="page-header">
        <h1>Добавление книги</h1>
        <p>
          Здесь будет форма добавления новой книги
        </p>
      </header>

      <section className="book-card">
        <h2>Новая книга</h2>

        <p>
          Функциональность формы будет реализована
          в будущем.
        </p>
      </section>

    </div>
  );
}


// =========================
// Статистика
// =========================

function StatisticsPage() {
  return (
    <div className="container">

      <header className="page-header">
        <h1>Статистика</h1>
        <p>
          Статистика чтения вашей библиотеки
        </p>
      </header>

      <section className="book-card">
        <h2>Статистика библиотеки</h2>

        <p>
          Здесь будет отображаться распределение
          книг по категориям и динамика чтения.
        </p>
      </section>

    </div>
  );
}


// =========================
// Список покупок
// =========================

function WishlistPage() {
  return (
    <div className="container">

      <header className="page-header">
        <h1>Список покупок</h1>
        <p>
          Книги, которые планируется приобрести
        </p>
      </header>

      <section className="book-card">
        <h2>Список книг</h2>

        <p>
          Здесь будет отображаться список книг
          для покупки в бумажном виде.
        </p>
      </section>

    </div>
  );
}


// =========================
// 404
// =========================

function NotFoundPage() {
  return (
    <div className="container">

      <header className="page-header">
        <h1>Страница не найдена</h1>

        <p>
          Такой страницы в BookSpace не существует.
        </p>
      </header>

      <Link to="/">
        ← Вернуться на главную
      </Link>

    </div>
  );
}


// =========================
// Router
// =========================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/books"
            element={<BooksPage />}
          />

          <Route
            path="/books/new"
            element={<NewBookPage />}
          />

          <Route
            path="/books/:id"
            element={<BookDetailsPage />}
          />

          <Route
            path="/statistics"
            element={<StatisticsPage />}
          />

          <Route
            path="/wishlist"
            element={<WishlistPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;