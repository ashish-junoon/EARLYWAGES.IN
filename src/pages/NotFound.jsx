import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    if (window.scrollY > 100) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary/5 px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-primary/20 leading-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 -mt-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to a safe place.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
