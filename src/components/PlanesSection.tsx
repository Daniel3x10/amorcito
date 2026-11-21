import { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Compass, 
  Sparkles, 
  Plane,
  Palmtree,
  Sunset,
  Tent,
  Car,
  Film,
  Pizza,
  Coffee,
  Utensils,
  Camera,
  Music,
  Gift,
  MapPin,
  CalendarCheck,
  Mountain,
  Landmark,
  Dumbbell,
  Hotel,
  Trophy,
  Palette
} from 'lucide-react';
import { LISTA_DE_PLANES, type Plan } from '../data/planes';

const ICON_MAP: Record<string, typeof Sparkles> = {
  plane: Plane,
  palmtree: Palmtree,
  sunset: Sunset,
  tent: Tent,
  car: Car,
  film: Film,
  pizza: Pizza,
  coffee: Coffee,
  utensils: Utensils,
  camera: Camera,
  music: Music,
  gift: Gift,
  compass: Compass,
  sparkles: Sparkles,
  mountain: Mountain,
  landmark: Landmark,
  dumbbell: Dumbbell,
  hotel: Hotel,
  trophy: Trophy,
  palette: Palette,
};

type FiltroEstado = 'todos' | 'pendientes' | 'cumplidos';

export function PlanesSection() {
  const [planes, setPlanes] = useState<Plan[]>(LISTA_DE_PLANES);
  const [filtro, setFiltro] = useState<FiltroEstado>('todos');

  const togglePlan = (id: number) => {
    setPlanes((prev) =>
      prev.map((plan) =>
        plan.id === id ? { ...plan, cumplido: !plan.cumplido } : plan
      )
    );
  };

  const cumplidos = planes.filter((p) => p.cumplido).length;
  const progreso = Math.round((cumplidos / planes.length) * 100);

  const planesFiltrados = planes.filter((plan) => {
    if (filtro === 'pendientes') return !plan.cumplido;
    if (filtro === 'cumplidos') return plan.cumplido;
    return true;
  });

  return (
    <section className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Título de la sección con stickers */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <img src="./stickers/hello-kitty-1.png" alt="Kitty" className="w-8 h-8 object-contain" />
          <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Nuestra Bucket List</span>
          <img src="./stickers/bubu-dudu-love.gif" alt="Bubu" className="w-8 h-8 object-contain" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Lista de Planes Juntos</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Momentos, aventuras y sueños que queremos vivir juntos.
        </p>
      </div>

      {/* Tarjeta de Progreso */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-white via-pink-50/40 to-amber-50/30 border border-pink-200/80 max-w-2xl mx-auto space-y-3 shadow-md shadow-pink-100/50">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-stone-700">
            <Compass className="w-4 h-4 text-pink-500 animate-spin-slow" />
            <span className="font-medium">Nuestros sueños cumplidos</span>
          </div>
          <span className="font-mono text-pink-600 font-bold">
            {cumplidos} de {planes.length} ({progreso}%)
          </span>
        </div>

        <div className="w-full h-2.5 rounded-full bg-stone-100 border border-stone-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 rounded-full transition-all duration-700 ease-out shadow-xs shadow-pink-300"
            style={{ width: `${progreso}%` }}
          />
        </div>
      </div>

      {/* Filtros */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
        {(
          [
            { id: 'todos', label: `Todos (${planes.length})` },
            { id: 'pendientes', label: `Por vivir (${planes.length - cumplidos})` },
            { id: 'cumplidos', label: `Cumplidos (${cumplidos})` },
          ] as const
        ).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFiltro(item.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              filtro === item.id
                ? 'bg-pink-500 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-transparent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Galería de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {planesFiltrados.map((plan) => {
          const IconoComponent = ICON_MAP[plan.icono] || Sparkles;

          return (
            <div
              key={plan.id}
              onClick={() => togglePlan(plan.id)}
              className={`group relative rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                plan.cumplido
                  ? 'bg-pink-50/50 border-pink-200 shadow-xs'
                  : 'bg-white border-stone-200 hover:border-pink-300 hover:shadow-lg shadow-xs hover:-translate-y-0.5'
              }`}
            >
              <div className="space-y-4">
                {/* Cabecera de la card */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                    {plan.categoria}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    {plan.cumplido ? (
                      <span className="inline-flex items-center gap-1 text-pink-600 text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-pink-500" />
                        <span>¡Cumplido!</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-stone-400 text-xs group-hover:text-stone-600">
                        <Circle className="w-3.5 h-3.5" />
                        <span>Por vivir</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Gran Icono Representativo */}
                <div className="flex justify-center py-2">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      plan.cumplido
                        ? 'bg-pink-100 border border-pink-200 text-pink-600'
                        : 'bg-stone-50 border border-stone-200 text-stone-600 group-hover:text-pink-600 group-hover:border-pink-300 group-hover:scale-105'
                    }`}
                  >
                    <IconoComponent className="w-7 h-7" />
                  </div>
                </div>

                {/* Título y Descripción */}
                <div className="text-center space-y-1.5">
                  <h3
                    className={`font-serif text-lg font-bold transition-colors ${
                      plan.cumplido
                        ? 'text-pink-700 line-through decoration-pink-300'
                        : 'text-stone-900 group-hover:text-pink-600'
                    }`}
                  >
                    {plan.titulo}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed">
                    {plan.descripcion}
                  </p>
                </div>
              </div>

              {/* Pie de la card */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                {plan.lugar ? (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-pink-500" />
                    <span>{plan.lugar}</span>
                  </div>
                ) : (
                  <span className="italic">Juntos</span>
                )}

                {plan.cumplido && plan.fechaCumplido && (
                  <div className="flex items-center gap-1 text-pink-600 font-medium">
                    <CalendarCheck className="w-3 h-3" />
                    <span>{plan.fechaCumplido}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-stone-500 flex items-center justify-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        <span>Tip: Haz clic en cualquier tarjeta para marcarla como cumplida</span>
      </p>
    </section>
  );
}
