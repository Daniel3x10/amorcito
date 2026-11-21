/**
 * =========================================================================
 * ARCHIVO DE CONFIGURACIÓN DE FECHAS IMPORTANTES
 * =========================================================================
 * Puedes editar o agregar más momentos especiales aquí.
 */

export interface FechaImportante {
  id: number;
  fecha: string;
  fechaIso: string;
  titulo: string;
  descripcion: string;
  icono: 'message' | 'users' | 'flower' | 'heart' | 'flame' | 'sparkles' | 'palette' | 'graduation';
  destacada?: boolean;
}

// Fecha oficial del inicio de su noviazgo para el contador en vivo
export const FECHA_INICIO_NOVIAZGO = '2025-10-03T00:00:00';

export const FECHAS_IMPORTANTES: FechaImportante[] = [
  {
    id: 1,
    fecha: '14 de Agosto, 2025',
    fechaIso: '2025-08-14',
    titulo: 'La expo de Van Gogh en el Mall Plaza',
    descripcion: 'Aún no éramos nada pero ya estaba muy ilusionado de estar contigo. Fuiste con tus amigas y conmigo; yo me hice un poco a un lado y pensaste que me habías espantado, pero no... estaba, estoy y seguiré enamorado de ti.',
    icono: 'palette',
    destacada: true,
  },
  {
    id: 2,
    fecha: '16 de Septiembre, 2025',
    fechaIso: '2025-09-16',
    titulo: 'El mensaje que lo inició todo por WhatsApp',
    descripcion: 'Te escribí un pequeño testamento donde te abrí mi corazón con sinceridad, y tú me respondiste proponiendo vernos al día siguiente para conversar en persona. El mensaje que cambió nuestras vidas.',
    icono: 'message',
    destacada: true,
  },
  {
    id: 3,
    fecha: '17 de Septiembre, 2025',
    fechaIso: '2025-09-17',
    titulo: 'Nuestra conversación en persona & darnos una oportunidad',
    descripcion: 'Nos vimos cara a cara. Estaba con mil nervios (¡hasta te comiste mi leche de tigre!), pero esa charla sincera nos llevó a decidir darnos una oportunidad que hoy es lo más lindo que tengo.',
    icono: 'users',
    destacada: true,
  },
  {
    id: 4,
    fecha: '19 de Septiembre, 2025',
    fechaIso: '2025-09-19',
    titulo: 'Tarde de cine y tus flores amarillas',
    descripcion: 'Una tarde hermosa: fuimos al cine juntos y, justo al salir de la función, te entregué tus flores amarillas para ver esa sonrisa que me desarma.',
    icono: 'flower',
    destacada: true,
  },
  {
    id: 5,
    fecha: '3 de Octubre, 2025',
    fechaIso: '2025-10-03',
    titulo: 'Nuestro primer día oficial de enamorados',
    descripcion: 'El día en que empezó formalmente nuestra aventura juntos. El sí más maravilloso de mi vida y la fecha que marca nuestro aniversario.',
    icono: 'heart',
    destacada: true,
  },
  {
    id: 6,
    fecha: '3 de Octubre, 2025',
    fechaIso: '2025-10-03',
    titulo: 'Nuestra primera vez juntos',
    descripcion: 'Un momento único de intimidad, entrega, ternura y complicidad absoluta donde el mundo entero se redujo a nosotros dos.',
    icono: 'flame',
  },
  {
    id: 7,
    fecha: '15 de Noviembre, 2025',
    fechaIso: '2025-11-15',
    titulo: 'Hablar con tus padres para salir formalmente',
    descripcion: 'Con nervios pero con la firme convicción de que por ti vale la pena cada paso, demostrando con respeto lo mucho que te valoro y quiero.',
    icono: 'users',
  },
  {
    id: 8,
    fecha: '29 de Enero, 2026',
    fechaIso: '2026-01-29',
    titulo: 'Mi primer "Te amo"',
    descripcion: 'El momento en que esas dos palabras salieron del pecho con toda la verdad del mundo. Porque te amaba, te amo y te seguiré amando.',
    icono: 'sparkles',
    destacada: true,
  },
  {
    id: 9,
    fecha: '27 de Mayo, 2026',
    fechaIso: '2026-05-27',
    titulo: 'Entrega de mi Grado de Bachiller junto a ti',
    descripcion: 'Cuando me dieron mi bachiller y estuviste ahí con toda mi familia. Te quise ahí porque eres parte de mi familia y porque era de los primeros grandes logros en los que estarías a mi lado.',
    icono: 'graduation',
    destacada: true,
  },
];
