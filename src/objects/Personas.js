import { v4 as uuidv4 } from 'uuid';
import img0 from '../img/test-img-1.jpg';
import img1 from '../img/test-img-2.jpg';
import img2 from '../img/test-img-3.jpg';
import img3 from '../img/test-img-4.jpg';
import img4 from '../img/test-img-1.jpg';

export const aurelio = {
    usuario: 'woltergg22',
    imagen: require('../img/imagen-aurelio-min.webp'),
    publicacion: {
        id: uuidv4(),
        fotos: [img0, img1, img2]
    },
    amigos: []
}

export const lujan = {
    usuario: 'mariaa.chocobar',
    imagen: require('../img/imagen-lujan-min.webp'),
    publicacion: {
        id: uuidv4(),
        fotos: [img0, img1, img2]
    }
}

export const ezequiel = {
    usuario: 'marmotagram',
    imagen: require('../img/imagen-ezequiel-min.webp')
}

export const timdessaint = {
    usuario: 'timdessaint',
    imagen: require('../img/imagen-timdessaint-min.webp')
}

export const araceli = {
    usuario: 'anahi.arts',
    imagen: require('../img/imagen-araceli-min.webp')
}

export const valentina = {
    usuario: 'valenfgallo',
    imagen: require('../img/imagen-valentina-min.webp')
}

export const valeria = {
    usuario: 'valeria.ramos.py',
    imagen: require('../img/imagen-valeria-min.webp')
}

export const facundo = {
    usuario: 'facu_ramirez10',
    imagen: require('../img/imagen-facundo-min.webp')
}

/* */

export const aurelio2 = {
    usuario: 'woltergg22',
    imagen: require('../img/imagen-aurelio-min.webp'),
    publicacion: [img0, img1, img2],
    amigos: []
}

export const lujan2 = {
    usuario: 'mariaa.chocobar',
    imagen: require('../img/imagen-lujan-min.webp')
}

export const ezequiel2 = {
    usuario: 'marmotagram',
    imagen: require('../img/imagen-ezequiel-min.webp')
}

export const timdessaint2 = {
    usuario: 'timdessaint',
    imagen: require('../img/imagen-timdessaint-min.webp')
}

export const araceli2 = {
    usuario: 'anahi.arts',
    imagen: require('../img/imagen-araceli-min.webp')
}

export const valentina2 = {
    usuario: 'valenfgallo',
    imagen: require('../img/imagen-valentina-min.webp')
}

export const valeria2 = {
    usuario: 'valeria.ramos.py',
    imagen: require('../img/imagen-valeria-min.webp')
}

export const facundo2 = {
    usuario: 'facu_ramirez10',
    imagen: require('../img/imagen-facundo-min.webp')
}

aurelio.amigos = [aurelio, lujan, ezequiel, timdessaint, araceli, valentina, valeria, facundo, aurelio2, lujan2, ezequiel2, timdessaint2, araceli2, valentina2]