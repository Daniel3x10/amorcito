import { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Scissors, 
  Waves, 
  Coffee, 
  Sunset, 
  Flower2, 
  Home, 
  Moon, 
  Users, 
  Utensils, 
  Pizza, 
  Film, 
  Gift, 
  HeartHandshake, 
  UtensilsCrossed, 
  Smile, 
  Shuffle, 
  MapPin 
} from 'lucide-react';
import { ANECDOTAS_TE_ACUERDAS, type Anecdota } from '../data/teAcuerdas';

const ICON_MAP: Record<string, typeof Sparkles> = {
  Scissors,
  Waves,
  Coffee,
  Sunset,
  Heart,
  Flower2,
  Home,
  Moon,
  Users,
  Utensils,
  Pizza,
  Film,
  Gift,
  Sparkles,
  HeartHandshake,
  UtensilsCrossed,
  Smile,
};

interface TeAcuerdasSectionProps {
  onNavigateToFechas?: () => void;
}

export function TeAcuerdasSection({ onNavigateToFechas }: TeAcuerdasSectionProps = {}) {
  const [categoria, setCategoria] = useState<string>('todas');
  const [anecdotaAzar, setAnecdotaAzar] = useState<Anecdota | null>(null);

  const categorias = [
    { id: 'todas', label: 'Todas (17)' },
    { id: 'Primeras Veces', label: 'Primeras Veces' },
    { id: 'Complicidad', label: 'Complicidad' },
    { id: 'Citas & Comidas', label: 'Citas & Comidas' },
    { id: 'Aventuras', label: 'Aventuras' },
    { id: 'Familia', label: 'Familia' },
  ];

  const anecdotasFiltradas = ANECDOTAS_TE_ACUERDAS.filter((a) => {
    if (categoria === 'todas') return true;
    return a.categoria === categoria;
  });

  const sacarAleatoria = () => {
    const randomIdx = Math.floor(Math.random() * ANECDOTAS_TE_ACUERDAS.length);
    setAnecdotaAzar(ANECDOTAS_TE_ACUERDAS[randomIdx]);
  };

  return (
    <section className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Selector de sub-sección: Fechas Clave / ¿Te acuerdas? */}
      {onNavigateToFechas && (
        <div className="flex items-center justify-center p-1 bg-white/90 border border-pink-200/90 rounded-full max-w-xs sm:max-w-sm mx-auto shadow-xs">
          <button 
            type="button"
            onClick={onNavigateToFechas}
            className="flex-1 py-1.5 px-3 rounded-full text-xs font-medium text-stone-600 hover:text-pink-600 hover:bg-pink-50/60 transition-colors cursor-pointer"
          >
            📅 Fechas Clave
          </button>
          <button 
            type="button"
            className="flex-1 py-1.5 px-3 rounded-full text-xs font-semibold bg-pink-500 text-white shadow-xs cursor-default"
          >
            💭 ¿Te acuerdas? (17)
          </button>
        </div>
      )}

      {/* Título de la sección con stickers */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <img src="./stickers/hello-kitty-3.png" alt="Kitty" className="w-8 h-8 object-contain" />
          <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Nuestras Memorias Vivas</span>
          <img src="./stickers/bubu-dancing.gif" alt="Bubu" className="w-8 h-8 object-contain" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">¿Te acuerdas cuando...?</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Pequeñas y grandes anécdotas que solo nosotros dos conocemos y que guardo en el corazón.
        </p>
      </div>

      {/* Botón Recordar al Azar */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-white via-pink-50/50 to-amber-50/40 border border-pink-200 text-center space-y-4 shadow-sm max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-pink-700 text-xs font-semibold">
          <Shuffle className="w-4 h-4 text-pink-500 animate-spin-slow" />
          <span>Revive un recuerdo al azar</span>
        </div>

        {anecdotaAzar ? (
          <div className="p-5 rounded-2xl bg-white border border-pink-200 text-center space-y-2 animate-fade-in shadow-xs">
            <span className="text-[11px] font-mono text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100 font-semibold">
              {anecdotaAzar.categoria}
            </span>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              {anecdotaAzar.titulo}
            </h4>
            <p className="font-handwriting text-xl sm:text-2xl text-stone-800 leading-relaxed italic">
              "{anecdotaAzar.texto}"
            </p>
          </div>
        ) : (
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
            Presiona el botón para recordar juntos una de nuestras anécdotas especiales.
          </p>
        )}

        <button
          type="button"
          onClick={sacarAleatoria}
          className="px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-xs sm:text-sm transition-all duration-300 shadow-md shadow-pink-300 cursor-pointer inline-flex items-center gap-2 hover:scale-105"
        >
          <Shuffle className="w-4 h-4" />
          <span>{anecdotaAzar ? 'Recordar otro momento' : '¡Recordar un momento al azar! ✨'}</span>
        </button>
      </div>

      {/* Filtros de Categoría */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategoria(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              categoria === cat.id
                ? 'bg-pink-500 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-transparent'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid de Anécdotas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {anecdotasFiltradas.map((item) => {
          const Icono = ICON_MAP[item.icono] || Sparkles;

          return (
            <div
              key={item.id}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 space-y-3 flex flex-col justify-between shadow-xs hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                    <Icono className="w-5 h-5 text-pink-500" />
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100 font-semibold">
                    {item.categoria}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                    {item.titulo}
                  </h3>
                  {item.lugarOContexto && (
                    <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-1">
                      <MapPin className="w-3 h-3 text-pink-500" />
                      <span>{item.lugarOContexto}</span>
                    </div>
                  )}
                </div>

                <p className="font-handwriting text-xl sm:text-2xl text-stone-800 leading-relaxed pt-1">
                  "{item.texto}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span className="font-mono text-[11px] text-pink-600 font-medium">Recuerdo #{item.id}</span>
                <Heart className="w-4 h-4 text-pink-400 fill-pink-200 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
