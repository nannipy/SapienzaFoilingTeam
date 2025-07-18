'use client';

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations/home';

type UpcomingEventsSectionProps = Record<string, never>;

const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = () => {
  const { language } = useLanguage();
  const upcomingEvents = [
    {
      title: "Rome Foil Festival",
      date: "15 Maggio - 18 Maggio 2025",
      location: "Bracciano, Roma",
      image: "/romefoilfestival.jpeg",
      link: "https://www.romefoilfestival.com/"
    },
    {
      title: "2025 SuMoth Challenge",
      date: "16 Giugno 2025",
      location: "Garda, Verona",
      image: "/sumoth.png",
      link: "https://sumoth.org"
    }
  ];

  return (
    <div className="bg-gray-50 py-16" id="upcoming-events" role="region" aria-label="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          {homeTranslations[language].upcomingEvents}
        </h2>
        <div className="grid md:grid-cols-1">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-[#822433] p-6  px-16 md:px-28 md:py-5 mx-auto rounded-xl transition-all duration-300 hover:transform hover:scale-105 md:grid md:grid-cols-2 gap-4 my-5"
              onClick={() => window.open(event.link, '_blank')}
            >
              {/* Contenuto del testo a sinistra */}
              <div className="flex flex-col justify-center">
                <Calendar className="text-white w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-white">{event.date}</p>
                <p className="text-white">{event.location}</p>
              </div>
              {/* Immagine a destra */}
              <div className="flex justify-center md:justify-end">
                <Image
                  className="rounded-xl mt-4 w-60 h-40"
                  src={event.image}
                  alt="Evento Sumoth 2025 al lago di Garda, Verona"
                  layout="fixed"
                  width={300}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
