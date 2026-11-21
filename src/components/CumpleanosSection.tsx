import { useState, useEffect } from 'react';
import { Sparkles, Gift, PartyPopper, Cake, Flame, Calendar } from 'lucide-react';
import { MENSAJE_CUMPLEANOS } from '../data/cumpleanos';
import { lanzarConfeti } from '../utils/confetti';

interface TiempoRestante {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  esMesCumple: boolean;
}

export function CumpleanosSection() {
  const [velitasSopladas, setVelitasSopladas] = useState<boolean>(false);
  const [tiempo, setTiempo] = useState<TiempoRestante>({ dias: 0, horas: 0, minutos: 0, segundos: 0, esMesCumple: true });

  useEffect(() => {
    const calcularTiempo = () => {
      const ahora = new Date();
      // 13 de Noviembre (mes 10 en JS porque es 0-indexed)
      let destino = new Date(ahora.getFullYear(), 10, 13, 0, 0, 0);

      // Si ya pasó el 13 de noviembre de este año, calculamos para el próximo 13 de noviembre
      if (ahora.getTime() > destino.getTime() + 86400000) {
        destino = new Date(ahora.getFullYear() + 1, 10, 13, 0, 0, 0);
      }

      const diferencia = destino.getTime() - ahora.getTime();
      const esMesNoviembre = ahora.getMonth() === 10;

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        setTiempo({ dias, horas, minutos, segundos, esMesCumple: esMesNoviembre });
      } else {
        setTiempo({ dias: 0, horas: 0, minutos: 0, segundos: 0, esMesCumple: true });
      }
    };

    calcularTiempo();
    const interval = setInterval(calcularTiempo, 1000);
    return () => clearInterval(interval);
  }, []);

  const soplarVelitas = () => {
    setVelitasSopladas(true);
    lanzarConfeti();
  };

  return (
    <section className="space-y-10 animate-fade-in max-w-4xl mx-auto">
      {/* Título de la sección con stickers tiernos */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <img src="./stickers/hello-kitty-1.png" alt="Kitty" className="w-9 h-9 object-contain animate-float" />
          <span className="text-xs uppercase tracking-widest text-pink-600 font-mono font-semibold bg-pink-100 px-3.5 py-1 rounded-full border border-pink-200">
            13 de Noviembre 🎂
          </span>
          <img src="./stickers/bubu-dancing.gif" alt="Bubu" className="w-9 h-9 object-contain" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 font-bold tracking-tight">
          ¡Feliz Cumpleaños, Mi Reina!
        </h2>

        <p className="text-stone-600 text-sm max-w-md mx-auto">
          {MENSAJE_CUMPLEANOS.subtitulo}
        </p>
      </div>

      {/* Tarjeta de Celebración de Cumpleaños */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50/60 to-amber-50/50 border border-pink-200/80 text-center space-y-5 shadow-lg shadow-pink-100/60 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-200 text-pink-700 text-xs sm:text-sm font-semibold shadow-xs">
          <PartyPopper className="w-4 h-4 text-pink-500 animate-bounce" />
          <span>¡Celebrando tus 13 de Noviembre! 🎉🎂</span>
        </div>

        <div className="space-y-2 py-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Cada 13 de Noviembre es el día más feliz del año
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
            Este rinconcito digital fue hecho exclusivamente para celebrar tu vida, tu sonrisa y el amor tan inmenso que nos une.
          </p>
        </div>

        {/* Cuenta para el próximo cumpleaños */}
        <div className="pt-2">
          <span className="text-[11px] font-mono text-pink-600 uppercase tracking-wider block mb-2 font-medium">
            Cuenta regresiva para tu próximo 13 de Noviembre:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-xs">
              <span className="block font-serif text-3xl font-bold text-stone-800 font-mono">
                {tiempo.dias}
              </span>
              <span className="text-xs text-pink-600 uppercase font-mono tracking-wider font-medium">Días</span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-xs">
              <span className="block font-serif text-3xl font-bold text-stone-800 font-mono">
                {tiempo.horas.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-pink-600 uppercase font-mono tracking-wider font-medium">Horas</span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-xs">
              <span className="block font-serif text-3xl font-bold text-stone-800 font-mono">
                {tiempo.minutos.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-pink-600 uppercase font-mono tracking-wider font-medium">Minutos</span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-pink-100 shadow-xs">
              <span className="block font-serif text-3xl font-bold text-pink-600 font-mono animate-pulse">
                {tiempo.segundos.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-pink-600 uppercase font-mono tracking-wider font-medium">Segundos</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={lanzarConfeti}
            className="px-5 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold transition-all shadow-md shadow-pink-300/50 cursor-pointer flex items-center gap-2 hover:scale-105"
          >
            <PartyPopper className="w-4 h-4" />
            <span>¡Lanzar confeti de cumpleaños! ✨</span>
          </button>
        </div>
      </div>

      {/* Pastel Interactivo para Soplar las Velitas */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md text-center space-y-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Velitas encendidas o apagadas */}
          <div className="flex items-center gap-3">
            {[1, 2, 3].map((v) => (
              <div key={v} className="flex flex-col items-center">
                {!velitasSopladas ? (
                  <Flame className="w-6 h-6 text-amber-500 animate-bounce fill-amber-400" />
                ) : (
                  <span className="w-2 h-4 bg-stone-300 rounded-full animate-pulse" />
                )}
                <div className="w-3 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-sm border border-pink-400/50" />
              </div>
            ))}
          </div>

          {/* Icono del pastel con sticker Bubu Dudu */}
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-pink-50 flex items-center justify-center text-pink-500 shadow-inner border border-pink-100">
              <Cake className="w-12 h-12" />
            </div>
            <img 
              src="./stickers/bubu-dudu.png" 
              alt="Bubu & Dudu" 
              className="absolute -right-8 -bottom-2 w-12 h-12 object-contain drop-shadow" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            {velitasSopladas ? '¡Deseo pedido con todo el corazón! ✨' : '¡Pide un deseo y sopla las velitas!'}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
            {velitasSopladas
              ? 'Tus deseos de cumpleaños han sido guardados en el cielo. Que se cumpla cada uno de tus sueños, mi reina hermosa.'
              : 'Cierra tus ojos, piensa en ese sueño que tanto anhelas y presiona el botón para apagar las velitas.'}
          </p>
        </div>

        <div className="flex justify-center">
          {!velitasSopladas ? (
            <button
              type="button"
              onClick={soplarVelitas}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-sm transition-all shadow-lg shadow-pink-300/60 cursor-pointer flex items-center gap-2 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Soplar las velitas 🕯️💨</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setVelitasSopladas(false)}
              className="px-5 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer"
            >
              Volver a encender las velitas
            </button>
          )}
        </div>
      </div>

      {/* Carta Especial del 13 de Noviembre */}
      <article className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50/40 to-amber-50/30 border border-pink-200 shadow-md relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between border-b border-pink-100 pb-3">
          <div className="flex items-center gap-2 text-pink-600">
            <Gift className="w-5 h-5 text-pink-500" />
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {MENSAJE_CUMPLEANOS.titulo}
            </h3>
          </div>
          <span className="text-xs font-mono text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full border border-pink-200 font-semibold flex items-center gap-1">
            <Calendar className="w-3 h-3 text-pink-500" />
            {MENSAJE_CUMPLEANOS.fechaTexto}
          </span>
        </div>

        <p className="font-handwriting text-xl sm:text-2xl text-stone-800 leading-relaxed whitespace-pre-line">
          {MENSAJE_CUMPLEANOS.dedicatoria}
        </p>

        <div className="pt-3 text-right">
          <p className="font-handwriting text-2xl text-pink-600 font-bold">
            {MENSAJE_CUMPLEANOS.firma} ❤️
          </p>
        </div>
      </article>
    </section>
  );
}
