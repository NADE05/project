import React, { useState } from 'react'

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const products = [
    {
      id: 1,
      brand: "Jordan",
      name: "Air Jordan 1 Low Travis Scott \"Reverse Mocha\"",
      price: "₱ 90,000",
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Ftravis-scott-air-jordan-1-low-reverse-mocha-detailed-look-release-info-dm7866-162-tw.jpg?w=960&cbr=1&q=90&fit=max",
      details: {
        materials: "Premium leather upper with suede overlays",
        features: [
          "Reverse Mocha colorway with sail midsole",
          "Cactus Jack branding on tongue and heel",
          "Air-Sole unit for lightweight cushioning",
          "Rubber outsole with herringbone pattern",
          "Removable lace cover with brass zipper"
        ],
        sizing: "Available in US 4-15",
        condition: "Deadstock (DS) - Brand new with original box",
        authenticity: "100% Authentic - Verified by experts"
      }
    },
    {
      id: 2,
      brand: "Carhartt",
      name: "Carhartt Detroit Work Jacket",
      price: "₱ 45,000",
      image: "https://www.rustygold.nl/cdn/shop/files/91C4519E-6CAF-4C05-93DD-6DB976FF6F18.jpg?v=1704225105",
      details: {
        materials: "Heavy-duty cotton duck canvas",
        features: [
          "Classic work jacket silhouette",
          "Front zipper closure with snap buttons",
          "Two chest pockets with snap closures",
          "Rib-knit cuffs and waistband",
          "Carhartt logo patch on chest"
        ],
        sizing: "Available in S-3XL",
        condition: "Excellent condition - Light wear",
        authenticity: "100% Authentic - Verified by experts"
      }
    },
    {
      id: 3,
      brand: "Timberland",
      name: "Timberland X Louis Vuitton Boots",
      price: "₱ 276,300",
      image: "https://media-assets.grailed.com/prd/listing/temp/5f18248fedaa4efbab9b737a7cb70acc",
      details: {
        materials: "Premium leather with Louis Vuitton monogram",
        features: [
          "Collaboration between Timberland and Louis Vuitton",
          "Signature Timberland boot construction",
          "Louis Vuitton monogram pattern",
          "Premium leather upper and lining",
          "Rubber lug outsole for traction"
        ],
        sizing: "Available in US 7-12",
        condition: "Deadstock (DS) - Brand new",
        authenticity: "100% Authentic - Verified by experts"
      }
    },
    {
      id: 4,
      brand: "Chrome Hearts",
      name: "Chrome Hearts Horseshoe Print T-shirt Black",
      price: "₱ 31,800",
      image: "https://images.stockx.com/images/Chrome-Hearts-Horse-Shoe-Logo-Pocket-T-Shirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1631138410",
      details: {
        materials: "100% Cotton premium jersey",
        features: [
          "Iconic horseshoe print design",
          "Chrome Hearts branding",
          "Oversized fit for streetwear aesthetic",
          "Screen-printed graphics",
          "Made in USA"
        ],
        sizing: "Available in S-XL",
        condition: "Excellent condition - Minimal wear",
        authenticity: "100% Authentic - Verified by experts"
      }
    },
    {
      id: 5,
      brand: "Puma",
      name: "Puma Speedcat OG - Brown",
      price: "₱ 7,100",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/398847/02/sv01/fnd/PHL/fmt/png/Speedcat-Archive-Sneakers-Unisex",
      details: {
        materials: "Suede upper with rubber sole",
        features: [
          "Classic racing-inspired silhouette",
          "Puma Formstrip branding",
          "Low-profile design",
          "Comfortable fit for daily wear",
          "Retro colorway"
        ],
        sizing: "Available in US 6-13",
        condition: "Good condition - Some wear",
        authenticity: "100% Authentic - Verified by experts"
      }
    },
    {
      id: 6,
      brand: "Supreme",
      name: "Supreme Paneled Football Jersey",
      price: "₱ 8,200",
      image: "https://images.stockx.com/images/Supreme-Paneled-Jersey-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1744142786",
      details: {
        materials: "Polyester mesh with cotton panels",
        features: [
          "Football jersey-inspired design",
          "Supreme box logo on front",
          "Paneled construction",
          "Number 20 on front and back",
          "Oversized fit"
        ],
        sizing: "Available in S-XL",
        condition: "Excellent condition - Minimal wear",
        authenticity: "100% Authentic - Verified by experts"
      }
    }
  ]

  return (
    <section className="bg-white py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black font-albert text-black mb-4">
            Featured Products
          </h2>
          <p className="text-black text-sm max-w-2xl mx-auto">
            Discover some of our most sought-after pieces. Each item represents the pinnacle of streetwear culture and authentic style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 bg-black text-white">
                <p className="text-xs text-gray-300 mb-1">{product.brand}</p>
                <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black">{product.price}</span>
                  <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-500 transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Detailed Information Overlay */}
              {hoveredProduct === product.id && (
                <div className="absolute inset-0 bg-white bg-opacity-95 p-4 overflow-y-auto z-10">
                  <div className="h-full flex flex-col">
                    <h3 className="text-lg font-bold text-black mb-3">{product.name}</h3>

                    <div className="space-y-3 text-sm text-gray-700 flex-1">
                      <div>
                        <span className="font-semibold text-black">Materials:</span>
                        <p className="mt-1">{product.details.materials}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-black">Features:</span>
                        <ul className="mt-1 list-disc list-inside space-y-1">
                          {product.details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-semibold text-black">Sizing:</span>
                        <p className="mt-1">{product.details.sizing}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-black">Condition:</span>
                        <p className="mt-1">{product.details.condition}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-black">Authenticity:</span>
                        <p className="mt-1 text-green-600">{product.details.authenticity}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-black text-black">{product.price}</span>
                        <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors">
            Explore Full Collection
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
