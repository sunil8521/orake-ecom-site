export default function VideoShowcaseSection() {
  return (
    <section className="bg-white py-16">
      <div className="w-full overflow-hidden shadow-xl">
        <video
          className="h-auto w-full"
          src="/bottlevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
