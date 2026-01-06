"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Obavezno za navigaciju ka galeriji
import { 
  Calendar, 
  MessageSquare, 
  MonitorSmartphone, 
  ChevronDown,
  Phone,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Page() {
  const [prikaziDelatnosti, setPrikaziDelatnosti] = useState(false);

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
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-50">
        <div className="text-2xl font-black text-indigo-600 tracking-tighter flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          StudioFlow
        </div>
        <div className="flex gap-6 items-center font-medium text-slate-600 font-sans">
          <a href="#funkcije" className="hover:text-indigo-600 transition">Funkcije</a>
          <a href="#cenovnik" className="hover:text-indigo-600 transition">Cenovnik</a>
          <Link href="/galerija" className="hover:text-indigo-600 transition border-l pl-6 border-slate-100">
            Galerija
          </Link>
          <button className="bg-slate-100 text-slate-900 px-5 py-2 rounded-full hover:bg-slate-200 transition font-semibold font-sans">
            Prijava
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
          Vaš studio u savršenom <span className="text-indigo-600 font-sans italic">ritmu.</span>
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium font-sans">
          Digitalno rešenje za vođenje salona i studija lepote. Organizujte svoje termine bez stresa i papira.
        </p>

        {/* --- KAKO RADI --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-12 text-left bg-slate-50 p-8 rounded-3xl border border-slate-100 font-sans shadow-inner">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm font-sans">1</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1 font-sans">Pristupite</h4>
              <p className="text-sm text-slate-500 font-sans font-medium leading-relaxed">Bez instalacije. Otvorite StudioFlow na telefonu ili računaru.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm font-sans">2</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1 font-sans font-sans">Podesite usluge</h4>
              <p className="text-sm text-slate-500 font-sans font-medium leading-relaxed font-sans">Unesite vaše usluge i definišite svoje radno vreme.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm font-sans">3</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1 font-sans font-sans font-sans">Rastite</h4>
              <p className="text-sm text-slate-500 font-sans font-medium leading-relaxed font-sans font-sans font-sans font-sans">Uživajte u automatizaciji i fokusirajte se na svoj rad.</p>
            </div>
          </div>
        </div>

        {/* --- DELATNOSTI MENI --- */}
        <div className="relative inline-block text-left mb-10">
          <button 
            onClick={() => setPrikaziDelatnosti(!prikaziDelatnosti)}
            className="bg-slate-900 text-white text-lg px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-xl flex items-center gap-3 mx-auto font-sans"
          >
            Sve delatnosti
            <ChevronDown className={`w-5 h-5 transition-transform ${prikaziDelatnosti ? 'rotate-180' : ''}`} />
          </button>

          {prikaziDelatnosti && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
              {delatnosti.map((stavka, index) => (
                <button
                  key={index}
                  className="w-full text-left px-6 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium border-b border-slate-50 last:border-0 font-sans"
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
           <button className="bg-indigo-600 text-white text-xl px-12 py-5 rounded-2xl font-black hover:scale-105 transition shadow-2xl shadow-indigo-200 font-sans uppercase tracking-tight">
             Pokreni StudioFlow
           </button>
           <p className="text-xs text-slate-400 mt-4 italic font-sans font-medium underline underline-offset-4 decoration-indigo-200 uppercase tracking-widest">
             Cloud rešenje • Podaci dostupni 24/7
           </p>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section id="funkcije" className="py-24 bg-slate-50 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left font-sans">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <Calendar className="text-indigo-600 mb-4 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-2 font-sans font-sans">Smart Kalendar</h3>
            <p className="text-slate-600 italic font-medium font-sans font-sans font-sans">Pregledan raspored termina bez mogućnosti preklapanja.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <MessageSquare className="text-indigo-600 mb-4 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-2 font-sans font-sans font-sans">Pametni podsetnici</h3>
            <p className="text-slate-600 italic font-medium font-sans font-sans font-sans font-sans">Automatske poruke klijentima drastično smanjuju broj nedolazaka.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 font-sans">
            <MonitorSmartphone className="text-indigo-600 mb-4 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-2 font-sans font-sans font-sans font-sans">Svi uređaji</h3>
            <p className="text-slate-600 italic font-medium font-sans font-sans font-sans font-sans font-sans">Pristupite svom studiju sa telefona ili tableta bilo gde i bilo kada.</p>
          </div>
        </div>
      </section>

      {/* --- SEKCIJA: CENOVNIK --- */}
      <section id="cenovnik" className="py-24 px-6 max-w-4xl mx-auto font-sans">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight uppercase font-sans font-sans">Sve u jednom paketu</h2>
          <p className="text-slate-500 font-medium italic font-sans font-sans">Automatizujte vase poslovanje sa svega par klikova.</p>
        </div>

        <div className="bg-white border-2 border-indigo-600 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-600 text-indigo-600 px-12 py-2 rotate-45 translate-x-10 translate-y-4 font-bold text-xs uppercase tracking-widest font-sans font-sans font-sans">
          ponuda
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-2 text-slate-900 font-sans italic font-sans">StudioFlow PRO</h3>
              <p className="text-slate-500 mb-8 font-medium font-sans font-sans">Alat koji radi za vas, dok vi radite za klijente.</p>
              
              <ul className="space-y-4">
                {[
                  "Neograničen broj zakazivanja",
                  "Personalizovani SMS podsetnici",
                  "Osnovna statistika poslovanja",
                  "Brzo i lako podešavanje",
                  "Podrška našeg tima ",
                  "Rad na svim uređajima istovremeno"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm font-sans font-sans font-sans">
                    <CheckCircle2 size={20} className="text-indigo-600 shrink-0 font-sans font-sans font-sans" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-[2rem] p-10 text-center border border-slate-100 font-sans font-sans">
              <div className="mb-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] font-sans font-sans font-sans">Mesečna licenca</div>
              <div className="flex justify-center items-baseline gap-1 mb-8 font-sans font-sans">
                <span className="text-6xl font-black text-slate-900 font-sans font-sans font-sans font-sans font-sans">3499RSD

                </span>
                <span className="text-slate-400 font-bold text-xl font-sans font-sans font-sans font-sans font-sans">/mesec</span>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 hover:scale-105 transition shadow-xl shadow-indigo-200 font-sans font-sans font-sans">
                  Zatrazi pristup
              </button>
              <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-tight font-sans font-sans font-sans">mogucnost probnog perioda • Bez ugovora</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP DUGME --- */}
      <a 
        href="https://wa.me/381641211193?text=Zdravo,%20zanimaju%20me%20informacije%20u%20vezi%20StudioFlow%20softvera." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] flex items-center justify-center group"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none font-sans font-sans">
          Kontaktiraj StudioFlow tim
        </span>
      </a>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-50 font-sans font-sans font-sans">
        <p>© 2026 StudioFlow. Pametno rešenje za vaš studio.</p>
      </footer>
    </div>
  );
}