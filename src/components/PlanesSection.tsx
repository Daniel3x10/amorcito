import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Compass, 
  Sparkles, 
  Heart,
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
  Palette,
  Plus,
  X,
  Trash2,
  Send
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
  heart: Heart,
  mountain: Mountain,
  landmark: Landmark,
  dumbbell: Dumbbell,
  hotel: Hotel,
  trophy: Trophy,
  palette: Palette,
};

type FiltroEstado = 'todos' | 'pendientes' | 'cumplidos';

const STORAGE_KEY = 'amorcito_planes_v1';
const WHATSAPP_NUMBER = '51964814209';

function cargarPlanes(): Plan[] {
  try {
    const guardados = localStorage.getItem(STORAGE_KEY);
    if (!guardados) return LISTA_DE_PLANES;
    const parseados: Plan[] = JSON.parse(guardados);
    const idsGuardados = new Set(parseados.map((p) => p.id));
    const faltantes = LISTA_DE_PLANES.filter((p) => !idsGuardados.has(p.id));
    return [...parseados, ...faltantes];
  } catch {
    return LISTA_DE_PLANES;
  }
}

export function PlanesSection() {
  const [planes, setPlanes] = useState<Plan[]>(cargarPlanes);
  const [filtro, setFiltro] = useState<FiltroEstado>('todos');
  const [mostrarModal, setMostrarModal] = useState(false);

  // Formulario de nuevo plan
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState<'Citas' | 'Viajes' | 'Aventuras' | 'Hogar'>('Citas');
  const [nuevoLugar, setNuevoLugar] = useState('');

  // Persistir en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(planes));
    } catch {
      // Ignorar si hay quota exceeded
    }
  }, [planes]);

  const togglePlan = (id: number) => {
    setPlanes((prev) =>
      prev.map((plan) => {
        if (plan.id !== id) return plan;
        const ahoraCumplido = !plan.cumplido;
        return {
          ...plan,
          cumplido: ahoraCumplido,
          fechaCumplido: ahoraCumplido
            ? new Date().toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' })
            : undefined,
        };
      })
    );
  };

  const eliminarPlan = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlanes((prev) => prev.filter((p) => p.id !== id));
  };

  const agregarPlan = (enviarWhatsapp: boolean = false) => {
    if (!nuevoTitulo.trim()) return;

    const nuevoPlanObj: Plan = {
      id: Date.now(),
      titulo: nuevoTitulo.trim(),
      descripcion: nuevaDescripcion.trim() || 'Un momento especial planeado con mucho amor.',
      categoria: nuevaCategoria,
      icono: nuevaCategoria === 'Viajes' ? 'plane' : nuevaCategoria === 'Citas' ? 'heart' : nuevaCategoria === 'Aventuras' ? 'sparkles' : 'coffee',
      cumplido: false,
      lugar: nuevoLugar.trim() || undefined,
      esPersonalizado: true,
    };

    setPlanes((prev) => [nuevoPlanObj, ...prev]);

    if (enviarWhatsapp) {
      const texto = `¡Hola mi amor! 🥰✨ Acabo de agregar un nuevo plan a nuestra lista:\n\n*${nuevoPlanObj.titulo}*\nCategoría: ${nuevoPlanObj.categoria}${nuevoPlanObj.lugar ? `\nLugar: ${nuevoPlanObj.lugar}` : ''}\n\n"${nuevoPlanObj.descripcion}"\n\n¿Cuándo lo hacemos realidad? 💖🥺`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    }

    // Resetear formulario
    setNuevoTitulo('');
    setNuevaDescripcion('');
    setNuevoLugar('');
    setMostrarModal(false);
  };

  const cumplidos = planes.filter((p) => p.cumplido).length;
  const progreso = planes.length > 0 ? Math.round((cumplidos / planes.length) * 100) : 0;

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
          <img src="/stickers/hello-kitty-1.png" alt="Kitty" className="w-8 h-8 object-contain" />
          <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Nuestra Bucket List</span>
          <img src="/stickers/bubu-dudu-love.gif" alt="Bubu" className="w-8 h-8 object-contain" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Lista de Planes Juntos</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Momentos, aventuras y sueños que queremos vivir. ¡Tú también puedes proponer todos los planes que desees!
        </p>
      </div>

      {/* Botón para Proponer Nuevo Plan */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setMostrarModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-pink-200 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>¡Proponer un nuevo plan mi amor! ✍️💖</span>
        </button>
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
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                      {plan.categoria}
                    </span>
                    {plan.esPersonalizado && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-semibold border border-rose-200 flex items-center gap-1">
                        <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
                        Plan de Mari
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {plan.esPersonalizado && (
                      <button
                        type="button"
                        onClick={(e) => eliminarPlan(plan.id, e)}
                        title="Eliminar este plan propuesto"
                        className="text-stone-300 hover:text-red-500 p-1 transition-colors rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}

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

      {/* Modal para Proponer Plan */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-fade-in">
          <div 
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-pink-200 shadow-2xl relative space-y-5 animate-scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setMostrarModal(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del modal */}
            <div className="text-center space-y-1.5">
              <img 
                src="/stickers/bubu-dudu-love.gif" 
                alt="Bubu & Dudu" 
                className="w-16 h-16 mx-auto object-contain" 
              />
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Proponer un Nuevo Plan 💖
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Escribe tu idea. Se guardará directamente en nuestra lista y también puedes avisarme por WhatsApp para agendarlo.
              </p>
            </div>

            {/* Campos del formulario */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  ¿Qué te gustaría que hagamos? *
                </label>
                <input
                  type="text"
                  value={nuevoTitulo}
                  onChange={(e) => setNuevoTitulo(e.target.value)}
                  placeholder="Ej. Tarde de picnic bajo las estrellas, noche de sushi..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-hidden text-sm bg-pink-50/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Detalles o lo que imaginaste (opcional)
                </label>
                <textarea
                  rows={2}
                  value={nuevaDescripcion}
                  onChange={(e) => setNuevaDescripcion(e.target.value)}
                  placeholder="Ej. Comprar postres ricos, llevar una manta y tomarnos fotos lindas..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-hidden text-sm bg-pink-50/20 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Categoría
                  </label>
                  <select
                    value={nuevaCategoria}
                    onChange={(e) => setNuevaCategoria(e.target.value as 'Citas' | 'Viajes' | 'Aventuras' | 'Hogar')}
                    className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-hidden text-xs bg-pink-50/20"
                  >
                    <option value="Citas">Citas 🥂</option>
                    <option value="Viajes">Viajes ✈️</option>
                    <option value="Aventuras">Aventuras 🎡</option>
                    <option value="Hogar">Hogar & En casa 🏡</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Lugar (opcional)
                  </label>
                  <input
                    type="text"
                    value={nuevoLugar}
                    onChange={(e) => setNuevoLugar(e.target.value)}
                    placeholder="Ej. Huanchaco, En casa, Restaurante..."
                    className="w-full px-3 py-2 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-hidden text-xs bg-pink-50/20"
                  />
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                type="button"
                onClick={() => agregarPlan(false)}
                disabled={!nuevoTitulo.trim()}
                className="flex-1 py-2.5 px-4 rounded-full bg-white hover:bg-stone-50 border border-pink-300 text-stone-800 font-medium text-xs transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>Solo guardar en la lista</span>
              </button>

              <button
                type="button"
                onClick={() => agregarPlan(true)}
                disabled={!nuevoTitulo.trim()}
                className="flex-1 py-2.5 px-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-xs shadow-md shadow-pink-300 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Guardar y avisarle por WhatsApp 💬</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
