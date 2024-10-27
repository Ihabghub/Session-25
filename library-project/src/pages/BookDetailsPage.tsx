// src/pages/BookDetailsPage.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/Store';

const BookDetailsPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  //@ts-ignore
  const fetchBookDetails = useStore((state) => state.fetchBookDetails);
  //@ts-ignore
  const bookDetails = useStore((state) => state.bookDetails);
  //@ts-ignore
  const isLoading = useStore((state) => state.isLoading);
  //@ts-ignore
  const error = useStore((state) => state.error);

  useEffect(() => {
    if (bookId) {
      fetchBookDetails(bookId);
    }
  }, [bookId, fetchBookDetails]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8 bg-blue-500 text-gray-700 w-screen">
      {bookDetails && (
        <>
          <h1 className="text-3xl font-bold mb-4">{bookDetails.title}</h1>
          <h2 className="text-xl mb-2">Author: {bookDetails.author}</h2>
          <p className="mb-4 text-gray-300">Published: {bookDetails.publishYear}</p>
          <p className="text-lg">{bookDetails.description}</p>
        </>
      )}
    </div>
  );
};

export default BookDetailsPage;
