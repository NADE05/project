import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jerome Ayaton",
      location: "Sneaker Collector",
      rating: 5,
      text: "NADE MNL is the only place I trust for rare finds. Their authentication process is unmatched, and I've never been disappointed with a purchase."
    },
    {
      id: 2,
      name: "Justin Gonzales",
      location: "Streetwear Enthusiast",
      rating: 5,
      text: "The quality and authenticity guarantee gives me complete confidence. Their customer service goes above and beyond every single time."
    },
    {
      id: 3,
      name: "Mark Perez",
      location: "Fashion Blogger",
      rating: 5,
      text: "Been shopping here for 3 years. The selection is incredible and knowing everything is 100% authentic lets me buy with peace of mind."
    },
    {
      id: 4,
      name: "Earl Bataller",
      location: "Style Influencer",
      rating: 5,
      text: "NADE MNL has pieces you can't find anywhere else. Their curation is impeccable and the authentication process is thorough."
    },
    {
      id: 5,
      name: "Jireh Mecate",
      location: "Reseller",
      rating: 5,
      text: "As someone in the business, I appreciate their transparency and expertise. They set the standard for authenticated streetwear."
    },
    {
      id: 6,
      name: "EJ Bido",
      location: "Social Media Influencer",
      rating: 5,
      text: "The condition descriptions are always accurate, and the packaging is premium. This is how online shopping should be done."
    }
  ]

  return (
    <section className="bg-gray-200 py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-4xl lg:text-5xl font-black font-albert text-black mb-4" style={{color: 'white', fontSize: '50px', lineHeight: '60px'}}>Loved By</p>
          <h2 className="text-4xl lg:text-5xl font-black font-albert text-black mb-4" style={{fontSize: '50px', lineHeight: '60px'}}>
            Sneakers & Streetwear Enthusiast
          </h2>
          <p className="text-black text-sm max-w-2xl mx-auto" style={{fontSize: '12px', lineHeight: '14px'}}>
            Don't just take our word for it. Here's what our community of passionate sneakerheads and style enthusiasts have to say about their NADE MNL experience.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2" style={{fontSize: '40px', lineHeight: '48px'}}>4.5/5</div>
            <div className="text-sm text-black" style={{fontSize: '12px', lineHeight: '14px'}}>Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2" style={{fontSize: '40px', lineHeight: '48px'}}>25K+</div>
            <div className="text-sm text-black" style={{fontSize: '12px', lineHeight: '14px'}}>Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2" style={{fontSize: '40px', lineHeight: '48px'}}>99%</div>
            <div className="text-sm text-black" style={{fontSize: '12px', lineHeight: '14px'}}>Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2" style={{fontSize: '40px', lineHeight: '48px'}}>30K+</div>
            <div className="text-sm text-black" style={{fontSize: '12px', lineHeight: '14px'}}>5-Star Review</div>
          </div>
        </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="relative bg-white p-8 rounded-2xl shadow-sm text-left border border-gray-300" style={{borderRadius: '20px'}}>
              {/* Large Quote Icon */}
              <div className="absolute -top-2 -left-2 text-gray-300 text-6xl font-bold opacity-50" style={{fontSize: '48px'}}>"</div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-black text-base mb-6" style={{fontSize: '15px', lineHeight: '18px'}}>"{testimonial.text}"</p>

              {/* Divider Line */}
              <div className="border-t border-gray-300 mb-4" style={{borderColor: 'rgba(152, 153, 154, 0.5)'}}></div>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3" style={{backgroundColor: testimonial.id === 1 ? '#FF4D00' : testimonial.id === 2 ? '#FF0000' : testimonial.id === 3 ? '#FF7373' : testimonial.id === 4 ? '#003CFF' : testimonial.id === 5 ? '#FFC58C' : '#FF0099'}}>
                  <span className="text-white text-xs font-bold" style={{fontSize: '14px'}}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-black text-sm" style={{fontSize: '12px', lineHeight: '14px'}}>{testimonial.name}</p>
                  <p className="text-gray-600 text-xs" style={{fontSize: '8px', lineHeight: '10px'}}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center" style={{borderRadius: '20px'}}>
          <h3 className="text-2xl font-bold text-black mb-4" style={{fontSize: '20px', lineHeight: '24px'}}>Join Thousands of Happy Customers</h3>
          <p className="text-black text-base mb-8 max-w-2xl mx-auto" style={{fontSize: '16px', lineHeight: '19px'}}>
            Experience the SneakerVault difference and see why we're the most trusted name in authenticated streetwear.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors" style={{borderRadius: '5px', fontSize: '12px'}}>
              Start Shopping
            </button>
            <button className="bg-white text-black border border-black px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors" style={{borderRadius: '5px', fontSize: '12px'}}>
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
