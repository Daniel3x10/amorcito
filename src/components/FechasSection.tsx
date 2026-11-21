import { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Flower2, 
  Flame, 
  Users, 
  Sparkles, 
  Calendar,
  Clock,
  Palette,
  GraduationCap
} from 'lucide-react';
import { FECHAS_IMPORTANTES, FECHA_INICIO_NOVIAZGO } from '../data/fechas';

const ICON_MAP = {
  message: MessageCircle,
  flower: Flower2,
  heart: Heart,
  flame: Flame,
  users: Users,
  sparkles: Sparkles,
  palette: Palette,
  graduation: GraduationCap,
};

interface TiempoJuntos {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

interface FechasSectionProps {
  onNavigateToTeAcuerdas?: () => void;
}

export function FechasSection({ onNavigateToTeAcuerdas }: FechasSectionProps = {}) {
  const [tiempo, setTiempo] = useState<TiempoJuntos>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  // Contador en vivo desde el 3 de Octubre de 2025
  useEffect(() => {
    const calcularTiempo = () => {
      const inicio = new Date(FECHA_INICIO_NOVIAZGO).getTime();
      const ahora = new Date().getTime();
      const diferencia = ahora - inicio;

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        setTiempo({ dias, horas, minutos, segundos });
      }
    };

    calcularTiempo();
    const interval = setInterval(calcularTiempo, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Selector de sub-sección: Fechas Clave / ¿Te acuerdas? */}
      {onNavigateToTeAcuerdas && (
        <div className="flex items-center justify-center p-1 bg-white/90 border border-pink-200/90 rounded-full max-w-xs sm:max-w-sm mx-auto shadow-xs">
          <button 
            type="button"
            className="flex-1 py-1.5 px-3 rounded-full text-xs font-semibold bg-pink-500 text-white shadow-xs cursor-default"
          >
            📅 Fechas Clave
          </button>
          <button 
            type="button"
            onClick={onNavigateToTeAcuerdas}
            className="flex-1 py-1.5 px-3 rounded-full text-xs font-medium text-stone-600 hover:text-pink-600 hover:bg-pink-50/60 transition-colors cursor-pointer"
          >
            💭 ¿Te acuerdas? (17)
          </button>
        </div>
      )}

      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Nuestra Cronología</span>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Fechas Importantes</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Los días que marcaron el rumbo de nuestras vidas y encendieron nuestro amor.
        </p>
      </div>

      {/* Tarjeta de Contador en Vivo (Aniversario) en tono cálido */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50/50 to-rose-50/40 border border-pink-200/80 text-center space-y-4 shadow-lg shadow-pink-100/50 relative overflow-hidden">
        <div className="flex items-center justify-center gap-3">
          <img src="/stickers/bubu-dudu-love.gif" alt="Bubu & Dudu" className="w-10 h-10 object-contain hidden sm:inline" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 animate-pulse text-pink-500" />
            <span>Tiempo de enamorados desde el 3 de Octubre de 2025</span>
          </div>
          <img src="/stickers/hello-kitty-2.png" alt="Hello Kitty" className="w-8 h-8 object-contain hidden sm:inline" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto pt-2">
          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-stone-800 font-mono">
              {tiempo.dias}
            </span>
            <span className="text-xs text-pink-600 uppercase tracking-wider font-mono font-medium">Días</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-stone-800 font-mono">
              {tiempo.horas.toString().padStart(2, '0')}
            </span>
            <span className="text-xs text-pink-600 uppercase tracking-wider font-mono font-medium">Horas</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-stone-800 font-mono">
              {tiempo.minutos.toString().padStart(2, '0')}
            </span>
            <span className="text-xs text-pink-600 uppercase tracking-wider font-mono font-medium">Minutos</span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-pink-600 font-mono animate-pulse">
              {tiempo.segundos.toString().padStart(2, '0')}
            </span>
            <span className="text-xs text-pink-600 uppercase tracking-wider font-mono font-medium">Segundos</span>
          </div>
        </div>

        <p className="text-xs text-stone-500 italic pt-1 flex items-center justify-center gap-1.5 font-serif">
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-300" />
          <span>Y cada segundo que pasa te quiero aún más</span>
        </p>
      </div>

      {/* Línea de tiempo cronológica */}
      <div className="relative border-l-2 border-pink-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-6 max-w-3xl">
        {FECHAS_IMPORTANTES.map((item) => {
          const IconoComponent = ICON_MAP[item.icono] || Heart;

          return (
            <div key={item.id} className="relative group">
              {/* Nodo de la línea con icono */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-115 ${
                  item.destacada
                    ? 'bg-pink-500 border-white text-white shadow-md shadow-pink-300/50'
                    : 'bg-white border-pink-200 text-pink-500'
                }`}
              >
                <IconoComponent className="w-3.5 h-3.5" />
              </div>

              {/* Tarjeta de la fecha */}
              <div
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  item.destacada
                    ? 'bg-white border-pink-200/90 shadow-md shadow-pink-100/40 group-hover:border-pink-300'
                    : 'bg-white/80 border-stone-200/80 group-hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-700 font-semibold bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                    <Calendar className="w-3 h-3 text-pink-500" />
                    {item.fecha}
                  </span>

                  {item.destacada && (
                    <span className="text-[10px] uppercase font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                      Inolvidable
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                  {item.titulo}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
