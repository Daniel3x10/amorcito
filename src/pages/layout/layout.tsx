import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { 
  Cake,
  Camera, 
  CheckSquare, 
  Music, 
  Ticket, 
  HelpCircle,
  Feather, 
  Heart,
  Sparkles
} from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground';

export type TabId = 
  | 'cumpleanos'
  | 'fechas' 
  | 'te-acuerdas'
  | 'recuerdos' 
  | 'planes' 
  | 'canciones' 
  | 'cupones' 
  | 'preguntas'
  | 'poesias';

export interface TabItem {
  id: TabId;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  destacada?: boolean;
}

export const TABS: TabItem[] = [
  { id: 'cumpleanos', label: 'Cumple 🎂', shortLabel: 'Cumple', icon: Cake, destacada: true },
  { id: 'te-acuerdas', label: '¿Recuerdas? 💭', shortLabel: 'Recuerdos', icon: Sparkles },
  { id: 'recuerdos', label: 'Fotos 📸', shortLabel: 'Fotos', icon: Camera },
  { id: 'planes', label: 'Planes 📝', shortLabel: 'Planes', icon: CheckSquare },
  { id: 'canciones', label: 'Música 🎵', shortLabel: 'Música', icon: Music },
  { id: 'cupones', label: 'Cupones 🎟️', shortLabel: 'Cupones', icon: Ticket },
  { id: 'preguntas', label: 'Preguntas ❓', shortLabel: 'Preguntas', icon: HelpCircle },
  { id: 'poesias', label: 'Poesías 💌', shortLabel: 'Poesías', icon: Feather },
];

interface LayoutProps {
  currentTab: TabId;
  onSelectTab: (tabId: TabId) => void;
  children: ReactNode;
}

export function Layout({ currentTab, onSelectTab, children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#fdfbf9] text-stone-800 relative flex flex-col selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden font-sans">
      {/* Fondo Animado Increíble: Orbes Aurora Mesh + Corazoncitos Flotantes */}
      <AnimatedBackground />

      {/* Header fijo con navegación responsive y diseño cálido */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#fdfbf9]/90 border-b border-rose-100/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo / Título con Sticker Bubu */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img 
              src="./stickers/bubu-dancing.gif" 
              alt="Bubu" 
              className="w-8 h-8 object-contain" 
            />
            <div className="flex flex-col">
              <span className="font-serif tracking-tight text-stone-900 font-bold text-sm sm:text-base leading-tight">
                Para Mi Mari Hermosa
              </span>
              <span className="text-[10px] text-pink-600 font-mono font-medium hidden sm:inline">
                Edición Cumpleaños 🎂💜
              </span>
            </div>
          </div>

          {/* Menú de pestañas estilo píldora clara con scroll horizontal */}
          <nav className="flex items-center gap-1 sm:gap-1.5 p-1 bg-white/90 border border-stone-200/80 rounded-full shadow-xs overflow-x-auto max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id || (tab.id === 'te-acuerdas' && currentTab === 'fechas');

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectTab(tab.id)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-pink-500 text-white shadow-md shadow-pink-500/25 font-semibold'
                      : tab.destacada
                      ? 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 ${isActive ? 'text-white' : tab.destacada ? 'text-pink-600' : 'text-stone-500'}`} />
                  <span className="inline sm:hidden">{tab.shortLabel}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        {children}
      </main>

      {/* Mascota flotante tierna (Hello Kitty & Bubu Dudu) */}
      <aside aria-label="Mascota tierna" className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 pointer-events-auto">
        <div className="relative group cursor-pointer bg-white/90 backdrop-blur-md border border-pink-200 p-2 rounded-2xl shadow-lg hover:scale-110 transition-transform">
          <img 
            src="./stickers/hello-kitty-1.png" 
            alt="Hello Kitty" 
            className="w-10 h-10 object-contain drop-shadow-sm" 
          />
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-center bg-white border border-pink-200 p-3 rounded-2xl text-center shadow-2xl w-48 animate-fade-in pointer-events-none">
            <img 
              src="./stickers/bubu-dudu-love.gif" 
              alt="Bubu & Dudu" 
              className="w-20 h-20 object-contain" 
            />
            <p className="text-xs font-serif text-pink-700 font-bold mt-1">
              ¡Feliz Cumpleaños Mari! 🎂🌸
            </p>
            <span className="text-[10px] text-purple-600 font-mono mt-0.5">I Purple You 💜</span>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="w-full border-t border-rose-100/80 py-6 text-center text-xs text-stone-500 relative z-10 bg-white/40">
        <p className="flex items-center justify-center gap-1.5 font-medium">
          Hecho con todo mi amor <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-400 inline" /> para ti
        </p>
      </footer>
    </div>
  );
}
