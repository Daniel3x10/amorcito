import { useState, useEffect } from 'react';
import { Heart, Sparkles, X, ChevronLeft, ChevronRight, Calendar, ArrowDown } from 'lucide-react';
import { FOTOS_RECUERDOS, type RecuerdoFoto } from '../data/recuerdos';

const FOTOS_POR_PAGINA = 16;

export function RecuerdosSection() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState<RecuerdoFoto | null>(null);
  const [cantidadVisible, setCantidadVisible] = useState<number>(FOTOS_POR_PAGINA);
  const [soloFavoritas, setSoloFavoritas] = useState<boolean>(false);

  const fotosFiltradas = soloFavoritas
    ? FOTOS_RECUERDOS.filter((f) => f.favorita)
    : FOTOS_RECUERDOS;

  const fotosVisibles = fotosFiltradas.slice(0, cantidadVisible);
  const hayMas = cantidadVisible < fotosFiltradas.length;

  const cargarMas = () => {
    setCantidadVisible((prev) => Math.min(prev + FOTOS_POR_PAGINA, fotosFiltradas.length));
  };

  const mostrarTodas = () => {
    setCantidadVisible(fotosFiltradas.length);
  };

  // Navegar entre fotos en el visor Lightbox
  const indiceActual = fotoSeleccionada
    ? fotosFiltradas.findIndex((f) => f.id === fotoSeleccionada.id)
    : -1;

  const irAnterior = () => {
    if (indiceActual > 0) {
      setFotoSeleccionada(fotosFiltradas[indiceActual - 1]);
    } else {
      setFotoSeleccionada(fotosFiltradas[fotosFiltradas.length - 1]);
    }
  };

  const irSiguiente = () => {
    if (indiceActual < fotosFiltradas.length - 1) {
      setFotoSeleccionada(fotosFiltradas[indiceActual + 1]);
    } else {
      setFotoSeleccionada(fotosFiltradas[0]);
    }
  };

  // Teclado para el visor
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fotoSeleccionada) return;
      if (e.key === 'Escape') setFotoSeleccionada(null);
      if (e.key === 'ArrowLeft') irAnterior();
      if (e.key === 'ArrowRight') irSiguiente();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fotoSeleccionada, indiceActual]);

  return (
    <section className="space-y-8 animate-fade-in">
      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Nuestros Momentos</span>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Galería de Recuerdos</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          {FOTOS_RECUERDOS.length} fotos que capturan lo bonito de caminar juntos.
        </p>

        {/* Filtros rápidos: Todas / Favoritas */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => { setSoloFavoritas(false); setCantidadVisible(FOTOS_POR_PAGINA); }}
            className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
              !soloFavoritas
                ? 'bg-pink-500 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Todas ({FOTOS_RECUERDOS.length})
          </button>
          <button
            type="button"
            onClick={() => { setSoloFavoritas(true); setCantidadVisible(FOTOS_POR_PAGINA); }}
            className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              soloFavoritas
                ? 'bg-pink-500 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Heart className="w-3 h-3 text-pink-500 fill-pink-400" />
            <span>Favoritas ({FOTOS_RECUERDOS.filter(f => f.favorita).length})</span>
          </button>
        </div>
      </div>

      {/* Grid de Fotos Optimizado con Thumbnails y decoding async */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {fotosVisibles.map((recuerdo) => (
          <div
            key={recuerdo.id}
            onClick={() => setFotoSeleccionada(recuerdo)}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer transition-all duration-300 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1 [content-visibility:auto]"
          >
            {/* Thumbnail optimizado y ultraliviano (~60KB) */}
            <img
              src={`/fotos/thumbs/${recuerdo.archivo}`}
              alt={recuerdo.titulo}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                // Fallback a foto original si el thumbnail no existiera
                const target = e.currentTarget;
                if (!target.src.includes('/fotos/' + recuerdo.archivo)) {
                  target.src = `/fotos/${recuerdo.archivo}`;
                }
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />

            {/* Capa de degradado sobre la foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left pointer-events-none">
              <span className="text-[10px] text-rose-300 font-mono flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                {recuerdo.fecha}
              </span>
              <p className="text-xs font-serif font-medium text-stone-100 leading-snug truncate">
                {recuerdo.titulo}
              </p>
            </div>

            {/* Distintivo de favorita */}
            {recuerdo.favorita && (
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-rose-500/30 text-rose-400 pointer-events-none">
                <Heart className="w-3 h-3 fill-rose-500/60" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón para Cargar Más si faltan fotos */}
      {hayMas && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={cargarMas}
            className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-rose-500/30 text-stone-200 text-xs font-medium transition-all cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <ArrowDown className="w-3.5 h-3.5 text-rose-400" />
            <span>Cargar más fotos ({fotosFiltradas.length - cantidadVisible} restantes)</span>
          </button>

          <button
            type="button"
            onClick={mostrarTodas}
            className="px-4 py-2 rounded-full text-stone-400 hover:text-stone-200 text-xs transition-colors cursor-pointer"
          >
            Mostrar todas ({fotosFiltradas.length})
          </button>
        </div>
      )}

      {/* Modal / Lightbox en Alta Resolución */}
      {fotoSeleccionada && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setFotoSeleccionada(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-stone-950/90 border border-stone-800/80 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setFotoSeleccionada(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Botón Anterior */}
            <button
              type="button"
              onClick={irAnterior}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Botón Siguiente */}
            <button
              type="button"
              onClick={irSiguiente}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Imagen Grande (aquí carga la foto en alta resolución para ver cada detalle) */}
            <div className="flex-1 min-h-[300px] max-h-[70vh] flex items-center justify-center bg-black/60 p-2">
              <img
                src={`/fotos/${fotoSeleccionada.archivo}`}
                alt={fotoSeleccionada.titulo}
                decoding="async"
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Pie de foto */}
            <div className="p-4 sm:p-5 border-t border-stone-800/60 bg-stone-900/80 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-base sm:text-lg text-stone-100 flex items-center gap-2">
                  {fotoSeleccionada.titulo}
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400/40" />
                </h3>
                <p className="text-xs text-stone-400 flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  <span>{fotoSeleccionada.fecha}</span>
                </p>
              </div>

              <span className="text-xs font-mono text-stone-400">
                {indiceActual + 1} / {fotosFiltradas.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <p className="text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-rose-400" />
        <span>Haz clic en cualquier foto para verla en pantalla completa</span>
      </p>
    </section>
  );
}
