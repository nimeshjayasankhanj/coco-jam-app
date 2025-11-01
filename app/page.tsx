import React from "react";

export default function CocomateLikeHome() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">CM</div>
            <div>
              <h1 className="text-lg font-semibold">Cocomate</h1>
              <p className="text-xs text-gray-500">Organic & Conventional Coconut Products</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a className="hover:text-green-700">Home</a>
            <a className="hover:text-green-700">About</a>
            <a className="hover:text-green-700">Products</a>
            <a className="hover:text-green-700">Certificates</a>
            <a className="hover:text-green-700">News</a>
            <a className="hover:text-green-700">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-block px-4 py-2 border rounded-md text-sm">Search</button>
            <a className="px-4 py-2 bg-green-600 text-white rounded-md text-sm">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Pure Sri Lankan Coconut Products — Organic & Sustainable
            </h2>
            <p className="mt-4 text-gray-600">
              From farm to factory: certified, ethically sourced coconut products exported worldwide.
            </p>

            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 bg-green-600 text-white rounded-md">Explore Products</a>
              <a className="px-4 py-2 border rounded-md">Our Certificates</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-bold">1999</div>
                <div>Established</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500K</div>
                <div>Orders Shipped</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1152849/pexels-photo-1152849.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="coconuts"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "4110250/pexels-photo-4110250.jpeg",
            "102104/pexels-photo-102104.jpeg",
            "1207859/pexels-photo-1207859.jpeg",
            "4110251/pexels-photo-4110251.jpeg",
            "4110225/pexels-photo-4110225.jpeg",
            "1152849/pexels-photo-1152849.jpeg",
            "1274697/pexels-photo-1274697.jpeg",
            "4110253/pexels-photo-4110253.jpeg",
          ].map((img, i) => (
            <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-44 bg-gray-100 flex items-center justify-center">
                <img
                  src={`https://images.pexels.com/photos/${img}?auto=compress&cs=tinysrgb&w=400`}
                  alt={`product-${i + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Product Name</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Short description of the product. Organic / Conventional
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <a className="text-sm text-green-600">Read More →</a>
                  <span className="text-xs text-gray-400">SKU: 00{i + 1}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h4 className="text-xl font-semibold mb-4">Certificates & Standards</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="p-4 bg-gray-50 rounded flex items-center justify-center h-20"
              >
                <img
                  src={`https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100`}
                  alt={`cert-${i + 1}`}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-gray-900 text-gray-200 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold">Cocomate</h5>
            <p className="text-sm mt-2">
              NDC Exports (Pvt) Ltd,
              <br />
              Nadalagamuwa, Sri Lanka
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm mt-2">
              Phone: +94-372-285-774
              <br />
              Email: madhawa@cocomate.com
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Newsletter</h5>
            <p className="text-sm mt-2">Subscribe for updates</p>
            <div className="mt-3 flex">
              <input
                className="px-3 py-2 rounded-l-md border-none outline-none flex-1 text-gray-800"
                placeholder="email@example.com"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs py-4 text-gray-500">
          © {new Date().getFullYear()} Cocomate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
