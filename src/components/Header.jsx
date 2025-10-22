import React from 'react'

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">NADE MNL</div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">HOME</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">COLLECTION</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">ABOUT US</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">REVIEWS</a>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="p-1">
            <svg className="w-5 h-5 text-white hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          
          {/* User Profile Icon */}
          <button className="p-1">
            <svg className="w-5 h-5 text-white hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </button>
          
          {/* Wishlist Icon */}
          <button className="p-1">
            <svg className="w-5 h-5 text-white hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
          
          {/* Shopping Cart Icon */}
          <button className="p-1">
            <svg className="w-5 h-5 text-white hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
