const data = {
    categories: [
        {
            id: 1,
            engName: 'Activewear',
            category_class: 'clothing'
        },
        {
            id: 2,
            engName: 'Blazers',
            category_class: 'clothing'
        },
        {
            id: 3,
            engName: 'Coats and Jackets',
            category_class: 'clothing'
        },
        {
            id: 4,
            engName: 'Dresses',
            category_class: 'clothing'
        },
        {
            id: 5,
            engName: 'Facemasks',
            category_class: 'accessories'
        },
        {
            id: 6,
            engName: 'Hair Accessories and Hats',
            category_class: 'accessories'
        },
    ],

    productImages: [
        // (product_id, product_image_url, swatch_image_url, color_english_name, color_description_id, primary_image_for_color)

        {
            id: 1,
            product_id: 12,
            product_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg',
            swatch_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg',
            color_english_name: 'Black',
            color_description_id: 1,
            primary_image_for_color: true,
            imgAlt: 'Dahlia dress'
        },
        {
            id: 2,
            product_id: 12,
            product_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/psp0vyhyzbkgjm5tfgiu.jpg',
            swatch_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg',
            color_english_name: 'Black',
            color_description_id: 1,
            primary_image_for_color: false,
            imgAlt: 'Dahlia dress'
        },
        {
            id: 3,
            product_id: 12,
            product_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rfzie2dfn8odsxr7hkvv.jpg',
            swatch_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg',
            color_english_name: 'Black',
            color_description_id: 1,
            primary_image_for_color: false,
            imgAlt: 'Dahlia dress'
        },
        {
            id: 4,
            product_id: 12,
            product_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/znn2iln0c0btyawu2sxc.jpg',
            swatch_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg',
            color_english_name: 'Paris est une fete print',
            color_description_id: 12,
            primary_image_for_color: true,
            imgAlt: 'Dahlia dress'
        },
        {
            id: 5,
            product_id: 12,
            product_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rutqupslvog7nuarbge9.jpg',
            swatch_image_url: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg',
            color_english_name: 'Paris est une fete print',
            color_description_id: 12,
            primary_image_for_color: false,
            imgAlt: 'Dahlia dress'
        }
    ],
    
    productList: [
        {
            id: 1,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://res.cloudinary.com/dwunpjzlo/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_1514,q_auto:best,w_1080/v1591191901/website/product/y8saioc8gylnginsrz7q.jpg',
            imgAlt: 'Jennie Dress - Short-sleeved maxi dress',
            brand: 'Sézane',
            productTitle: 'Jennie Dress',
            price: 210
        },
        {
            id: 2,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0767/5207/products/0039_RENATA_DRESS_MARSALA_2237_web_1186x1186.jpg?v=1594246043',
            imgAlt: 'Renata Dress in Willow Marsala silk',
            brand: 'Amour Vert',
            productTitle: 'Renata Dress',
            price: 228
        },
        {
            id: 3,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://res.cloudinary.com/dwunpjzlo/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_1514,q_auto:best,w_1080/v1591191901/website/product/y8saioc8gylnginsrz7q.jpg',
            imgAlt: 'Jennie Dress - Short-sleeved maxi dress',
            brand: 'Sézane',
            productTitle: 'Jennie Dress',
            price: 210
        },
        {
            id: 4,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0767/5207/products/0039_RENATA_DRESS_MARSALA_2237_web_1186x1186.jpg?v=1594246043',
            imgAlt: 'Renata Dress in Willow Marsala silk',
            brand: 'Amour Vert',
            productTitle: 'Renata Dress',
            price: 228
        },
        {
            id: 5,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://res.cloudinary.com/dwunpjzlo/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_1514,q_auto:best,w_1080/v1591191901/website/product/y8saioc8gylnginsrz7q.jpg',
            imgAlt: 'Jennie Dress - Short-sleeved maxi dress',
            brand: 'Sézane',
            productTitle: 'Jennie Dress',
            price: 210
        },
        {
            id: 6,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0767/5207/products/0039_RENATA_DRESS_MARSALA_2237_web_1186x1186.jpg?v=1594246043',
            imgAlt: 'Renata Dress in Willow Marsala silk',
            brand: 'Amour Vert',
            productTitle: 'Renata Dress',
            price: 228
        },
        {
            id: 7,
            category: 'Facemasks',
            categoryId: 5,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0267/6991/5951/products/DC_PS_MASK-2_540x.jpg?v=1607179687',
            imgAlt: 'black facemask',
            brand: 'Urban Native Era',
            productTitle: 'Diverse Culture Mask',
            price: 14.99
        },
        {
            id: 8,
            category: 'Facemasks',
            categoryId: 5,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0267/6991/5951/products/FC_BLACK_MASK_COVER_PS_540x.jpg?v=1605332732',
            imgAlt: 'black facemask',
            brand: 'Urban Native Era',
            productTitle: "'You Are On Native Land' Mask",
            price: 14.99
        },
        {
            id: 9,
            category: 'Facemasks',
            categoryId: 5,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0267/6991/5951/products/FC_BLACK_MASK_COVER_PS_540x.jpg?v=1605332732',
            imgAlt: 'black facemask',
            brand: 'Urban Native Era',
            productTitle: "'You Are On Native Land' Mask",
            price: 14.99
        },
        {
            id: 10,
            category: 'Facemasks',
            categoryId: 5,
            pathToImg: 'https://cdn.shopify.com/s/files/1/0267/6991/5951/products/DC_PS_MASK-2_540x.jpg?v=1607179687',
            imgAlt: 'black facemask',
            brand: 'Urban Native Era',
            productTitle: 'Diverse Culture Mask',
            price: 14.99
        },
        {
            id: 11,
            category: 'Facemasks',
            categoryId: 5,
            pathToImg: 'https://res.cloudinary.com/dwunpjzlo/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_1514,q_auto:best,w_1080/v1591191901/website/product/y8saioc8gylnginsrz7q.jpg',
            imgAlt: 'Jennie Dress - Short-sleeved maxi dress',
            brand: 'Sézane',
            productTitle: 'Jennie Dress',
            price: 210
        },
        {
            id: 12,
            category: 'Dresses',
            categoryId: 4,
            pathToImg: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg',
            imgAlt: 'Sezane Dahlia Dress',
            brand: 'Sezane',
            productTitle: 'Dahlia Dress',
            price: 200
        }
    ]
}

export default data