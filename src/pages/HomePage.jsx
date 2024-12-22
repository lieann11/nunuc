function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100">
      {/* Header */}
      <header className="flex items-center justify-center py-6">
        <h1 className="text-4xl font-extrabold text-indigo-900">JA's | BOOKSTORE</h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-extrabold text-indigo-900">
          Discover Your Next Favorite Book
        </h2>
        <p className="mt-4 text-lg text-indigo-700">
          Explore a wide range of books, from the latest bestsellers to timeless classics.
        </p>
        <a
          href="/Products"
          className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Browse Our Collection
        </a>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          Featured Categories
        </h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-6 bg-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-indigo-900 mb-2">
              Fiction
            </h4>
            <p className="text-gray-700">
              Dive into captivating stories with our selection of fiction books.
            </p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-indigo-900 mb-2">
              Non-Fiction
            </h4>
            <p className="text-gray-700">
              Gain new perspectives with insightful and thought-provoking non-fiction reads.
            </p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-indigo-900 mb-2">
              Children's Books
            </h4>
            <p className="text-gray-700">
              Spark young imaginations with enchanting tales and colorful picture books.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-b from-indigo-100 to-indigo-200">
        <h3 className="text-4xl font-bold text-indigo-900 mb-6">
          Join Our Book Lover's Community
        </h3>
        <p className="text-lg text-indigo-700 mb-6">
          Stay up-to-date with the latest arrivals, bestsellers, and exclusive offers.
        </p>
        <a
          href="/About"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Learn More About Us
        </a>
      </section>
    </div>
  );
}

export default HomePage;
