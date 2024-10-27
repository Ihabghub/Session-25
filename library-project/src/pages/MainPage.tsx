import React from 'react';

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Navbar */}
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Library Project</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#location" className="hover:text-gray-300">Location</a></li>
            <li><a href="#info" className="hover:text-gray-300">Info</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Background Image */}
      <section
        id="home"
        className="flex-grow bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to the Library</h2>
          <p className="text-xl">Discover a world of knowledge and adventure</p>
        </div>
      </section>

      {/* Location and Info Section */}
      <section id="location" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Our Location</h3>
          <p className="text-center max-w-2xl mx-auto">
            We're located at the heart of the city, making it easy for you to drop by and explore our extensive collection of books.
          </p>
        </div>
      </section>

      <section id="info" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Library Info</h3>
          <p className="text-center max-w-2xl mx-auto">
            Our library offers a wide range of genres, a comfortable reading area, and events throughout the year. Join us and be part of a community of book lovers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Library Project. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
