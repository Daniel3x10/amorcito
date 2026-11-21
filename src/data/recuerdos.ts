export interface RecuerdoFoto {
  id: number;
  archivo: string;
  fecha: string;
  titulo: string;
  nota?: string;
  favorita?: boolean;
}

export const FOTOS_RECUERDOS: RecuerdoFoto[] = [
  { id: 1, archivo: 'IMG-20251229-WA0040.jpg', fecha: '29 de Diciembre, 2025', titulo: 'Cerrando el año juntos', favorita: true },
  { id: 2, archivo: 'IMG-20260107-WA0022.jpg', fecha: '7 de Enero, 2026', titulo: 'Primeros días del año' },
  { id: 3, archivo: 'IMG-20260203-WA0152.jpg', fecha: '3 de Febrero, 2026', titulo: 'Tardes de risas' },
  { id: 4, archivo: 'IMG-20260211-WA0232.jpg', fecha: '11 de Febrero, 2026', titulo: 'Mes del amor' },
  { id: 5, archivo: 'IMG-20260314-WA0103.jpg', fecha: '14 de Marzo, 2026', titulo: 'Un día especial' },
  { id: 6, archivo: 'IMG-20260504-WA0008.jpg', fecha: '4 de Mayo, 2026', titulo: 'Tu sonrisa' },
  { id: 7, archivo: 'IMG_20260527_225828_483.jpg', fecha: '27 de Mayo, 2026', titulo: 'Noche bonita' },
  { id: 8, archivo: 'IMG-20260721-WA0142.jpg', fecha: '21 de Julio, 2026', titulo: 'Recuerdos de julio', favorita: true },
  { id: 9, archivo: 'IMG20260808181639.jpg', fecha: '8 de Agosto, 2026', titulo: 'Momentos inolvidables' },
  { id: 10, archivo: 'IMG20260812200301.jpg', fecha: '12 de Agosto, 2026', titulo: 'Noches mágicas' },
  { id: 11, archivo: 'IMG20260812215503.jpg', fecha: '12 de Agosto, 2026', titulo: 'Risas que curan todo' },
  { id: 12, archivo: 'IMG20260819212746.jpg', fecha: '19 de Agosto, 2026', titulo: 'Siempre juntos' },
  { id: 13, archivo: 'IMG20260823204235.jpg', fecha: '23 de Agosto, 2026', titulo: 'Nuestra complicidad' },
  { id: 14, archivo: 'IMG20260826210118.jpg', fecha: '26 de Agosto, 2026', titulo: 'Tardes a tu lado' },
  { id: 15, archivo: 'IMG20260830195110.jpg', fecha: '30 de Agosto, 2026', titulo: 'Miradas que dicen todo', favorita: true },
  { id: 16, archivo: 'IMG20260901132311.jpg', fecha: '1 de Septiembre, 2026', titulo: 'Nuevo mes, mismo amor' },
  { id: 17, archivo: 'IMG20260903195245.jpg', fecha: '3 de Septiembre, 2026', titulo: 'La sonrisa más linda' },
  { id: 18, archivo: 'IMG20260903202037.jpg', fecha: '3 de Septiembre, 2026', titulo: 'Un café y tú' },
  { id: 19, archivo: 'IMG20260909195910.jpg', fecha: '9 de Septiembre, 2026', titulo: 'Caminando de la mano' },
  { id: 20, archivo: 'IMG20260919202601.jpg', fecha: '19 de Septiembre, 2026', titulo: 'Instantes eternos' },
  { id: 21, archivo: 'IMG20260920105217.jpg', fecha: '20 de Septiembre, 2026', titulo: 'Mañanas felices' },
  { id: 22, archivo: 'IMG20260923150504.jpg', fecha: '23 de Septiembre, 2026', titulo: 'Compartiendo sueños' },
  { id: 23, archivo: 'IMG20260927180347.jpg', fecha: '27 de Septiembre, 2026', titulo: 'Atardecer contigo' },
  { id: 24, archivo: 'IMG20261002214824.jpg', fecha: '2 de Octubre, 2026', titulo: 'Noche especial', favorita: true },
  { id: 25, archivo: 'IMG20261002214849.jpg', fecha: '2 de Octubre, 2026', titulo: 'Amor en cada foto' },
  { id: 26, archivo: 'IMG20261003204148.jpg', fecha: '3 de Octubre, 2026', titulo: 'Recuerdos de otoño' },
  { id: 27, archivo: 'IMG20261003204203.jpg', fecha: '3 de Octubre, 2026', titulo: 'Tu felicidad es la mía' },
  { id: 28, archivo: 'IMG20261007201637.jpg', fecha: '7 de Octubre, 2026', titulo: 'Abrazo favorito' },
  { id: 29, archivo: 'IMG20261007202347.jpg', fecha: '7 de Octubre, 2026', titulo: 'Detalles que enamoran' },
  { id: 30, archivo: 'IMG20261007202402.jpg', fecha: '7 de Octubre, 2026', titulo: 'Sin filtros, con amor' },
  { id: 31, archivo: 'IMG20261020211243.jpg', fecha: '20 de Octubre, 2026', titulo: 'Paseos de noche' },
  { id: 32, archivo: 'IMG20261024180035.jpg', fecha: '24 de Octubre, 2026', titulo: 'Cita perfecta' },
  { id: 33, archivo: 'IMG20261024204324.jpg', fecha: '24 de Octubre, 2026', titulo: 'Mi lugar favorito es contigo' },
  { id: 34, archivo: 'IMG20261027194318.jpg', fecha: '27 de Octubre, 2026', titulo: 'Siempre en mi mente' },
  { id: 35, archivo: 'IMG20261031201158.jpg', fecha: '31 de Octubre, 2026', titulo: 'Noche de brujas, noche de amor' },
  { id: 36, archivo: 'IMG20261031201215.jpg', fecha: '31 de Octubre, 2026', titulo: 'Sonriendo juntos' },
  { id: 37, archivo: 'IMG20261103214300.jpg', fecha: '3 de Noviembre, 2026', titulo: 'Noviembre a tu lado' },
  { id: 38, archivo: 'IMG20261103214309.jpg', fecha: '3 de Noviembre, 2026', titulo: 'Mirada brillante' },
  { id: 39, archivo: 'IMG20261103214439_BURST000_COVER.jpg', fecha: '3 de Noviembre, 2026', titulo: 'Ráfaga de besos', favorita: true },
  { id: 40, archivo: 'IMG20261110195005.jpg', fecha: '10 de Noviembre, 2026', titulo: 'Mi persona favorita' },
  { id: 41, archivo: 'IMG20261113201902.jpg', fecha: '13 de Noviembre, 2026', titulo: 'Risas inolvidables' },
  { id: 42, archivo: 'IMG20261113201932.jpg', fecha: '13 de Noviembre, 2026', titulo: 'Un amor que crece' },
  { id: 43, archivo: 'IMG20261113214856.jpg', fecha: '13 de Noviembre, 2026', titulo: 'Por mil fotos más juntos', favorita: true },
  { id: 44, archivo: 'b754820f040748bcbbd50b63152145ba.jpg', fecha: 'Noviembre, 2026', titulo: 'Tú y yo, siempre' },
];
