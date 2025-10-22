import React from 'react'

const Authenticity = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "100% Authentic",
      description: "Every item is verified by our expert authentication team"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: "Secure Payment",
      description: "Your transactions are protected with bank-level security"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      ),
      title: "Fast Shipping",
      description: "Free shipping on orders over ₱5,000 with 2-3 day delivery"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "Customer Love",
      description: "Join thousands of satisfied customers worldwide"
    }
  ]

  return (
    <section className="bg-white py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black font-albert text-black mb-4" style={{fontSize: '50px', lineHeight: '60px'}}>
              Authenticity is Our Foundation
            </h2>
            <p className="text-black text-sm mb-8" style={{fontSize: '12px', lineHeight: '14px'}}>
              Founded in 2025, NADE MNL emerged from a simple belief: everyone deserves authentic, verified streetwear at fair prices. What started as a passion project has grown into a global community of sneaker enthusiasts and style pioneers.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4" style={{
                    backgroundColor: index === 0 ? '#7DBAFF' : index === 1 ? '#8C8EFF' : index === 2 ? '#8CFFB2' : '#FFC58C',
                    borderRadius: '8px'
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black mb-1" style={{fontSize: '13px', lineHeight: '16px'}}>{feature.title}</h3>
                    <p className="text-black text-xs" style={{fontSize: '13px', lineHeight: '16px'}}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors" style={{borderRadius: '10px', fontSize: '15px'}}>
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Store Interior Background with Overlay Statistics */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden" style={{borderRadius: '20px'}}>
            {/* Store Interior Background Image */}
            <img 
              src="https://i.pinimg.com/1200x/57/97/a1/5797a1facce520c412e1f71a6a9dac01.jpg" 
              alt="Store Interior with Sneakers and Streetwear"
              className="w-full h-full object-cover"
            />
            
            {/* Statistics Overlay Cards */}
            <div className="absolute top-8 right-8">
              <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg" style={{borderRadius: '8px'}}>
                <div className="text-3xl font-bold text-black mb-1" style={{fontSize: '32px', lineHeight: '38px'}}>5M+</div>
                <div className="text-sm text-black" style={{fontSize: '14px', lineHeight: '16px'}}>Items Authenticated</div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8">
              <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg" style={{borderRadius: '8px'}}>
                <div className="text-3xl font-bold text-black mb-1" style={{fontSize: '32px', lineHeight: '38px'}}>99.9%</div>
                <div className="text-sm text-black" style={{fontSize: '14px', lineHeight: '16px'}}>Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Authenticity
