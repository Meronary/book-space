import { useEffect, useState } from "react";
import { getBooksMock } from "./mocks/booksMock";
import type { BookItem } from "./types";

function App() {
  const [books, setBooks] = useState<BookItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBooksMock()
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);

  const totalBooks = books.length;

  const readBooks = books.filter((b) => b.status === "read");
  const readCount = readBooks.length;

  const favoriteCount = books.filter((b) => b.isFavorite).length;

  const averageRating =
    readCount > 0
      ? (
          readBooks.reduce((sum, book) => sum + book.rating, 0) /
          readCount
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

            <h2>
              Сейчас читаю
            </h2>


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

            <h2>
              Ближайшие планы
            </h2>


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


export default App;