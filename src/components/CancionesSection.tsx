import { useState } from 'react';
import { Heart, Play, X, ExternalLink } from 'lucide-react';
import { LISTA_DE_CANCIONES, type Cancion } from '../data/canciones';

export function CancionesSection() {
  const [cancionReproduciendo, setCancionReproduciendo] = useState<Cancion | null>(null);

  return (
    <section className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Banda Sonora & Videos</span>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Canciones Juntos</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Melodías que cuentan nuestra historia. Puedes reproducir los videos oficiales directamente aquí.
        </p>
      </div>

      {/* Grid de Canciones con Miniaturas Oficiales de Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LISTA_DE_CANCIONES.map((cancion, idx) => (
          <div
            key={cancion.id}
            className="group rounded-2xl bg-white border border-stone-200/90 hover:border-pink-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs"
          >
            {/* Cabecera / Miniatura de Video */}
            <div 
              className="relative aspect-video w-full bg-stone-900 overflow-hidden cursor-pointer"
              onClick={() => setCancionReproduciendo(cancion)}
            >
              <img
                src={`https://img.youtube.com/vi/${cancion.youtubeId}/mqdefault.jpg`}
                alt={cancion.titulo}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />

              {/* Botón de Play Flotante */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center shadow-lg shadow-pink-900/40 group-hover:scale-115 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Distintivo de número */}
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono border border-white/20">
                Pista #{idx + 1}
              </span>
            </div>

            {/* Contenido / Información */}
            <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                    {cancion.titulo}
                  </h3>
                  <span className="text-xs font-mono text-pink-700 font-semibold px-2 py-0.5 rounded-full bg-pink-50 border border-pink-200 shrink-0">
                    {cancion.artista}
                  </span>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm mt-2 italic leading-relaxed">
                  "{cancion.dedicatoria}"
                </p>
              </div>

              {/* Botones de acción */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCancionReproduciendo(cancion)}
                  className="px-3.5 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-xs shadow-pink-200"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Reproducir video</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={cancion.linkYouTube}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver en YouTube"
                    className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-200" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Reproductor de Video Embebido en Vivo */}
      {cancionReproduciendo && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setCancionReproduciendo(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra superior del reproductor */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="font-serif font-bold text-white text-sm sm:text-base">
                  {cancionReproduciendo.titulo} — {cancionReproduciendo.artista}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setCancionReproduciendo(null)}
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video de YouTube Embebido */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${cancionReproduciendo.youtubeId}?autoplay=1&rel=0`}
                title={cancionReproduciendo.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Pie con dedicatoria */}
            <div className="p-4 bg-stone-950 text-center">
              <p className="text-xs text-pink-300 italic font-serif">
                "{cancionReproduciendo.dedicatoria}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
