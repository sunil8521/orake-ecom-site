"use client";

import { Leaf } from "lucide-react";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1714413713216-ffbe4149cf79?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fascinating facts about the yellow-naped amazon",
    date: "Thursday, Jan 8 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1638891204491-eccf2e5bdca9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Supporting the Overberg Renosterveld Conservation Trust, South Africa",
    date: "Thursday, Jan 8 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698811430329-8804750d8b80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Fluttering Elegance: Unraveling the Beauty and Importance of Butterflies in Nature",
    date: "Thursday, Jan 8 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613254025905-b226dea7c866?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Protecting the unique and threatened seas and forests of São Tomé and Príncipe",
    date: "Thursday, Jan 8 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576670392551-a209604d52be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Scurrying Charm: Discovering the Enchanting World of Squirrels",
    date: "Thursday, Jan 8 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591550936127-58ae7ea00c80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Blossoms of Beauty: A Journey into the Colorful Realm of Flowers",
    date: "Thursday, Jan 8 2024",
  },
];

export default function LatestArticles() {
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
              Latest What We Do
            </h2>
          </div>
          <div className="flex items-start gap-3 max-w-sm">
            <Leaf className="w-8 h-8 text-gray-400 shrink-0 mt-1" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Fauna & Flora has been using the collective knowledge and
              experience to protect nature.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-4/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="pt-4 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
