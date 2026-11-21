import { useState } from 'react';
import { Sparkles, Check, Gift, MessageCircle } from 'lucide-react';
import { LISTA_DE_CUPONES, TELEFONO_WHATSAPP } from '../data/cupones';

export function CuponesSection() {
  const [canjeadosIds, setCanjeadosIds] = useState<number[]>([]);
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todos');

  const toggleCanjeado = (id: number) => {
    setCanjeadosIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categorias = [
    { id: 'todos', label: 'Todos (27)' },
    { id: 'Citas & Romance', label: 'Citas & Romance' },
    { id: 'Diversión & Juegos', label: 'Diversión' },
    { id: 'Hogar & Intimidad', label: 'Hogar' },
    { id: 'Paz & Conversación', label: 'Conversación' },
  ];

  const cuponesFiltrados = LISTA_DE_CUPONES.filter((c) => {
    if (categoriaActiva === 'todos') return true;
    return c.categoria === categoriaActiva;
  });

  return (
    <section className="space-y-8 animate-fade-in">
      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <img src="./stickers/hello-kitty-4.png" alt="Kitty" className="w-8 h-8 object-contain" />
          <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-medium">Regalos & Vales</span>
          <img src="./stickers/bubu-hug.gif" alt="Bubu Dudu" className="w-9 h-9 object-contain" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">Cupones de Amor</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Elige cualquier cupón y haz clic en <strong>Canjear por WhatsApp</strong> para reclamarlo al instante.
        </p>
      </div>

      {/* Filtros de Categoría */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategoriaActiva(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              categoriaActiva === cat.id
                ? 'bg-pink-500 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-transparent'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid de Cupones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cuponesFiltrados.map((cupon) => {
          const estaCanjeado = canjeadosIds.includes(cupon.id);
          const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(cupon.mensajeWhatsApp)}`;

          return (
            <div
              key={cupon.id}
              className={`relative rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
                estaCanjeado
                  ? 'bg-stone-100/70 border-stone-200 opacity-60'
                  : 'bg-white border-stone-200 hover:border-pink-300 hover:shadow-lg shadow-xs hover:-translate-y-0.5'
              }`}
            >
              <div className="space-y-3">
                {/* Cabecera del Cupón */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-pink-600 font-semibold">
                    <Gift className="w-3.5 h-3.5 text-pink-500" />
                    <span>#{cupon.id.toString().padStart(2, '0')}</span>
                  </span>

                  <span className="text-[10px] font-mono text-stone-600 bg-pink-50 border border-pink-100 px-2 py-0.5 rounded-full">
                    {cupon.categoria}
                  </span>
                </div>

                {/* Título y Descripción */}
                <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                  {cupon.titulo}
                </h3>

                <p className="text-stone-600 text-xs leading-relaxed">
                  {cupon.descripcion}
                </p>
              </div>

              {/* Botones de acción */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                {/* Botón para marcar como canjeado / activo */}
                <button
                  type="button"
                  onClick={() => toggleCanjeado(cupon.id)}
                  title={estaCanjeado ? 'Marcar como pendiente' : 'Marcar como usado'}
                  className={`text-[11px] px-2.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                    estaCanjeado
                      ? 'bg-stone-200 text-stone-700'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <Check className={`w-3 h-3 ${estaCanjeado ? 'text-pink-600' : 'text-stone-400'}`} />
                  <span>{estaCanjeado ? 'Canjeado' : 'Disponible'}</span>
                </button>

                {/* Botón Principal: Redirigir a WhatsApp */}
                <a
                  href={urlWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Canjear por WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-rose-400" />
        <span>Al hacer clic en "Canjear por WhatsApp", se abrirá un chat directo con el vale listo para enviar</span>
      </p>
    </section>
  );
}
