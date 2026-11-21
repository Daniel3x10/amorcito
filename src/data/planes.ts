/**
 * =========================================================================
 * ARCHIVO DE CONFIGURACIÓN DE PLANES
 * =========================================================================
 * ¡Aquí puedes editar, agregar o quitar los planes con total libertad!
 */

export interface Plan {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: 'Viajes' | 'Citas' | 'Aventuras' | 'Hogar';
  icono: string;
  cumplido: boolean;
  lugar?: string;
  fechaCumplido?: string;
}

export const LISTA_DE_PLANES: Plan[] = [
  {
    id: 1,
    titulo: 'Ir a Otuzco juntos',
    descripcion: 'Un viaje especial a la sierra, caminar por sus calles, sentir el clima fresco y disfrutar el camino de ida y vuelta.',
    categoria: 'Viajes',
    icono: 'mountain',
    cumplido: false,
    lugar: 'Otuzco, La Libertad',
  },
  {
    id: 2,
    titulo: 'Merendar en una cafetería bonita',
    descripcion: 'Pedir postres deliciosos, café o chocolate caliente y quedarnos horas platicando de todo.',
    categoria: 'Citas',
    icono: 'coffee',
    cumplido: false,
    lugar: 'Cafetería favorita',
  },
  {
    id: 3,
    titulo: 'Ir a un museo',
    descripcion: 'Pasear de la mano por las salas de arte e historia, tomarnos fotos y aprender cosas nuevas juntos.',
    categoria: 'Citas',
    icono: 'landmark',
    cumplido: false,
  },
  {
    id: 4,
    titulo: 'Ir al concierto de Morat',
    descripcion: 'Cantar cada verso a todo pulmón, abrazarnos en nuestras canciones favoritas y vivir una noche inolvidable.',
    categoria: 'Citas',
    icono: 'music',
    cumplido: false,
  },
  {
    id: 5,
    titulo: 'Hacer ejercicio juntos',
    descripcion: 'Motivarnos en pareja, entrenar juntos, reírnos del cansancio y celebrar cada meta de salud.',
    categoria: 'Hogar',
    icono: 'dumbbell',
    cumplido: false,
  },
  {
    id: 6,
    titulo: 'Ir a un hotel de lujo',
    descripcion: 'Una noche o fin de semana de descanso absoluto, jacuzzi, batas cómodas y consentirnos como reyes.',
    categoria: 'Viajes',
    icono: 'hotel',
    cumplido: false,
  },
  {
    id: 7,
    titulo: 'Tarde de bolos',
    descripcion: 'Competir amistosamente, celebrar cada chuza y reírnos de los tiros que se van por el canal.',
    categoria: 'Aventuras',
    icono: 'trophy',
    cumplido: false,
    lugar: 'Bowling',
  },
  {
    id: 8,
    titulo: 'Pintar juntos en lienzo',
    descripcion: 'Comprar dos lienzos pequeños, pinturas acrílicas y retratarnos el uno al otro con mucho amor.',
    categoria: 'Hogar',
    icono: 'palette',
    cumplido: false,
  },
  {
    id: 9,
    titulo: 'Jugar con plastilina',
    descripcion: 'Volver a ser niños por una tarde, moldear animalitos y figuras chistosas para guardarlas de recuerdo.',
    categoria: 'Hogar',
    icono: 'sparkles',
    cumplido: false,
  },
  {
    id: 10,
    titulo: 'Cocinar una receta especial juntos',
    descripcion: 'Buscar una receta nueva en internet, comprar los ingredientes y cocinarla en equipo con música de fondo.',
    categoria: 'Hogar',
    icono: 'utensils',
    cumplido: false,
  },
];
