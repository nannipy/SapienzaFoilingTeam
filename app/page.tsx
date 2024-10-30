import React from "react";
import Image from "next/image";
import { ChevronDown, Calendar, Instagram, Linkedin, Facebook, ArrowRight } from "lucide-react";

export default function Home() {

  const upcomingEvents = [
    {
      title: "2025 SuMoth Challenge",
      date: "15 Giugno 2025",
      location: "Garda, Verona",
      image: "/sumoth.png",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <Image
          src="/moth.jpg"
          alt="regatta"
          fill
          className="object-cover brightness-50"
          priority
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="transition-all duration-500">
            <h1 className="text-5xl md:text-7xl font-bold pb-4">
              Sapienza Sailing Team
            </h1>
            <p className="text-xl md:text-2xl italic">
              Il nostro impegno, la nostra passione.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 w-full flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="text-white w-8 h-8" />
          </div>
        </div>
      </div>

     
      {/* Upcoming Events Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Prossimi Eventi
          </h2>
          <div className="grid md:grid-cols-1">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6  mx-1 rounded-xl transition-all duration-300 hover:transform hover:scale-105 md:grid md:grid-cols-2 gap-4"
            >
              {/* Contenuto del testo a sinistra */}
              <div className="flex flex-col justify-center">
                <Calendar className="text-blue-500 w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.date}</p>
                <p className="text-gray-400">{event.location}</p>
              </div>

              {/* Immagine a destra */}
              <div className="flex justify-center md:justify-end">
                <Image
                  className="rounded-xl mt-4"
                  src={event.image}
                  alt="sumoth"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      {/* Social Media Section */}
      <section className="py-12 bg-gray-50 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Seguici sui nostri social</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Floating Elements */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10 animate-slide" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Entra a far parte del team
            </h2>
            <p className="text-xl mb-8">
              Cerchiamo persone appassionate che vogliono mettersi alla prova e crescere insieme a noi.
            </p>
            <button className="group bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Contattaci
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      

    </main>
  );
}