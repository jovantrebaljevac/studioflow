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
  X
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
      
      {/* --- NAVIGACIJA SA HAMBURGER MENIJEM --- */}
      <nav className="sticky top-0 z-[110] bg-white/80 backdrop-blur-md border-b border-gray-50">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">
              S
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              Studio<span className="text-indigo-600">Flow</span>
            </span>
          </div>

          {/* DESKTOP MENI (Mac & PC) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition">Početna</a>
            <a href="#funkcije" className="hover:text-indigo-600 transition">Funkcije</a>
            <a href="#cenovnik" className="hover:text-indigo-600 transition">Cenovnik</a>
            <a href='/galerija' className="hover:text-indigo-600 transition">Galerija</a>
            <a 
              href="mailto:click.app001@gmail.com" 
              className="bg-indigo-50 text-indigo-600 px-5 py-2.5 rounded-xl hover:bg-indigo-100 transition shadow-sm shadow-indigo-100"
            >
              Kontakt
            </a>
          </div>

          {/* MOBILNI HAMBURGER DUGME */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* MOBILNI MENI PANEL */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-xl">
            <div className="flex flex-col p-8 gap-6 text-lg font-bold text-slate-800 uppercase tracking-wide">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Početna</a>
              <a href="#funkcije" onClick={() => setIsMenuOpen(false)}>Funkcije</a>
              <a href="#cenovnik" onClick={() => setIsMenuOpen(false)}>Cenovnik</a>
              <a href="/galerija" onClick={() => setIsMenuOpen(false)}>Galerija</a>
              <a 
                href="mailto:click.app001@gmail.com" 
                className="text-indigo-600 pt-4 border-t border-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pošalji Upit
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-24 px-6 text-center max-w-5xl mx-auto">
        

        {/* --- KAKO RADI --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">1</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Pristupite</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Bez instalacije. Otvorite StudioFlow na telefonu ili računaru.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">2</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Podesite usluge</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Unesite vaše usluge i definišite svoje radno vreme.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm">3</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Rastite</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Uživajte u automatizaciji i fokusirajte se na svoj rad.</p>
            </div>
          </div>
        </div>

        {/* --- DELATNOSTI MENI --- */}
        <div className="relative inline-block text-left mb-10">
          <button 
            onClick={() => setPrikaziDelatnosti(!prikaziDelatnosti)}
            className="bg-slate-900 text-white text-lg px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-xl flex items-center gap-3 mx-auto"
          >
            Sve delatnosti
            <ChevronDown className={`w-5 h-5 transition-transform ${prikaziDelatnosti ? 'rotate-180' : ''}`} />
          </button>

          {prikaziDelatnosti && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
              {delatnosti.map((stavka, index) => (
                <button
                  key={index}
                  className="w-full text-left px-6 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium border-b border-slate-50 last:border-0"
                  onClick={() => setPrikaziDelatnosti(false)}
                >
                  {stavka}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- GLAVNI CTA --- */}
        <div className="block mt-6">
           <a 
             href="mailto:click.app001@gmail.com"
             className="inline-block bg-indigo-600 text-white text-xl px-12 py-5 rounded-2xl font-black hover:scale-105 transition shadow-2xl shadow-indigo-200 uppercase tracking-tight"
           >
             Pokreni StudioFlow
           </a>
           <p className="text-xs text-slate-400 mt-4 italic font-medium underline underline-offset-4 decoration-indigo-200 uppercase tracking-widest">
             Cloud rešenje • Podaci dostupni 24/7
           </p>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section id="funkcije" className="py-24 bg-slate-50 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <Calendar className="text-indigo-600 mb-4 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-2">Smart Kalendar</h3>
            <p className="text-slate-600 italic font-medium">Pregledan raspored termina bez mogućnosti preklapanja.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <MessageSquare className="text-indigo-600 mb-4 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-2">Pametni podsetnici</h3>
            <p className="text-slate-600 italic font-medium">Automatske poruke klijentima drastično smanjuju broj nedolazaka.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <MonitorSmartphone className="text-indigo-600 mb-4 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-2">Svi uređaji</h3>
            <p className="text-slate-600 italic font-medium">Pristupite svom studiju sa telefona ili tableta bilo gde i bilo kada.</p>
          </div>
        </div>
      </section>

      {/* --- CENOVNIK --- */}
      <section id="cenovnik" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Sve u jednom paketu</h2>
          <p className="text-slate-500 font-medium italic">Automatizujte vase poslovanje sa svega par klikova.</p>
        </div>

        <div className="bg-white border-2 border-indigo-600 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-2 text-slate-900 italic">StudioFlow PRO</h3>
              <p className="text-slate-500 mb-8 font-medium">Alat koji radi za vas, dok vi radite za klijente.</p>
              
              <ul className="space-y-4">
                {[
                  "Neograničen broj zakazivanja",
                  "Personalizovani SMS podsetnici",
                  "Osnovna statistika poslovanja",
                  "Brzo i lako podešavanje",
                  "Podrška našeg tima ",
                  "Rad na svim uređajima istovremeno"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                    <CheckCircle2 size={20} className="text-indigo-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-[2rem] p-10 text-center border border-slate-100 flex flex-col">
              <div className=" mb-4 text-slate-400 font-bold uppercase tracking-widest text-[10px]">Mesečna licenca</div>
              <div className="flex justify-center items-baseline gap-1 mb-8">
                <span className="text-3xl font-black text-slate-900">3499RSD</span>
                <span className="text-slate-400 font-bold text-xl">/mesec</span>
              </div>
              
<div className="flex justify-center mt-2">
  <div className="relative inline-block">
    <a 
      href="mailto:click.app001@gmail.com?subject=Zainteresovan sam za StudioFlow pristup&body=Poštovani, želim da zatražim pristup za moj salon. Moje ime je: "
      className="group relative inline-block px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 active:scale-95 text-lg text-center"
    >
      Zatraži pristup
    </a>
    {/* Pulsirajuća tačkica pozicionirana tačno na gornji desni ugao dugmeta */}
    <span className="absolute -top-1 -right-1 flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
    </span>
  </div>
</div>
              
              <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-tight">mogucnost probnog perioda • Bez ugovora</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP --- */}
      <a 
        href="https://wa.me/381641211193?text=Zdravo,%20zanimaju%20me%20informacije%20u%20vezi%20StudioFlow%20softvera." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] flex items-center justify-center group"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          Kontaktiraj StudioFlow tim
        </span>
      </a>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-50">
        <p>© 2026 StudioFlow. Pametno rešenje za vaš studio.</p>
        <p className="mt-1 font-bold text-slate-500">Built by ClickAPP</p>
      </footer>
    </div>
  );
}