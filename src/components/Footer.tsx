import { Instagram, Github, Linkedin, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function Footer() {

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/FotoFO/2%20(1).png"
                  alt="OFFICE FO.ID Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight">OFFICE <span className="text-blue-400">FO.ID</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Membangun masa depan digital melalui kolaborasi talenta teknologi, inovasi berkelanjutan, dan solusi berbasis komunitas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/officefo.id" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="https://github.com/bussinessfo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110 border border-white/10">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/company/office-fo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 border border-white/10">
                <Linkedin size={18} />
              </a>
              <a href="https://discord.gg/egCtxvBgEQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all hover:scale-110 border border-white/10">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-cyan-400 pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm">Sragen, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm">bussiness.officefo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Maps Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-blue-500 pl-3">Our Location</h3>
            <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.0874655037087!2d111.0092196!3d-7.4264794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a03aaca91e447%3A0x4fd55d0569013b39!2sUnit%20Produksi%20Teknik%20Komputer%20dan%20Jaringan%20SMK%20Negeri%202%20Sragen!5e0!3m2!1sid!2sid!4v1773652147910!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-gray-500 text-sm italic">
            &copy; {new Date().getFullYear()} <span className="font-bold text-gray-300 not-italic">OFFICE FO.ID</span> - Empowering the Digital Future🌐
          </p>
        </div>
      </div>
    </footer>
  );
}