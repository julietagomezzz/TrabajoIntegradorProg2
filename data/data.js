data = {
    products: [
        {
            nombre: 'Shampoo Kerastase',
            cover: '/public/images/products/shampoo.jpg',
            descripcion: 'Shampoo Kerastase super hidratante',
            fechacarga: '05/02/2023',
            id: 1,
        },
        {
            nombre: 'Labial Dior',
            cover: '/public/images/products/labialdior.jpp',
            descripcion: 'Labial Dior rojo humectante',
            fechacarga: '07/02/2023',
            id: 2,
        },
        {
            nombre: 'Mascara Lancome',
            cover: '/public/images/products/mascaralancome.jpp',
            descripcion: 'Máscara Lancome grandiosa',
            fechacarga: '09/02/2023',
            id: 3,
        },
        {
            nombre: 'Acondicionador Kerastase',
            cover: '/public/images/products/acondicionador.jpp',
            descripcion: 'Acondicionador Kerastase super hidratante',
            fechacarga: '11/03/2023',
            id: 4,
        },
        {
            nombre: 'Desmaquillante Lancome',
            cover: '/public/images/products/desmaquillante.jpp',
            descripcion: 'Desmaquillante Lancome super suave',
            fechacarga: '13/03/2023',
            id: 5,
        }
    ],
    coments: [
        {
            nombresuario:'emagondell',
            texto: '¿Tienen stock disponible?',
            cover: '/public/images/users/ema.jpeg',
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
        foto: '/public/images/users/fotoperfil.avif'
    }
}

module.exports = data;