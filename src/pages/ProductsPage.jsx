import { useEffect, useState } from "react";

function ProductsPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://www.dbooks.org/api/recent");
        const data = await response.json();
        setBooks(data.books); // Assuming the response contains a `books` array
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="text-2xl px-6 py-10">JA'S BOOKS</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="p-2 border-2 rounded-md">
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="font-bold text-sm truncate">{book.title}</div>
            <div className="italic">{book.author}</div>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
