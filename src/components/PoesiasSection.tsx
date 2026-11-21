import { useState } from 'react';
import { Feather, Heart, Sparkles, Quote, Scroll, Eye, EyeOff } from 'lucide-react';
import { 
  POEMA_PROMESA, 
  CARTA_FUTURO, 
  ACROSTICO_MARI, 
  FRAGMENTOS_RECUERDOS 
} from '../data/poesias';

export function PoesiasSection() {
  const [revelarAcrostico, setRevelarAcrostico] = useState<boolean>(false);

  return (
    <section className="space-y-10 animate-fade-in max-w-3xl mx-auto">
      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Letras del Alma</span>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Poesías, Cartas y Textos</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Cada palabra fue escrita pensando en ti, en lo que somos y en lo que soñamos ser.
        </p>
      </div>

      {/* 1. POEMA DE LA PROMESA */}
      <article className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50/40 to-amber-50/30 border border-pink-200/80 shadow-md overflow-hidden group hover:border-pink-300 transition-all duration-300">
        <Quote className="absolute top-4 right-4 w-12 h-12 text-pink-200/40 -z-0 pointer-events-none group-hover:text-pink-300/40 transition-colors" />
        
        <div className="relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-700 bg-pink-100 px-3 py-1 rounded-full border border-pink-200">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>{POEMA_PROMESA.tema}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            {POEMA_PROMESA.titulo}
          </h3>

          <div className="space-y-2 font-handwriting text-stone-800 text-xl sm:text-2xl italic leading-relaxed py-2">
            {POEMA_PROMESA.versos.map((verso, idx) => (
              <p key={idx}>{verso}</p>
            ))}
          </div>

          <div className="pt-2 flex justify-center">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-300" />
          </div>
        </div>
      </article>

      {/* 2. EL ACRÓSTICO ESPECIAL: TE AMO MI MARI HERMOSA */}
      <article className="p-6 sm:p-8 rounded-3xl bg-white border border-pink-200 shadow-md relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pink-100 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-pink-600">
              <Scroll className="w-5 h-5 text-pink-500" />
              <h3 className="font-serif text-xl font-bold text-stone-900">
                {ACROSTICO_MARI.titulo}
              </h3>
            </div>
            <p className="text-xs text-stone-500 mt-1 italic">
              {ACROSTICO_MARI.subtitulo}
            </p>
          </div>

          {/* Botón para Revelar el mensaje oculto */}
          <button
            type="button"
            onClick={() => setRevelarAcrostico(!revelarAcrostico)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 shrink-0 ${
              revelarAcrostico
                ? 'bg-pink-500 text-white shadow-md shadow-pink-300'
                : 'bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200'
            }`}
          >
            {revelarAcrostico ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Ocultar secreto</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Descubrir secreto ✨</span>
              </>
            )}
          </button>
        </div>

        {/* Los versos con la primera letra resaltada */}
        <div className="space-y-2 font-serif text-stone-800 text-sm sm:text-base leading-relaxed pl-3 sm:pl-4 border-l-2 border-pink-300">
          {ACROSTICO_MARI.lineas.map((linea, index) => {
            const primeraLetra = linea.charAt(0);
            const resto = linea.slice(1);

            return (
              <p key={index} className="transition-all duration-300">
                <span
                  className={`font-mono font-bold transition-all duration-300 ${
                    revelarAcrostico
                      ? 'text-pink-600 text-lg sm:text-xl font-extrabold bg-pink-100 px-1 rounded inline-block shadow-xs scale-110 mr-0.5'
                      : 'text-pink-500 font-semibold'
                  }`}
                >
                  {primeraLetra}
                </span>
                <span>{resto}</span>
              </p>
            );
          })}
        </div>

        {/* Banner cuando se revela el acróstico */}
        {revelarAcrostico && (
          <div className="mt-6 p-4 rounded-2xl bg-pink-50 border border-pink-200 text-center animate-fade-in space-y-1">
            <span className="text-[11px] font-mono text-pink-600 uppercase tracking-widest font-semibold">Mensaje descubierto</span>
            <p className="font-serif text-lg sm:text-2xl font-bold text-pink-600 tracking-wider">
              ❤️ {ACROSTICO_MARI.mensajeOculto} ❤️
            </p>
          </div>
        )}
      </article>

      {/* 3. CARTA DE AMOR: LA CHICA MÁS IMPORTANTE */}
      <article className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50/30 to-amber-50/20 border border-pink-200 shadow-md relative space-y-4">
        <div className="flex items-center justify-between border-b border-pink-100 pb-3">
          <div className="flex items-center gap-2 text-pink-600">
            <Feather className="w-5 h-5 text-pink-500" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              {CARTA_FUTURO.titulo}
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-500">{CARTA_FUTURO.fecha}</span>
        </div>

        <div className="font-handwriting text-stone-800 text-xl sm:text-2xl leading-relaxed whitespace-pre-line pl-2">
          {CARTA_FUTURO.contenido}
        </div>

        <div className="pt-3 text-right">
          <p className="text-xs text-stone-500">Siempre,</p>
          <p className="font-handwriting text-2xl text-pink-600 font-bold mt-0.5">{CARTA_FUTURO.firma}</p>
        </div>
      </article>

      {/* 4. FRAGMENTOS DE RECUERDOS */}
      <div className="space-y-4 pt-4">
        <div className="text-center space-y-1 mb-6">
          <span className="text-xs font-mono text-pink-600 uppercase tracking-widest font-semibold">Nuestra Memoria</span>
          <h3 className="font-serif text-2xl font-bold text-stone-900">Instantes Que Nos Marcaron</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {FRAGMENTOS_RECUERDOS.map((frag) => (
            <div
              key={frag.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 hover:border-pink-300 hover:shadow-md transition-all duration-300 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-pink-700 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200 font-medium">
                  {frag.momento}
                </span>
                <Heart className="w-4 h-4 text-pink-400 fill-pink-200" />
              </div>

              <h4 className="font-serif text-lg font-bold text-stone-900">
                {frag.titulo}
              </h4>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {frag.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
