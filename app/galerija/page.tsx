"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Calendar, Zap, BarChart3, LayoutDashboard, Sparkles } from 'lucide-react';

const galerijaSlika = [
  {
    naslov: "Glavni Kalendar",
    opis: "Pregledan mesečni i dnevni prikaz termina. Jednim pogledom isplanirajte radnu nedelju bez preklapanja.",
    ikonica: <Calendar className="w-5 h-5 text-indigo-600" />,
    putanja: "/images/kalendar.jpeg" // Snimak ekrana sa kalendarom
  },
  {
    naslov: "Brza Rezervacija",
    opis: "Inovativni sistem za munjevito dodavanje novih termina. Izaberite uslugu, vreme i spremni ste za rad.",
    ikonica: <Zap className="w-5 h-5 text-indigo-600" />,
    putanja: "/images/rezervacija.jpeg" // Snimak sa popup-om za brzu rezervaciju
  },
  {
    naslov: "Finansijski Izvodi",
    opis: "Automatsko praćenje prihoda, troškova i neto profita. Generišite PDF izveštaje jednim klikom.",
    ikonica: <BarChart3 className="w-5 h-5 text-indigo-600" />,
    putanja: "/images/izvodi.jpeg" // Snimak sa zelenim i crvenim karticama za finansije
  },
  {
    naslov: "Kontrolna Tabla Salona",
    opis: "Centralno mesto za upravljanje osnovnim informacijama, zaposlenima, inventarom i cenovnikom usluga.",
    ikonica: <LayoutDashboard className="w-5 h-5 text-indigo-600" />,
    putanja: "/images/salon.jpeg" // Snimak sa nazivom salona "GlowUp"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigacija */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition font-bold font-sans">
            <ChevronLeft size={20} />
            Početna
          </Link>
          <div className="flex items-center gap-2 font-black text-indigo-600 tracking-tighter font-sans text-xl">
            <Sparkles size={22} />
            StudioFlow
          </div>
          <div className="w-20"></div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight font-sans">Pregledno. Moćno. Jednostavno.</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium font-sans">
            Pogledajte kako StudioFlow transformiše svakodnevno vođenje vašeg salona u čisto uživanje.
          </p>
        </div>

        <div className="space-y-24">
          {galerijaSlika.map((stavka, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              {/* Prikaz Slike */}
              <div className="w-full md:w-3/5">
                <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transform transition hover:scale-[1.02] duration-500">
                  <img 
                    src={stavka.putanja} 
                    alt={stavka.naslov}
                    className="w-full h-auto rounded-4xl border border-slate-50"
                  />
                </div>
              </div>
              
              {/* Opis Slike */}
              <div className="w-full md:w-2/5 text-left">
                <div className="inline-flex items-center gap-3 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full mb-6">
                  {stavka.ikonica}
                  <span className="font-bold text-sm uppercase tracking-wider font-sans">{stavka.naslov}</span>
                </div>
                <h3 className="text-3xl font-black mb-4 font-sans leading-tight italic">{stavka.naslov}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed font-sans mb-8">
                  {stavka.opis}
                </p>
                <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Završni Poziv na Akciju */}
        <div className="mt-32 text-center bg-slate-900 rounded-[4rem] py-20 px-6 shadow-3xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-sans">Vreme je da vaš salon dobije digitalni dom.</h2>
            <Link href="/#cenovnik" className="inline-block bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 hover:scale-105 transition shadow-2xl shadow-indigo-500/20 font-sans">
              Započni besplatno – 14 dana
            </Link>
          </div>
          {/* Dekorativni krug u pozadini */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-sm font-sans">
        <p>© 2024 StudioFlow. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}