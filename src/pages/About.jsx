function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 animate-fadeIn">About Us</h1>
        <p className="mt-4 text-lg text-blue-600 font-medium animate-fadeIn delay-200">
          Discover the story behind JA's Bookstore and what makes us unique.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Story</h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            JA's Bookstore was born out of a love for books and a desire to create a haven for readers of all ages.
            From timeless classics to modern bestsellers, our carefully curated collection offers something for every book enthusiast.
            With a commitment to quality and accessibility, we strive to inspire a lifelong love of reading.
          </p>
        </div>
        <div className="relative">
          <img
            src="/vision.png"
            alt="Bookstore Story"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800 opacity-10 rounded-lg"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/mission.png"
            alt="Bookstore Mission"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800 opacity-10 rounded-lg"></div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission & Vision</h2>
          <p className="leading-relaxed text-gray-700 text-lg mb-4">
            Our mission is to connect people with stories that inspire, educate, and entertain. 
            We envision JA's Bookstore as a place where communities come together to celebrate the written word,
            offering an inclusive and welcoming space for all book lovers.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Quality</h3>
            <p className="text-gray-700">
              We offer only the best books, carefully selected to meet the highest literary and production standards.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Community</h3>
            <p className="text-gray-700">
              Our bookstore fosters a sense of community, bringing together readers and authors through shared experiences.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Innovation</h3>
            <p className="text-gray-700">
              We continually explore new ways to bring books to readers, from events to online platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
