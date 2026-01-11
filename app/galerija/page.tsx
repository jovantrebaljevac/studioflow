"use client";

import React, { useState } from 'react'; // Dodat useState
import Link from 'next/link';
import { ChevronLeft, Calendar, Zap, BarChart3, LayoutDashboard, Sparkles, X } from 'lucide-react';

const galerijaSlika = [
  {
    naslov: "Glavni Kalendar",
    opis: "Pregledan mesečni i dnevni prikaz termina. Jednim pogledom isplanirajte radnu nedelju bez preklapanja.",
    ikonica: <Calendar className="w-5 h-5 text-indigo-400" />,
    putanja: "/images/kalendar.jpeg"
  },
  {
    naslov: "Brza Rezervacija",
    opis: "Inovativni sistem za munjevito dodavanje novih termina. Izaberite uslugu, vreme i spremni ste za rad.",
    ikonica: <Zap className="w-5 h-5 text-indigo-400" />,
    putanja: "/images/rezervacija.jpeg"
  },
  {
    naslov: "Finansijski Izvodi",
    opis: "Automatsko praćenje prihoda, troškova i neto profita. Generišite PDF izveštaje jednim klikom.",
    ikonica: <BarChart3 className="w-5 h-5 text-indigo-400" />,
    putanja: "/images/izvodi.jpeg"
  },
  {
    naslov: "Kontrolna Tabla Salona",
    opis: "Centralno mesto za upravljanje osnovnim informacijama, zaposlenima, inventarom i cenovnikom usluga.",
    ikonica: <LayoutDashboard className="w-5 h-5 text-indigo-400" />,
    putanja: "/images/salon.jpeg"
  }
];

export default function GalleryPage() {
  // State za praćenje koja je slika otvorena
  const [odabranaSlika, setOdabranaSlika] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative">
      
{/* --- LIGHTBOX SA ULTRA-SPOROM ANIMACIJOM --- */}
      {odabranaSlika && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setOdabranaSlika(null)}
        >
          {/* CSS za ultra-sporu i tešku animaciju */}
          <style jsx>{`
            @keyframes ultraSporo {
              0% { 
                opacity: 0; 
                transform: scale(0.85) translateY(60px); 
                filter: blur(25px); 
              }
              100% { 
                opacity: 1; 
                transform: scale(1) translateY(0); 
                filter: blur(0); 
              }
            }
            .animacija-ultra-spora {
              /* Trajanje 1.5 sekunda - sada će se pokret jasno videti */
              animation: ultraSporo 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              will-change: transform, opacity, filter;
            }
          `}</style>

          {/* Pozadina koja se polako zacrnjuje */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in duration-[1500ms]"></div>
          
          {/* Dugme za zatvaranje koje se polako pojavljuje */}
          <button 
            className="absolute top-6 right-6 text-white/20 hover:text-white transition z-[210] duration-1000 delay-500"
            onClick={() => setOdabranaSlika(null)}
          >
            <X size={40} />
          </button>
          
          {/* Slika koja polako "izranja iz magle" */}
          <img 
            src={odabranaSlika} 
            alt="Uvećan prikaz" 
            className="relative z-[205] max-w-full max-h-[90vh] rounded-[2.5rem] shadow-[0_0_120px_rgba(79,70,229,0.3)] border border-white/10 animacija-ultra-spora"
          />
        </div>
      )}

      {/* Navigacija */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-indigo-400 hover:text-white transition font-bold uppercase tracking-widest text-xs">
            <ChevronLeft size={20} />
            Početna
          </Link>
          <div className="flex items-center gap-2 font-black text-white tracking-tighter text-xl uppercase italic">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-sm not-italic shadow-lg shadow-indigo-500/20">S</div>
            Studio<span className="text-indigo-500">Flow</span>
          </div>
          <div className="w-20 hidden md:block"></div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* ... naslov i uvod ostaju isti ... */}
        <div className="text-center mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-indigo-500 mb-4">Unutrašnjost sistema</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight italic uppercase">Pregledno. Inovativno. <span className="text-indigo-500">Jednostavno.</span></h1>
        </div>

        <div className="space-y-32">
          {galerijaSlika.map((stavka, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
              
              {/* Prikaz Slike - Dodat onClick za otvaranje */}
              <div className="w-full md:w-3/5">
                <div 
                  className="bg-slate-900 p-2 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden transform transition hover:scale-[1.02] duration-500 cursor-zoom-in"
                  onClick={() => setOdabranaSlika(stavka.putanja)}
                >
                  <img 
                    src={stavka.putanja} 
                    alt={stavka.naslov}
                    className="w-full h-auto rounded-[2rem] border border-white/5 opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              
              {/* Opis Slike */}
              <div className="w-full md:w-2/5 text-left">
                <div className="inline-flex items-center gap-3 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full mb-6 border border-indigo-500/20">
                  {stavka.ikonica}
                  <span className="font-bold text-xs uppercase tracking-[0.2em]">{stavka.naslov}</span>
                </div>
                <h3 className="text-3xl font-black mb-4 leading-tight italic uppercase">{stavka.naslov}</h3>
                <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">{stavka.opis}</p>
                <div className="h-1.5 w-16 bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* ... footer i CTA ostaju isti ... */}
      {/* Završni Poziv na Akciju - Premium Dark */}
        <div className="mt-40 text-center bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[4rem] py-24 px-6 border border-white/5 relative overflow-hidden shadow-3xl">
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Naslov u dva reda za bolji vizuelni balans */}
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 italic uppercase leading-[1.1] tracking-tighter">
              Vreme je da vaš salon <br /> dobije digitalni dom.
            </h2>
            
            <Link 
              href="mailto:click.app001@gmail.com" 
              className="inline-block bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 hover:scale-105 transition shadow-[0_10px_40px_rgba(79,70,229,0.4)] uppercase tracking-widest"
            >
              Zatraži pristup
            </Link>
          </div>
          
          {/* Dekorativni efekti u pozadini */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent)] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>
    </div>
  );
}