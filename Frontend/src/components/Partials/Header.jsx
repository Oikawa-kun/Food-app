import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🍳</span>
          <h1 className="text-2xl font-bold text-gray-800">
            Recipe<span className="text-red-500">World</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="font-medium text-gray-600 hover:text-red-500">
            Home
          </a>
          <a href="#" className="font-medium text-gray-600 hover:text-red-500">
            Recipes
          </a>
          <a href="#" className="font-medium text-gray-600 hover:text-red-500">
            Categories
          </a>
          <a href="#" className="font-medium text-gray-600 hover:text-red-500">
            About
          </a>
        </nav>

        {/* Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search recipes..."
            className="rounded-lg border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* CTA */}
        <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600">
          Explore
        </button>
      </div>
    </header>
  );
};

export default Header;
