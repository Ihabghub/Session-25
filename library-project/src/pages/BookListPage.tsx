// src/pages/BookListPage.tsx
import React from 'react';
import useStore from '../store/Store';

const BookListPage = () => {
    //@ts-ignore
  const books = useStore((state) => state.books);

  return (
    
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Search Results</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-4">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListPage;
