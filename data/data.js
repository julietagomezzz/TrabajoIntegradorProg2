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
            nombresuario:'emagondell',
            texto: '¿Tienen stock disponible?',
            cover: '/public/images/users/ema.jpg',
            id: 1
        },
        {
            nombresuario:'julietagomez',
            texto: '¿Tienen envíos a todo el país?',
            cover: '/public/images/users/juli.png',
            id: 2
        },
        {
            nombresuario:'valenkolek',
            texto: '¿Tienen envío gratis?',
            cover: '/public/images/users/valen.png',
            id: 3
        },
        {
            nombresuario:'juanneira',
            texto: '¿Tienen cuotas sin interes?',
            cover: '/public/images/users/juan.jpeg',
            id: 3
        },
        {
            nombresuario:'pilarmedico',
            texto: '¿El producto es original?',
            cover: '/public/images/users/pili.jpeg',
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