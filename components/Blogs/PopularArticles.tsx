"use client";

import { Leaf } from "lucide-react";

const sideArticles = [
  {
    image:
      "https://images.unsplash.com/photo-1726521689105-420d41f78a60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Unveiling the Enigmatic World of Giant Pandas",
    desc: "Unveiling the enigmatic world of giant pandas and conservation challenges",
    tag: "Species",
  },
  {
    image:
      "https://images.unsplash.com/photo-1651421480329-20832ea78f50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Protecting the unique and threatened seas",
    desc: "Fauna & Flora has been using the collective knowledge and experience to protect nature.",
    tag: "Species",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607811121079-c33f75be7781?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exploring the Fascinating Realm of Birds",
    desc: "Exploring the Fascinating Realm of Birds and Their Ecological Significance",
    tag: "Species",
  },
];

export default function PopularArticles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Popular Articles
            </h2>
          </div>
          <div className="flex items-start gap-3 max-w-sm">
            <Leaf className="w-8 h-8 text-gray-400 flex-shrink-0 mt-1" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Fauna & Flora has been using the collective knowledge and
              experience to protect nature.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main large article */}
          <div className="card-hover rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[4/4]">
              <img
                src="https://images.unsplash.com/photo-1613904985222-0d534430bdbd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="pt-5 pb-2">
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Guardians of the Pride: The Urgency of Lion Conservation Efforts
              </h3>
              <span className="tag  ">Species</span>
            </div>
          </div>

          {/* Side articles stack */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {sideArticles.map((article, i) => (
              <div
                key={i}
                className="card-hover flex gap-4 sm:gap-5 rounded-2xl cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-xl w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="flex flex-col justify-center py-1">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 group-hover:text-green-700 transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">
                    {article.desc}
                  </p>
                  <span className="tag w-fit  ">{article.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
