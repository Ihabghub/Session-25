// src/pages/BookListPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/Store';

const BookListPage = () => {
    //@ts-ignore
  const books = useStore((state) => state.books);

  return (
    <div className="bg-gray-800 p-6">
      <h2 className="text-white text-3xl font-bold mb-4">Search Results</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-4">
            <Link to={`/books/${book.id}`}>
              <h3 className="text-blue-500 text-xl font-semibold hover:underline">{book.title}</h3>
            </Link>
            <p className="text-blue-500">Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListPage;
