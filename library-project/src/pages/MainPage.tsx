// src/pages/MainPage.tsx
import React from 'react';

const MainPage = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col">
      {/* Header with Navbar */}
      <header className="bg-gray-800 text-white py-4 shadow-md w-screen">
        <nav className="flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold">My Library</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="#location" className="hover:text-gray-300">Location</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Background Image */}
      <section
        className="flex-grow h-[100vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
        style={{ backgroundImage: "url('library.jpg')" }}
      >
        <div className="text-center px-6">
          <h2 className="text-5xl font-bold mb-4">Welcome to the Library</h2>
          <p className="text-xl">Discover a world of knowledge and adventure</p>
        </div>
      </section>

      {/* Location and Info Section */}
      <section id="location" className="bg-gray-100 py-16 w-screen">
        <div className="text-center px-6">
          <h3 className="text-3xl font-bold mb-8">Location & Information</h3>
          <p className="max-w-2xl mx-auto mb-6">
            We are located in the heart of the city, offering a variety of books across genres. Our facilities include reading areas, computer access, and community events to foster learning and connection.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="bg-white py-16 w-screen">
        <div className="text-center px-6">
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <p className="text-xl mb-2">Have questions? We’re here to help!</p>
          <p className="mb-4">Reach out to our team for any inquiries or assistance:</p>
          <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="font-semibold">Contact Name: Ihab Safa</p>
            <p className="mb-2">Phone: +961 70 282 848</p>
            <p className="mb-4">Email: <a href="mailto:jane.doe@example.com" className="text-blue-600 hover:underline">ihabsafa13@gmail.com</a></p>
            <p>We value your feedback and look forward to hearing from you!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 w-screen">
        <div className="text-center">
          <p>&copy; 2023 Library Project. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
