import React, { useState } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const productImages = [
    {
      src: "https://i.pinimg.com/736x/6f/38/51/6f3851b7f84e3718031ab829826b696b.jpg",
      alt: "Sneaker Collection 1"
    },
    {
      src: "https://i.pinimg.com/736x/fa/8d/db/fa8ddb167d3db9df9e08d94666aa7923.jpg",
      alt: "Sneaker Collection 2"
    },
    {
      src: "https://i.pinimg.com/736x/cd/d8/86/cdd886a20755b4c54d76657e4b3a8fe0.jpg",
      alt: "Sneaker Collection 3"
    },
    {
      src: "https://www.merchology.com/cdn/shop/products/J140BLZ-1_68e022b7-4e3e-46d7-8fbf-176a749a20d2.jpg",
      alt: "Merchology Product"
    },
    {
      src: "https://www.patmenziesshoes.co.nz/cdn/shop/products/dr-martens-adrian-tassel-loafer-black-22209001-_dm22209001xxx_-01_b796e03c-77e6-421e-8308-0c8a738d2a01.jpg?v=1707373251",
      alt: "Dr. Martens Loafers"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section className="bg-white py-16 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <p className="text-lg font-medium text-black mb-2 text-center" style={{fontFamily: 'Jost', fontSize: '17px', lineHeight: '25px'}}>Sneaker Collection.</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-albert text-black leading-tight mb-6" style={{fontSize: '64px', lineHeight: '77px', fontWeight: '900'}}>
              NOT JUST SHOES, IT'S A LIFESTYLE
            </h1>
            <button className="border-2 border-black px-8 py-3 rounded font-bold hover:bg-black hover:text-white transition-colors mb-8" style={{borderRadius: '4px'}}>
              Shop now
            </button>

            <div className="flex space-x-8 mt-8">
              <div>
                <div className="text-2xl font-bold text-black" style={{fontSize: '20px', lineHeight: '24px'}}>100%</div>
                <div className="text-sm text-black" style={{fontSize: '12px', lineHeight: '14px'}}>Authentic</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black" style={{fontSize: '20px', lineHeight: '24px'}}>100K+</div>
                <div className="text-sm text-black" style={{fontSize: '12px', lineHeight: '14px'}}>Items Verified</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="w-10 h-10 bg-gray-200 border-2 border-black flex items-center justify-center mr-4 hover:bg-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={productImages[currentImageIndex].src}
                alt={productImages[currentImageIndex].alt}
                className="w-full h-auto rounded-lg transition-opacity duration-300"
                style={{width: '704px', height: '704px'}}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="w-10 h-10 bg-gray-200 border-2 border-black flex items-center justify-center ml-4 hover:bg-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex
                  ? 'bg-black'
                  : 'border-2 border-black hover:bg-gray-300'
              }`}
              style={{width: '30px', height: '30px'}}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
