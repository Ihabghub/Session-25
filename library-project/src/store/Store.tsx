// src/store/Store.jsx
import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  books: [],
  isLoading: false,
  error: null,

  //@ts-ignore
  searchBooks: async (searchTerm) => {
    set({ isLoading: true, error: null });
    try {
      // Use Open Library API to search by title
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTerm}`);
      // Map results to extract necessary fields for the book list
      //@ts-ignore
      const books = response.data.docs.map((book) => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
        publishYear: book.first_publish_year,
      }));
      set({ books, isLoading: false });
    } catch (error) {
      console.error("Error fetching books:", error);
      set({ books: [], isLoading: false, error: 'Failed to load books.' });
    }
  },
}));

export default useStore;
