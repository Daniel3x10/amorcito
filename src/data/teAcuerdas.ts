/**
 * =========================================================================
 * ARCHIVO DE ANÉCDOTAS: ¿TE ACUERDAS?
 * =========================================================================
 * 17 momentos inolvidables de nuestra historia juntos.
 */

export interface Anecdota {
  id: number;
  titulo: string;
  categoria: 'Primeras Veces' | 'Citas & Comidas' | 'Aventuras' | 'Familia' | 'Complicidad';
  texto: string;
  icono: string;
  lugarOContexto?: string;
}

export const ANECDOTAS_TE_ACUERDAS: Anecdota[] = [
  {
    id: 1,
    titulo: 'Recortando figuritas en tu biblioteca',
    categoria: 'Complicidad',
    icono: 'Scissors',
    lugarOContexto: 'Biblioteca de tu facultad (Educación Inicial)',
    texto: '¿Te acuerdas cuando fui a la biblioteca de tu facultad y te ayudé a recortar figuritas? Sé que no soy muy bueno con eso, pero para lo que tú me pidas, yo siempre voy a estar.',
  },
  {
    id: 2,
    titulo: 'En la playa en mi cumpleaños',
    categoria: 'Primeras Veces',
    icono: 'Waves',
    lugarOContexto: 'La playa en mi cumple & primer día de enamorados',
    texto: '¿Te acuerdas cuando estábamos en la playa en mi cumpleaños y en nuestro primer día de enamorados y de la nada me diste ese sí que terminó en tú y yo entre sábanas haciendo lo que nunca habíamos hecho y que a partir de ese momento lo haríamos toda la vida?',
  },
  {
    id: 3,
    titulo: 'Caminando, caminando... encontramos Magú',
    categoria: 'Citas & Comidas',
    icono: 'Coffee',
    lugarOContexto: 'Paseo espontáneo',
    texto: '¿Te acuerdas cuando caminando caminando encontramos Magú? Esos descubrimientos sin planear son los que más me gustan a tu lado.',
  },
  {
    id: 4,
    titulo: 'Atardecer en California & Soy Luna',
    categoria: 'Aventuras',
    icono: 'Sunset',
    lugarOContexto: 'Parque en California',
    texto: '¿Te acuerdas cuando paseamos por California y nos sentamos en un parque a ver un atardecer hermoso? Conversar contigo y ver el atardecer hicieron de esa tarde algo perfecto. Ese mismo día caminamos cantando canciones de Soy Luna.',
  },
  {
    id: 5,
    titulo: 'Mi primer "Te amo" en la playa',
    categoria: 'Primeras Veces',
    icono: 'Heart',
    lugarOContexto: 'Sorpresa en la playa',
    texto: '¿Te acuerdas cuando te dije por primera vez que te amaba? Tardé, sí, hubieron problemas por eso hasta antes de eso, pero no me arrepiento nunca de habértelo dicho, porque lo siento. Recuerdo que fue en la playa, te sorprendí y fuiste muy feliz.',
  },
  {
    id: 6,
    titulo: 'Flores amarillas saliendo del cine',
    categoria: 'Complicidad',
    icono: 'Flower2',
    lugarOContexto: 'Saliendo de la función',
    texto: '¿Te acuerdas cuando saliendo del cine saqué de mi mochila unas flores amarillas? No te lo esperabas para nada y ver tu carita iluminarse hizo que el regalo fuera más bonito aún.',
  },
  {
    id: 7,
    titulo: 'Cuidando la casa de tu tía',
    categoria: 'Complicidad',
    icono: 'Home',
    lugarOContexto: 'Casa de tu tía',
    texto: '¿Recuerdas cuando íbamos a cuidar la casa de tu tía? Fuimos muy pícaros pero pasamos momentos inolvidables que jamás voy a olvidar.',
  },
  {
    id: 8,
    titulo: 'Medianoche en la Plaza de Armas de Trujillo',
    categoria: 'Aventuras',
    icono: 'Moon',
    lugarOContexto: 'Plaza de Armas de Trujillo a medianoche',
    texto: '¿Te acuerdas cuando nos encontramos a medianoche en la Plaza de Armas de Trujillo cuando salías del trabajo y yo del evento? Ni tu familia ni la mía sabían que estábamos allí, pero fue tan bonito la caminata y estar contigo en ese momento ❤️.',
  },
  {
    id: 9,
    titulo: 'Cuando conociste a mi mami en el mirador',
    categoria: 'Familia',
    icono: 'Users',
    lugarOContexto: 'El Mirador',
    texto: '¿Te acuerdas cuando conociste a mi mami? Fue en el mirador, no fue la mejor forma pero pasó, y ahora me pregunta por ti todos los días y habla de ti a diario. Te adora ❤️.',
  },
  {
    id: 10,
    titulo: 'D\'Luchos, el Chapulín Colorado y el baño',
    categoria: 'Citas & Comidas',
    icono: 'Utensils',
    lugarOContexto: 'D\'Luchos',
    texto: '¿Te acuerdas cuando fuimos a D\'Luchos y miramos el Chapulín Colorado mientras comíamos pollo a la brasa? Recuerdo que me sentí como un niño comiendo y mirando eso, y después me demoré un montón en el baño jejeje.',
  },
  {
    id: 11,
    titulo: 'Pizza familiar para dos en El Hornito',
    categoria: 'Citas & Comidas',
    icono: 'Pizza',
    lugarOContexto: 'El Hornito (Celebrando nuestro mes)',
    texto: '¿Te acuerdas cuando fuimos a El Hornito y pedimos una pizza familiar solo para los dos? Era nuestro mes y valió totalmente la pena. Tu compañía fue increíble y amo cómo comemos juntos.',
  },
  {
    id: 12,
    titulo: 'Al cine a ver a BTS con tu hermana',
    categoria: 'Aventuras',
    icono: 'Film',
    lugarOContexto: 'Cine - Concierto de BTS',
    texto: '¿Te acuerdas cuando fuimos al cine a ver el concierto de BTS con tu hermana? Ella y tú estuvieron tan felices por ir a ver a esa banda, y yo era el más feliz viéndote disfrutar ese momento 💜.',
  },
  {
    id: 13,
    titulo: 'Tu sorpresa por mi cumpleaños',
    categoria: 'Complicidad',
    icono: 'Gift',
    lugarOContexto: 'Sorpresa de cumpleaños',
    texto: '¿Te acuerdas cuando hiciste una sorpresa por mi cumpleaños? FUE INCREÍBLE Y LO AMÉ. Por más que al inicio me mostré un poco nervioso, nadie había hecho algo así por mí y eso lo hizo infinitamente especial.',
  },
  {
    id: 14,
    titulo: 'Primera pelea en el Parque de las Parejas y Magú',
    categoria: 'Complicidad',
    icono: 'Sparkles',
    lugarOContexto: 'Parque de las Parejas & Magú',
    texto: '¿Te acuerdas cuando tuvimos una de nuestras primeras peleas por el Parque de las Parejas? Y luego para amenizar y solucionar el problema nos fuimos a Magú jejeje.',
  },
  {
    id: 15,
    titulo: 'Nuestro primer beso',
    categoria: 'Primeras Veces',
    icono: 'HeartHandshake',
    lugarOContexto: 'De besito en el cachete a los labios',
    texto: '¿Te acuerdas de nuestro primer beso? Estábamos de a besitos en el cachete hasta que rozaste todos mis labios hasta que yo te besé jejeje. Inolvidable.',
  },
  {
    id: 16,
    titulo: 'Cena en El Toro Rojo con tu familia',
    categoria: 'Familia',
    icono: 'UtensilsCrossed',
    lugarOContexto: 'Restaurante El Toro Rojo',
    texto: '¿Recuerdas cuando fuimos a comer al Toro Rojo? Era la primera cena con tu familia. En ese momento no hablé mucho (también porque minutos antes había pedido permiso para cortejarte con todos los nervios), pero ahora ya con más confianza hablo más jeje. Quiero muchísimo a tu familia.',
  },
  {
    id: 17,
    titulo: 'La aventura en el Play Land Park',
    categoria: 'Aventuras',
    icono: 'Smile',
    lugarOContexto: 'Juegos mecánicos del Play Land Park',
    texto: '¿Recuerdas cuando fuimos al Play Land Park? Salí súper mareado y casi al borde de vomitar, pero me encantó haberlo pasado contigo. ¡Fue increíblemente divertido!',
  },
];
