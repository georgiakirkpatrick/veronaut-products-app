const data = {
  verbage: {
    principles: [
      {
        id: 1,
        title: "Good design", 
        description: "Clothing and accessories should be flattering, versatile, functional, and built to last.",
        longText: "Text",
        symbol: "times"
      },
      {
        id: 2,
        title: "Transparent",
        description: "Product listings should include information about who, where, and how products are manufactured throughout the supply chain.",
        longText: "Finding the right clothes to fit your style, budget, and body can be tricky.  Add in your ethical-production standards and it can be downright frustrating to find products that check all the boxes.  That's why we present product information in a way that feels like online shopping.  We think understanding the socioeconomic and environmental impacts of your purchase should be part of your shopping experience rather than an extra step.",
        symbol: 'tshirt'
      },
      {
        id: 3,
        title: "Ethical",
        description: "Clothing and accessories should be made in workplaces that prioritize employee safety, living wages, and freedom of association (the right to join a union).",
        longText: "",
        symbol: "handshake"
      },
      {
        id: 4,
        title: "Sustainable",
        description: "Fashion products should be made with renewable, non-polluting resources whenever possible.  Production should minimize waste.",
        longText: "We're not going to tell you which product to purchase or which brand to boycott.  What makes a garment's supply chain “sustainable” is not only a complex issue, it also depends on who you ask.  We want to help you make informed decisions by making it as easy as possible to find the facts.",
        symbol: 'leaf'
      }
    ]
  },

  placeholder: {
    brands: [
      {
        id: 1,
        english_name: "Mahershala",
        website: "",
        home_currency: 1,
        size_system: 1,
        approved_by_admin: true,
        created_at: ""
      }
    ],

    categories: [
      {
        id: 1,
        english_name: "Affogatto",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 2,
        english_name: "Blazers",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 3,
        english_name: "Coats and Jackets",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 4,
        english_name: "Dresses",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 5,
        english_name: "Facemasks",
        category_class: "accessories",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 6,
        english_name: "Hair Accessories and Hats",
        category_class: "accessories",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 7,
        english_name: "Jeans",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 8,
        english_name: "Jumpsuits",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 9,
        english_name: "Lingerie",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 10,
        english_name: "Pants",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 11,
        english_name: "Shoes",
        category_class: "shoes",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 12,
        english_name: "Skirts",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 13,
        english_name: "Socks and Tights",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 14,
        english_name: "Sweaters",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 15,
        english_name: "Swimwear",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      },
      {
        id: 16,
        english_name: "Tops",
        category_class: "clothing",
        featureImage: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg"
      }
    ],

    certifications: [
      {
        id: 1,
        english_name: "",
        website: "",
        approved_by_admin: true,
        created_at: ""
      }
    ],

    factories: [
      {
        id: 1,
        english_name: "",
        country: 1,
        website: "",
        notes: "",
        approved_by_admin: true,
        created_at: ""
      }
    ],

    images: [
      {
        id: 1,
        product_id: 1,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 2,
        product_id: 1,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/psp0vyhyzbkgjm5tfgiu.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 3,
        product_id: 1,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rfzie2dfn8odsxr7hkvv.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 4,
        product_id: 1,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/znn2iln0c0btyawu2sxc.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 5,
        product_id: 1,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rutqupslvog7nuarbge9.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 6,
        product_id: 2,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 7,
        product_id: 2,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/psp0vyhyzbkgjm5tfgiu.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 8,
        product_id: 2,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rfzie2dfn8odsxr7hkvv.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 9,
        product_id: 2,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/znn2iln0c0btyawu2sxc.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 10,
        product_id: 2,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rutqupslvog7nuarbge9.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 11,
        product_id: 3,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 12,
        product_id: 3,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/psp0vyhyzbkgjm5tfgiu.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 13,
        product_id: 3,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rfzie2dfn8odsxr7hkvv.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 14,
        product_id: 3,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/znn2iln0c0btyawu2sxc.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 15,
        product_id: 3,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rutqupslvog7nuarbge9.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 16,
        product_id: 12,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 17,
        product_id: 12,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/psp0vyhyzbkgjm5tfgiu.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 18,
        product_id: 12,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rfzie2dfn8odsxr7hkvv.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg",
        color_english_name: "Black",
        color_description_id: 1,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      },
      {
        id: 19,
        product_id: 12,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/znn2iln0c0btyawu2sxc.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: true,
        imgAlt: "Dahlia dress"
      },
      {
        id: 20,
        product_id: 12,
        product_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/rutqupslvog7nuarbge9.jpg",
        swatch_image_url: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg",
        color_english_name: "Paris est une fete print",
        color_description_id: 12,
        primary_image_for_color: false,
        imgAlt: "Dahlia dress"
      }
    ],
    
    products: [
      {
        id: 1,
        category: "Dresses",
        categoryId: 4,
        pathToImg: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        imgAlt: "Sezane Dahlia Dress",
        brand: "Sezane",
        productTitle: "Dahlia Dress",
        price: 200
      },
      {
        id: 2,
        category: "Dresses",
        categoryId: 4,
        pathToImg: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        imgAlt: "Sezane Dahlia Dress",
        brand: "Sezane",
        productTitle: "Dahlia Dress",
        price: 200
      },
      {
        id: 3,
        category: "Dresses",
        categoryId: 4,
        pathToImg: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        imgAlt: "Sezane Dahlia Dress",
        brand: "Sezane",
        productTitle: "Dahlia Dress",
        price: 200
      },
      {
        id: 4,
        category: "Dresses",
        categoryId: 4,
        pathToImg: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        imgAlt: "Sezane Dahlia Dress",
        brand: "Sezane",
        productTitle: "Dahlia Dress",
        price: 200
      }
    ]
  }
}

export default data