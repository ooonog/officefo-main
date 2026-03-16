import { motion } from 'framer-motion';

const activities = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80', title: 'Tech Meetup' },
  { id: 2, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80', title: 'Gathering' },
  { id: 3, url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80', title: 'Workshop Coding' },
  { id: 4, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80', title: 'Startup Pitching' },
  { id: 5, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80', title: 'International Seminar' },
];

export default function Community() {
  const duplicatedActivities = [...activities, ...activities];

  return (
    <section id="community" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Community Activities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Keseruan dan kolaborasi tanpa batas di setiap kegiatan OFFICE FO.ID.
        </p>
      </div>

      {/* Kontainer Slider */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-6"
          animate={{
            x: ['0%', '-50%'], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30, 
              ease: 'linear',
            },
          }}
        >
          {duplicatedActivities.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="relative w-[300px] md:w-[450px] aspect-video flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">{img.title}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Efek Fade di sisi kiri dan kanan agar terlihat halus */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </section>
  );
}