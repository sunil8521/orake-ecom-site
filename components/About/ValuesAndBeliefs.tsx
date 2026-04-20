export default function ValuesAndBeliefs() {
  return (
    <section className="w-full py-20 flex flex-col items-center bg-gradient-to-b from-cyan-50 to-white dark:from-cyan-950 dark:to-cyan-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-800 dark:text-cyan-200">Our Values & Beliefs</h2>
      <ul className="max-w-2xl text-lg text-cyan-800 dark:text-cyan-100 list-disc list-inside space-y-2">
        <li>We believe in sustainability and protecting our planet for future generations.</li>
        <li>We value innovation, always striving to improve our products and processes.</li>
        <li>We believe in transparency, honesty, and putting our customers first.</li>
        <li>We value diversity, inclusion, and a positive impact in our community.</li>
      </ul>
    </section>
  );
}
