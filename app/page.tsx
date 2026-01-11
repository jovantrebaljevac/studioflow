"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  MessageSquare, 
  MonitorSmartphone, 
  ChevronDown,
  Phone,
  CheckCircle2,
  Menu,
  X,
  Image as ImageIcon
} from 'lucide-react';

export default function Page() {
  const [prikaziDelatnosti, setPrikaziDelatnosti] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const delatnosti = [
    "Frizerski saloni",
    "Kozmetički saloni",
    "Berbernice",
    "Velnes i spa centri",
    "Saloni za masažu",
    "Studio za manikir i pedikir"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      
{/* --- NAVIGACIJA --- */}
      <nav className="absolute top-0 left-0 w-full z-[110] bg-transparent">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
              S
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              Studio<span className="text-indigo-600">Flow</span>
            </span>
          </div>

          {/* DESKTOP MENI */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-800 uppercase tracking-widest">
            <Link href="/" className="hover:text-indigo-600 transition">Početna</Link>
            <a href="#funkcije" className="hover:text-indigo-600 transition">Funkcije</a>
            <Link href="/galerija" className="hover:text-indigo-600 transition">Galerija</Link>
            <a href="#cenovnik" className="hover:text-indigo-600 transition">Cenovnik</a>
            <a 
              href="mailto:click.app001@gmail.com" 
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition shadow-md"
            >
              Kontakt
            </a>
          </div>

          {/* MOBILNI HAMBURGER - DODATO I ISPRAVLJENO */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-indigo-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={34} strokeWidth={2.5} /> : <Menu size={34} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* MOBILNI PANEL */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 shadow-2xl p-8 z-[120]">
            <div className="flex flex-col gap-6 text-lg font-bold text-slate-800 uppercase tracking-wide">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Početna</Link>
              <a href="#funkcije" onClick={() => setIsMenuOpen(false)}>Funkcije</a>
              <Link href="/galerija" onClick={() => setIsMenuOpen(false)}>Galerija</Link>
              <a href="#cenovnik" onClick={() => setIsMenuOpen(false)}>Cenovnik</a>
              <a href="mailto:click.app001@gmail.com" className="text-indigo-600 pt-4 border-t border-slate-50" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
            </div>
          </div>
        )}
      </nav>
      {/* --- HERO SEKCIJA --- */}
<section className="relative h-screen w-full flex items-center justify-center">        
        
        {/* POZADINSKA SLIKA SA JAČIM ZATAMNJENJEM */}
<div className="absolute inset-0 z-0">
  <img 
    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" 
    alt="Moderni Salon" 
    className="w-full h-full object-cover"
  />
  
  {/* IZMENJEN OVERLAY: Sa bele prelazimo na tamnu indigo/crnu nijansu */}
  {/* bg-slate-950/60 daje luksuznu tamnu notu, a backdrop-blur dodaje dubinu */}
  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
</div>
        <div className="relative z-10 px-6 text-center max-w-6xl mx-auto pt-20">
          
{/* AKCENTOVAN MINI BANER / BADGE */}
<div className="flex justify-center mb-8">
  <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">
    {/* Pulsirajuća tačkica - sada jača bela/indigo */}
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-400"></span>
    </span>
    
    <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white">
      Jedinstveni sistem <span className="text-indigo-400 font-black">automatizacije</span> u Srbiji
    </span>
  </div>
</div>

          {/* Glavni tekst sa crnim okvirom */}
          <h1 
            className="text-xl md:text-2xl lg:text-3xl text-indigo-600 font-black mb-10 mx-auto max-w-4xl tracking-[0.05em] leading-[1.4] uppercase"
            style={{ 
              textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 6px rgba(0,0,0,0.4)`
            }}
          >
            <span className="block mt-2">
              inovativni softver za moderno poslovanje koji preuzima brigu o vašem 
              kalendaru, klijentima i terminima
            </span>
          </h1>

          {/* CTA Dugmad */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a 
                href="mailto:click.app001@gmail.com"
                className="bg-indigo-600 text-white text-lg px-10 py-5 rounded-2xl font-black hover:scale-105 transition shadow-2xl shadow-indigo-300 uppercase"
              >
                Pokreni StudioFlow
              </a>
              
{/* KONTEJNER ZA DUGME - Dodat z-[50] da bi bio iznad ostalih elemenata */}
<div className="relative z-[50]">
  <button 
    onClick={() => setPrikaziDelatnosti(!prikaziDelatnosti)}
    className="bg-slate-900 text-white text-xl px-8 py-5 rounded-2xl font-bold hover:bg-slate-800 transition shadow-xl flex items-center gap-3 w-full md:w-auto justify-center"
  >
    Sve delatnosti
    <ChevronDown className={`w-5 h-5 transition-transform ${prikaziDelatnosti ? 'rotate-180' : ''}`} />
  </button>

  {/* PADAJUĆI MENI - Dodat z-[100] i fiksna pozicija da ga ništa ne seče */}
  {prikaziDelatnosti && (
    <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white border border-slate-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-[100] overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
      {delatnosti.map((stavka, index) => (
        <button 
          key={index} 
          className="w-full text-left px-6 py-4 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-bold border-b border-slate-50 last:border-0 text-sm uppercase tracking-wide"
          onClick={() => setPrikaziDelatnosti(false)}
        >
          {stavka}
        </button>
      ))}
    </div>
  )}
</div>
            </div>
            <p className="text-xs text-indigo-900/60 font-black uppercase tracking-widest bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">
              Cloud rešenje • Podaci dostupni 24/7
            </p>
          </div>
        </div>
      </section>

      {/* --- FUNKCIJE --- */}
      <section id="funkcije" className="py-24 bg-slate-50 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <Calendar className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-slate-900">Smart Kalendar</h3>
            <p className="text-slate-600 font-medium italic">Pregledan raspored termina bez preklapanja.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <MessageSquare className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-slate-900">Pametni podsetnici</h3>
            <p className="text-slate-600 font-medium italic">Smanjite broj nedolazaka automatskim porukama.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <MonitorSmartphone className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-slate-900">Svi uređaji</h3>
            <p className="text-slate-600 font-medium italic">Kontrolišite studio sa telefona ili računara.</p>
          </div>
        </div>
      </section>

      {/* --- CENOVNIK --- */}
      <section id="cenovnik" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-indigo-600 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-2 text-slate-900 italic uppercase">StudioFlow PRO</h3>
              <ul className="space-y-4 mt-6">
                {["Neograničen broj zakazivanja", "Personalizovani SMS podsetnici", "Osnovna statistika", "Brzo zakazivanje"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                    <CheckCircle2 size={18} className="text-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-[2rem] p-10 text-center border border-slate-100">
              <div className="flex justify-center items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900">3499RSD</span>
                <span className="text-slate-400 font-bold text-xl">/mesec</span>
              </div>
              <a href="mailto:click.app001@gmail.com" className="block w-full py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition">
                Zatraži pristup
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP --- */}
      <a 
        href="https://wa.me/381606091110" 
        target="_blank" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[200]"
      >
        <Phone size={28} />
      </a>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
        <p>© 2026 StudioFlow. Pametno rešenje za vaš studio.</p>
        <p className="mt-1 font-bold text-slate-500">Built by ClickAPP</p>
      </footer>
    </div>
  );
}