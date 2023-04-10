data = {
    products: [
        {
            nombre: 'Shampoo Kerastase',
            cover: '/images/products/shampoo.jpg',
            descripcion: 'Shampoo Kerastase super hidratante',
            fechacarga: '05/02/2023',
            id: 1,
        },
        {
            nombre: 'Labial Dior',
            cover: '/images/products/labialdior.webp',
            descripcion: 'Labial Dior rojo humectante',
            fechacarga: '07/02/2023',
            id: 2,
        },
        {
            nombre: 'Mascara Lancome',
            cover: '/images/products/mascaralancome.jpg',
            descripcion: 'Máscara Lancome grandiosa',
            fechacarga: '09/02/2023',
            id: 3,
        },
        {
            nombre: 'Acondicionador Kerastase',
            cover: '/images/products/acondicionador.jpg',
            descripcion: 'Acondicionador Kerastase super hidratante',
            fechacarga: '11/03/2023',
            id: 4,
        },
    ],
    comments: [
        {
            nombreusuario:'emagondell',
            texto: '¿Tienen stock disponible?',
            cover: '/images/users/ema.jpeg',
            id: 1
        },
        {
            nombreusuario:'julietagomez',
            texto: '¿Tienen envíos a todo el país?',
            cover: '/images/users/juli.png',
            id: 2
        },
        {
            nombreusuario:'valenkolek',
            texto: '¿Tienen envío gratis?',
            cover: '/images/users/valen.png',
            id: 3
        },
        {
            nombreusuario:'juanneira',
            texto: '¿Tienen cuotas sin interes?',
            cover: '/images/users/juan.jpeg',
            id: 3
        },
        {
            nombreusuario:'pilarmedico',
            texto: '¿El producto es original?',
            cover: '/images/users/pili.jpeg',
            id: 3
        }
    ],
    user: {
        email: 'julivalenema@gmail.com',
        usuario: 'julivalenema',
        contraseña: 'trabajointegrador',
        dni: '28630542',
        foto: '/images/users/fotoperfil.jpg'
    }
}

module.exports = data;