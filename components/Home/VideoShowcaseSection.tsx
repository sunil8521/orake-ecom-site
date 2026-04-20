export default function VideoShowcaseSection() {
  return (
    <section className="bg-white py-16">
      <div className="relative w-full aspect-video flex items-center justify-center">
        <video
          className="h-full w-full object-cover"
          src="/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
        {/* Overlay Content */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-start bg-black/40 p-6 md:p-16" style={{ fontFamily: 'Inter, ui-sans-serif, serif' }}>
          <h2
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg font-serif"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Refresh Your Life, One Sip at a Time
          </h2>
          <p className="text-2xl md:text-4xl text-gray-100 mb-8 drop-shadow-lg max-w-3xl font-medium" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            Stay hydrated and energized with every drink. Our bottles are designed to keep your beverage pure, cool, and always within reach—because every sip matters.
          </p>
          <ul className="list-disc pl-7 text-gray-200 mb-8 drop-shadow-lg text-lg md:text-2xl font-medium" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            <li>Crystal-clear, fresh taste</li>
            <li>Long-lasting temperature control</li>
            <li>Perfect for every adventure</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg md:text-2xl transition drop-shadow-lg font-medium" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            Shop Bottles
          </button>
        </div>
      </div>
    </section>
  );
}
