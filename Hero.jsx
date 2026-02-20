const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Creative Developer</h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
        Building modern, minimal, and high-performance digital experiences for the next generation of the web.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">View Work</button>
        <button className="border border-white px-6 py-2 rounded-full font-semibold">Contact Me</button>
      </div>
    </section>
  );
};

// इसे चलाने के लिए यह लाइन जरूरी है
window.Hero = Hero;
