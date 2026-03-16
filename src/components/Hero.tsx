import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-cyan-900/80 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src="https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/FotoFO/2%20(1).png"
              alt="OFFICE FO.ID Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          OFFICE FO.ID
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
          Empowering the Digital Future🌐, Let's explore tech & build a smarter tomorrow!🚀
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => scrollToNext()}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Our Work
          </button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}