import { motion } from 'framer-motion';

const clients = [
    { id: 1, name: 'Client 1', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/LogoSMK2srg.png' },
    { id: 2, name: 'Client 2', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/IPB.png' },
    { id: 3, name: 'Client 3', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/ISI.png' },
    { id: 4, name: 'Client 4', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/PNM.png' },
    { id: 5, name: 'Client 5', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/Polindes.png' },
    { id: 6, name: 'Client 6', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/SiberMU.png' },
    { id: 8, name: 'Client 8', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/UMS.png' },
    { id: 9, name: 'Client 9', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/Undip.png' },
    { id: 10, name: 'Client 10', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/UNISRI.png' },
    { id: 11, name: 'Client 11', logo: 'https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/Clients/UT.png' },
];

export default function Clients() {
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section id="clients" className="py-16 bg-white overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Trusted By Innovative Teams</h2>
            </div>

            <div className="relative flex items-center">
                {/* Kontainer Parallax Loop Otomatis */}
                <motion.div
                    className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 20,
                            ease: 'linear',
                        },
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div key={`${client.id}-${index}`} className="flex-shrink-0">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 pointer-events-none select-none"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Overlay untuk efek memudar di pinggir */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}