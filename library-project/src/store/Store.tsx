// src/store/Store.tsx
import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  books: [],
  bookDetails: null,
  isLoading: false,
  error: null,

  //@ts-ignore
  searchBooks: async (searchTerm) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTerm}`);
       //@ts-ignore
      const books = response.data.docs.map((book) => ({
        id: book.key.replace('/works/', ''), // Strip '/works/' prefix from ID
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

   //@ts-ignore
  fetchBookDetails: async (bookId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`https://openlibrary.org/works/${bookId}.json`);
      const bookDetails = {
        id: response.data.key,
        title: response.data.title,
         //@ts-ignore
        author: response.data.authors?.map((author) => author.name).join(", ") || "Unknown Author",
        publishYear: response.data.created.value.slice(0, 4),
        description: response.data.description
          ? typeof response.data.description === 'string'
            ? response.data.description
            : response.data.description.value
          : "No description available.",
      };
      set({ bookDetails, isLoading: false });
    } catch (error) {
      console.error("Error fetching book details:", error);
      set({ bookDetails: null, isLoading: false, error: 'Failed to load book details.' });
    }
  },
}));

export default useStore;
