import { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Shuffle, 
  Search, 
  Moon, 
  AlertCircle, 
  Home, 
  Dog, 
  Users, 
  GraduationCap, 
  Brush, 
  Utensils, 
  CookingPot, 
  Soup, 
  Sunset, 
  Headphones, 
  Music, 
  Star, 
  Mic, 
  Compass, 
  Gift, 
  Calendar, 
  Shirt,
  MessageCircleQuestion,
  HelpCircle
} from 'lucide-react';
import { 
  COSAS_QUE_SE_DE_TI, 
  PREGUNTAS_CONOCERNOS, 
  PREGUNTAS_RECORDAR,
  type CosaDeTi 
} from '../data/preguntas';

const ICONOS_COSAS: Record<string, typeof Sparkles> = {
  Moon,
  AlertCircle,
  Home,
  Dog,
  Users,
  GraduationCap,
  Sparkles,
  Brush,
  Utensils,
  CookingPot,
  Soup,
  Sunset,
  Headphones,
  Music,
  Star,
  Mic,
  Compass,
  Gift,
  Calendar,
  Shirt,
};

type VistaSubSeccion = 'cosas' | 'conocernos' | 'recordar';

export function PreguntasSection() {
  const [vista, setVista] = useState<VistaSubSeccion>('cosas');
  const [preguntaAleatoria, setPreguntaAleatoria] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState<string>('');
  const [preguntasRespondidas, setPreguntasRespondidas] = useState<string[]>([]);
  const [limiteVisible, setLimiteVisible] = useState<number>(20);

  const listaActual = vista === 'conocernos' ? PREGUNTAS_CONOCERNOS : PREGUNTAS_RECORDAR;

  const preguntasFiltradas = listaActual.filter((p) =>
    p.toLowerCase().includes(busqueda.toLowerCase())
  );

  const sacarPreguntaAleatoria = () => {
    const randomIdx = Math.floor(Math.random() * listaActual.length);
    setPreguntaAleatoria(listaActual[randomIdx]);
  };

  const toggleRespondida = (pregunta: string) => {
    setPreguntasRespondidas((prev) =>
      prev.includes(pregunta) ? prev.filter((p) => p !== pregunta) : [...prev, pregunta]
    );
  };

  return (
    <section className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Juegos, Trivia & Detalles</span>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Preguntas & Cosas de Ti</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Para jugar juntos, recordar nuestros mejores momentos y celebrar todo lo que te hace única.
        </p>
      </div>

      {/* Selector de sub-sección */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => { setVista('cosas'); setPreguntaAleatoria(null); }}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            vista === 'cosas'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Cosas que sé de ti ({COSAS_QUE_SE_DE_TI.length})</span>
        </button>

        <button
          type="button"
          onClick={() => { setVista('conocernos'); setPreguntaAleatoria(null); setLimiteVisible(20); }}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            vista === 'conocernos'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <MessageCircleQuestion className="w-4 h-4" />
          <span>100 para Conocernos</span>
        </button>

        <button
          type="button"
          onClick={() => { setVista('recordar'); setPreguntaAleatoria(null); setLimiteVisible(20); }}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            vista === 'recordar'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>100 para Recordar</span>
        </button>
      </div>

      {/* 1. VISTA: COSAS QUE SÉ DE TI */}
      {vista === 'cosas' && (
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-pink-600 font-semibold">Cada detalle tuyo grabado en mi mente</span>
            <p className="text-stone-600 text-xs sm:text-sm">
              Porque conocerte y amarte en tus gustos, manías y pasiones es lo más lindo que me pasa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COSAS_QUE_SE_DE_TI.map((item: CosaDeTi) => {
              const Icono = ICONOS_COSAS[item.icono] || Sparkles;

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-pink-300 hover:shadow-md transition-all duration-300 space-y-3 group hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                      <Icono className="w-5 h-5 text-pink-500" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                      {item.categoria}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                      {item.titulo}
                    </h3>
                    <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2 & 3. VISTAS DE PREGUNTAS */}
      {vista !== 'cosas' && (
        <div className="space-y-6">
          {/* Botón Ruleta / Pregunta al Azar */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-white via-pink-50/50 to-amber-50/40 border border-pink-200 text-center space-y-4 shadow-md">
            <div className="flex items-center justify-center gap-3">
              <img src="/stickers/bubu-hearts.gif" alt="Bubu" className="w-10 h-10 object-contain" />
              <div className="flex items-center gap-2 text-pink-700 text-xs font-semibold">
                <Shuffle className="w-4 h-4 text-pink-500 animate-spin-slow" />
                <span>Modo Juego: Pregunta al Azar</span>
              </div>
              <img src="/stickers/hello-kitty-3.png" alt="Kitty" className="w-9 h-9 object-contain" />
            </div>

            {preguntaAleatoria ? (
              <div className="p-5 rounded-2xl bg-white border border-pink-200 text-center max-w-xl mx-auto space-y-2 animate-fade-in shadow-xs">
                <p className="font-serif text-lg sm:text-xl text-stone-900 font-bold italic">
                  "{preguntaAleatoria}"
                </p>
                <span className="text-[11px] text-pink-600 font-mono font-medium">¡Hora de responder con total sinceridad!</span>
              </div>
            ) : (
              <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
                ¿Listos para una ronda? Presiona el botón para sacar una pregunta al azar de la lista.
              </p>
            )}

            <button
              type="button"
              onClick={sacarPreguntaAleatoria}
              className="px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-xs sm:text-sm transition-all duration-300 shadow-md shadow-pink-300 cursor-pointer inline-flex items-center gap-2"
            >
              <Shuffle className="w-4 h-4" />
              <span>{preguntaAleatoria ? 'Sacar otra pregunta' : '¡Sacar una pregunta al azar!'}</span>
            </button>
          </div>

          {/* Buscador */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar entre las 100 preguntas..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-pink-400 shadow-xs"
            />
          </div>

          {/* Lista de Preguntas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {preguntasFiltradas.slice(0, limiteVisible).map((pregunta, idx) => {
              const respondida = preguntasRespondidas.includes(pregunta);

              return (
                <div
                  key={idx}
                  onClick={() => toggleRespondida(pregunta)}
                  className={`p-4 rounded-xl border flex items-start justify-between gap-3 transition-all duration-200 cursor-pointer ${
                    respondida
                      ? 'bg-pink-50/50 border-pink-200 text-stone-400'
                      : 'bg-white border-stone-200 hover:border-pink-300 hover:shadow-xs text-stone-800'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-mono text-pink-600 font-bold mt-0.5">
                      #{idx + 1}.
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed ${respondida ? 'line-through text-stone-400' : 'font-medium'}`}>
                      {pregunta}
                    </p>
                  </div>

                  <span className="shrink-0 pt-0.5">
                    <Heart className={`w-3.5 h-3.5 ${respondida ? 'text-pink-500 fill-pink-500' : 'text-stone-300'}`} />
                  </span>
                </div>
              );
            })}
          </div>

          {/* Botón Cargar Más */}
          {limiteVisible < preguntasFiltradas.length && (
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setLimiteVisible((prev) => prev + 20)}
                className="px-5 py-2 rounded-full bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 border border-stone-200 cursor-pointer shadow-xs"
              >
                Cargar más preguntas ({preguntasFiltradas.length - limiteVisible} restantes)
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
