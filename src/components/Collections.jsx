import React from 'react'

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Jordan Collection",
      image: "https://i.pinimg.com/736x/e0/00/c8/e000c8ec041ed1909b5937659f4d4d4d.jpg",
      items: "50+ Items"
    },
    {
      id: 2,
      name: "Vintage Jackets",
      image: "https://i.pinimg.com/1200x/09/8a/06/098a06f5c33883191ef8d2905cb4b5df.jpg",
      items: "80+ Items"
    },
    {
      id: 3,
      name: "Streetwear Essentials",
      image: "https://i.pinimg.com/736x/7e/8a/1f/7e8a1f2448bf1b739e0792227e168473.jpg",
      items: "60+ Items"
    },
  ]

  return (
    <section className="bg-black py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black font-albert text-white mb-4" style={{fontSize: '50px', lineHeight: '60px'}}>
            Discover Our
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black font-albert mb-4" style={{fontSize: '50px', lineHeight: '60px', color: '#9B9B9B'}}>
            Collections.
          </h2>
          <p className="text-white text-sm max-w-2xl mx-auto" style={{fontSize: '12px', lineHeight: '14px'}}>
            Each collection tells a story, represents a culture, and defines a moment in sneaker history. Explore the pieces that have shaped the world of streetwear.
          </p>
        </div>

        {/* Collections Grid - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Jordan Collection (Large Vertical Card) */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white shadow-lg" style={{borderRadius: '30px'}}>
              <img
                src={collections[0].image}
                alt={collections[0].name}
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Dark overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
                <h3 className="text-xl font-bold text-white mb-2" style={{fontSize: '20px', lineHeight: '24px'}}>{collections[0].name}</h3>
                <p className="text-white mb-2" style={{fontSize: '12px', lineHeight: '14px'}}>From the court to the street, discover the sneakers that defined generations</p>
                <p className="text-white mb-4" style={{fontSize: '10px', lineHeight: '12px'}}>250+ Styles</p>
                <button className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 transition-colors" style={{borderRadius: '3px', fontSize: '8px'}}>
                  Explore Collection →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Two Stacked Cards */}
          <div className="flex flex-col gap-8">
            {/* Vintage Jackets Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl border-2 border-white shadow-lg" style={{borderRadius: '30px'}}>
                <img
                  src={collections[1].image}
                  alt={collections[1].name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{fontSize: '20px', lineHeight: '24px'}}>Vintage Jackets</h3>
                  <p className="text-white mb-2" style={{fontSize: '12px', lineHeight: '14px'}}>From retro streets to modern trends, uncover jackets that bring the past back to life with every wear.</p>
                  <p className="text-white mb-4" style={{fontSize: '10px', lineHeight: '12px'}}>500+ Rare Finds</p>
                  <button className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 transition-colors" style={{borderRadius: '3px', fontSize: '8px'}}>
                    Explore Collection →
                  </button>
                </div>
              </div>
            </div>

            {/* Streetwear Essentials Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl border-2 border-white shadow-lg" style={{borderRadius: '30px'}}>
                <img
                  src={collections[2].image}
                  alt={collections[2].name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{fontSize: '20px', lineHeight: '24px'}}>Streetwear Essentials</h3>
                  <p className="text-white mb-2" style={{fontSize: '12px', lineHeight: '14px'}}>Premium apparel that speaks the language of the streets</p>
                  <p className="text-white mb-4" style={{fontSize: '10px', lineHeight: '12px'}}>1500+ Pieces</p>
                  <button className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 transition-colors" style={{borderRadius: '3px', fontSize: '8px'}}>
                    Explore Collection →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors" style={{borderRadius: '3px', fontSize: '12px'}}>
            View All Collections →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Collections
