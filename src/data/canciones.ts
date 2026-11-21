/**
 * =========================================================================
 * ARCHIVO DE NUESTRAS CANCIONES JUNTOS
 * =========================================================================
 */

export interface Cancion {
  id: number;
  titulo: string;
  artista: string;
  dedicatoria: string;
  linkYouTube: string;
  youtubeId: string;
  linkSpotify?: string;
}

export const LISTA_DE_CANCIONES: Cancion[] = [
  {
    id: 1,
    titulo: 'Corazón',
    artista: 'Danny Ocean',
    dedicatoria: 'Porque tu corazón y el mío laten en la misma frecuencia desde que te conocí.',
    linkYouTube: 'https://www.youtube.com/watch?v=cTn_NRZRIa8',
    youtubeId: 'cTn_NRZRIa8',
    linkSpotify: 'https://open.spotify.com/search/danny%20ocean%20corazon',
  },
  {
    id: 2,
    titulo: 'Por ti',
    artista: '3AM',
    dedicatoria: 'Por ti daría todo, porque contigo cada noche y cada despertar tienen sentido.',
    linkYouTube: 'https://www.youtube.com/watch?v=yv_VOxdd8ac',
    youtubeId: 'yv_VOxdd8ac',
    linkSpotify: 'https://open.spotify.com/search/3am%20por%20ti',
  },
  {
    id: 3,
    titulo: 'No se va',
    artista: 'Morat',
    dedicatoria: 'Esa canción que cantamos juntos y que describe cómo tu recuerdo y tu presencia nunca se van de mi mente.',
    linkYouTube: 'https://www.youtube.com/watch?v=USDX0X-d588',
    youtubeId: 'USDX0X-d588',
    linkSpotify: 'https://open.spotify.com/search/morat%20no%20se%20va',
  },
  {
    id: 4,
    titulo: 'Perfect',
    artista: 'Ed Sheeran',
    dedicatoria: 'Para recordarte que cada curva, cada gesto y cada detalle tuyo son sencillamente perfectos para mí.',
    linkYouTube: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    youtubeId: '2Vv-BfVoq4g',
    linkSpotify: 'https://open.spotify.com/search/ed%20sheeran%20perfect',
  },
  {
    id: 5,
    titulo: 'Enséñame a bailar',
    artista: 'Bad Bunny',
    dedicatoria: 'Nuestras risas, bailar contigo aunque no sepamos los pasos y sentirte cerca.',
    linkYouTube: 'https://www.youtube.com/watch?v=eopPKANmKyg',
    youtubeId: 'eopPKANmKyg',
    linkSpotify: 'https://open.spotify.com/search/bad%20bunny%20enseñame%20a%20bailar',
  },
  {
    id: 6,
    titulo: 'La correcta',
    artista: 'Morat & Nabález',
    dedicatoria: 'Porque entre millones de personas en el mundo, tú eres la persona correcta para mí.',
    linkYouTube: 'https://www.youtube.com/watch?v=JxxUmYLWnig',
    youtubeId: 'JxxUmYLWnig',
    linkSpotify: 'https://open.spotify.com/search/morat%20la%20correcta',
  },
  {
    id: 7,
    titulo: 'Quiero verte sonreír',
    artista: 'Soy Luna / Disney',
    dedicatoria: 'Verte sonreír es mi motivo favorito de cada día. Nada se compara con tu alegría.',
    linkYouTube: 'https://www.youtube.com/watch?v=rMMqQRwJ1ZE',
    youtubeId: 'rMMqQRwJ1ZE',
  },
  {
    id: 8,
    titulo: 'Vivo por ti',
    artista: 'Zarcort & Town',
    dedicatoria: 'Una canción llena de sentimiento y nostalgia que nos une con fuerza.',
    linkYouTube: 'https://www.youtube.com/watch?v=u3JbMHswQqI',
    youtubeId: 'u3JbMHswQqI',
  },
  {
    id: 9,
    titulo: 'Just The Way You Are',
    artista: 'Bruno Mars',
    dedicatoria: 'Cuando te miro a la cara, no hay ni una sola cosa que quisiera cambiar en ti.',
    linkYouTube: 'https://www.youtube.com/watch?v=LjhCEhWiKXk',
    youtubeId: 'LjhCEhWiKXk',
  },
  {
    id: 10,
    titulo: 'I Love You So',
    artista: 'The Walters',
    dedicatoria: 'Ese toque indie y suave en inglés que te encanta escuchar con audífonos recostada en mi pecho.',
    linkYouTube: 'https://www.youtube.com/watch?v=NwFVSclD_uc',
    youtubeId: 'NwFVSclD_uc',
  },
];
