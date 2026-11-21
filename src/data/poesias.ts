/**
 * =========================================================================
 * ARCHIVO DE TEXTOS, POESÍAS Y CARTAS
 * =========================================================================
 * Puedes modificar los textos o agregar más cuando quieras.
 */

export interface PoemaAcrostico {
  titulo: string;
  subtitulo: string;
  lineas: string[];
  mensajeOculto: string; // TE AMO MI MARI HERMOSA
}

export interface CartaAmor {
  titulo: string;
  fecha?: string;
  contenido: string;
  firma: string;
}

export interface PoemaCorto {
  titulo: string;
  versos: string[];
  tema: string;
}

export interface FragmentoRecuerdo {
  id: number;
  titulo: string;
  momento: string;
  texto: string;
}

// 1. Poema de la Promesa
export const POEMA_PROMESA: PoemaCorto = {
  titulo: 'Algún día tomaré tu mano',
  tema: 'Nuestra Promesa',
  versos: [
    'Algún día tomaré tu mano',
    'y daré el sí más importante de mi vida',
    'sabiendo que nada fue en vano',
    'porque estaré siempre con mi compañía preferida.',
  ],
};

// 2. Carta de Agradecimiento y Futuro
export const CARTA_FUTURO: CartaAmor = {
  titulo: 'La chica más importante de mi vida',
  fecha: 'Siempre en mi corazón',
  contenido: `Gracias por darme el amor que me das, soy tan feliz por estar a tu lado, por cada comida, cada "conversación", por cada caricia, cada te amo, cada detalle.

Eres la chica más importante de mi vida y siempre será así, porque algún día aparte de ser mi esposa, serás la madre de mis hijos. <3`,
  firma: 'Tuyo por siempre',
};

// 3. Acróstico Especial (TE AMO MI MARI HERMOSA)
export const ACROSTICO_MARI: PoemaAcrostico = {
  titulo: 'Un mensaje en cada línea',
  subtitulo: 'Lee con atención la primera letra de cada verso...',
  mensajeOculto: 'TE AMO MI MARI HERMOSA',
  lineas: [
    'Te escribo esto porque',
    'Estoy muy feliz de tenerte a mi lado,',
    'A pesar de los problemas valoro',
    'Mucho tu decisión de quedarte, vales',
    'Oro, y me alegra que hayas llegado a',
    'Mi vida, a revolucionarla con tu energía, tu',
    'Inmenso amor, sencillez, y',
    'Muchas virtudes más que',
    'Aparte de hacerte una gran persona, hacen',
    'Regocijarme de amor por ti.',
    'Incluso en los días normales o malos, yo',
    'He tratado de darte y mostrarte todo',
    'El amor que te tengo, porque el amor es como una',
    'Rosa o cualquier flor, hay que',
    'Mojarla todos los días para que conserve su',
    'Olor y lucidez, quiero que',
    'Sepas que no te dejaré y algún día',
    'Adoraré decirle al mundo que eres mi esposa <3.',
  ],
};

// 4. Fragmentos de Momentos Inolvidables
export const FRAGMENTOS_RECUERDOS: FragmentoRecuerdo[] = [
  {
    id: 1,
    titulo: 'Aquel primer almuerzo juntos',
    momento: 'El día que volvimos a hablar en persona',
    texto: 'Aún recuerdo el primer día que volvimos a hablar en persona: estaba tan nervioso que no pude comer nada, y tú en cambio te comiste mi leche de tigre. Son recuerdos que quedarán en mi memoria para siempre porque ese fue el comienzo de nuestra historia sin final.',
  },
  {
    id: 2,
    titulo: 'Frente a tus padres',
    momento: 'Nuestra valentía y compromiso',
    texto: 'Aún recuerdo lo nervioso que estaba cuando me paré frente a tus padres y les dije lo que sentía y pretendía contigo. No me arrepiento ni me arrepentiré de ello, porque tomé la mejor decisión de mi vida al afrontar tal desafío con un poco de miedo pero con toda la seguridad de hacerlo por ti.',
  },
  {
    id: 3,
    titulo: 'Nuestra primera entrega',
    momento: 'Intimidad y complicidad absoluta',
    texto: 'Jamás olvidaré la primera vez que lo hicimos, porque se sintió tan increíble que no podía creer que estaba pasando. Ahora ya tenemos mucho recorrido en ello, pero cada vez que sucede yo soy un alma, cuerpo y corazón feliz.',
  },
];
