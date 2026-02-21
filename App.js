const App = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-black tracking-tighter">ROHIT SINGH</h1>
        <div className="space-x-6 text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-red-500">Music</a>
          <a href="#" className="hover:text-red-500">Tour</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="z-20 text-center">
          <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs">Official Artist Website</span>
          <h2 className="text-7xl md:text-9xl font-black mt-4 tracking-tighter">ROHIT SINGH</h2>
          <button className="mt-8 px-8 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition">
            Listen Now
          </button>
        </div>
      </div>

      {/* Music Section (Placeholder) */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 h-64 flex items-center justify-center border border-gray-800 hover:border-red-500 transition">
          <p className="text-gray-500 uppercase text-xs tracking-widest">Latest Release</p>
        </div>
        <div className="bg-gray-900 h-64 flex items-center justify-center border border-gray-800 hover:border-red-500 transition">
          <p className="text-gray-500 uppercase text-xs tracking-widest">Music Video</p>
        </div>
        <div className="bg-gray-900 h-64 flex items-center justify-center border border-gray-800 hover:border-red-500 transition">
          <p className="text-gray-500 uppercase text-xs tracking-widest">Upcoming Tour</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-10 border-t border-gray-800 text-center text-gray-500 text-xs tracking-widest uppercase">
        <div className="flex justify-center space-x-6 mb-6 text-xl text-white">
          <i className="fab fa-instagram hover:text-red-500 cursor-pointer"></i>
          <i className="fab fa-spotify hover:text-red-500 cursor-pointer"></i>
          <i className="fab fa-youtube hover:text-red-500 cursor-pointer"></i>
        </div>
        © 2026 Rohit Singh Music. All Rights Reserved.
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
        
