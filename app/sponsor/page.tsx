'use client';

import React from 'react';
import { HandshakeIcon, Rocket, Users, Target } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { sponsorTranslations } from '../translations/sponsor';

const SponsorPage = () => {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#822433] to-[#6d1f2b]">
        <div className="absolute inset-0 " />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 ">
          <HandshakeIcon className="w-16 h-16 mb-4 mt-20 " />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{sponsorTranslations[language].title}</h1>
          <p className="text-xl text-center">{sponsorTranslations[language].subtitle}</p>
          <a href="mailto:sapienzafoilingteam@gmail.com" className="mt-4 bg-white text-[#822433] px-8 py-4 rounded-full text-lg font-semibold  transition-colors">
            {sponsorTranslations[language].contactButton}
          </a>
        </div>
      </div>
    
      
      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{sponsorTranslations[language].sponsorsSection.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://www.solidworks.com" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32">
              <Image src="/sponsors/solidworks.svg" alt="SolidWorks" width={100} height={80} className="object-contain" />
            </div>
          </a>
          <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32">
              <Image src="/sponsors/notion.svg" alt="Notion" width={100} height={40} className="object-contain" />
            </div>
          </a>
          <a href="https://www.beta-cae.com/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32">
              <Image src="/sponsors/beta.svg" alt="Beta Simulation Solutions" width={200} height={80} className="object-contain" />
            </div>
          </a>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="bg-[#fdf1f3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{sponsorTranslations[language].benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#822433] mr-3" />
                <h3 className="text-xl font-semibold">{sponsorTranslations[language].benefits.visibility.title}</h3>
              </div>
              <p className="text-gray-600">{sponsorTranslations[language].benefits.visibility.description}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Rocket className="w-8 h-8 text-[#822433] mr-3" />
                <h3 className="text-xl font-semibold">{sponsorTranslations[language].benefits.innovation.title}</h3>
              </div>
              <p className="text-gray-600">{sponsorTranslations[language].benefits.innovation.description}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[#822433] mr-3" />
                <h3 className="text-xl font-semibold">{sponsorTranslations[language].benefits.network.title}</h3>
              </div>
              <p className="text-gray-600">{sponsorTranslations[language].benefits.network.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SponsorPage;