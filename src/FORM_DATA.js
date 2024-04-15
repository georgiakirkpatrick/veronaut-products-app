const formData = {
  colors: [
    {
      id: 1,
      text: 'Beige'
    },
    {
      id: 2,
      text: 'Black'
    },
    {
      id: 3,
      text: 'Blue'
    },
    {
      id: 4,
      text: 'Brown'
    },
    {
      id: 5,
      text: 'Green'
    },
    {
      id: 6,
      text: 'Grey'
    },
    {
      id: 7,
      text: 'Off-white'
    },
    {
      id: 8,
      text: 'Orange'
    },
    {
      id: 9,
      text: 'Pink'
    },
    {
      id: 10,
      text: 'Purple'
    },
    {
      id: 11,
      text: 'Red'
    },
    {
      id: 12,
      text: 'Tan'
    },
    {
      id: 13,
      text: 'White'
    },
    {
      id: 14,
      text: 'Yellow'
    }
  ],

  dryOptions: [
    {
        id: 0,
        text: 'Select drying instructions'
    },
    {
        id: 1,
        text: 'Not disclosed'
    },
    {
        id: 2,
        text: 'Hang dry'
    },
    {
        id: 3,
        text: 'Hang dry in the shade'
    },
    {
        id: 4,
        text: 'Dry flat'
    },
    {
        id: 5,
        text: 'Tumble dry'
    },
    {
        id: 6,
        text: 'Tumble dry low heat'
    },
    {
        id: 7,
        text: 'Tumble dry medium heat'
    },
    {
        id: 8,
        text: 'Tumble dry high heat'
    },
    {
        id: 9,
        text: 'Tumble dry normal cycle'
    },
    {
        id: 10,
        text: 'Tumble dry permanent press'
    },
    {
        id: 11,
        text: 'Tumble dry delicate'
    }
  ],

  permittedCategories: [
    {
        text: 'Outerwear',
        id: 1,
        checked: false
    },
    {
        text: 'Shoes',
        id: 2,
        checked: false
    },
    {
        text: 'Socks and tights',
        id: 3,
        checked: false
    },
    {
        text: 'Swimwear',
        id: 4,
        checked: false
    },
    {
        text: 'Underwear',
        id: 5,
        checked: false
    }
  ],

  productCategories: [
    {
        id: 0,
        text: 'Select a category'
    },
    {
        id: 1,
        text: 'Activewear',
        class: 'clothing',
        
    },
    {
        id: 2,
        text: 'Blazers',
        class: 'clothing',
    },
    {
        id: 3,
        text: 'Coats and Jackets',
        class: 'clothing',
    },
    {
        id: 4,
        text: 'Dresses',
        class: 'clothing',
    },
    {
        id: 5,
        text: 'Facemasks',
        class: 'accessories',
    },
    {
        id: 6,
        text: 'Hair Accessories and Hats',
        class: 'accessories',
    },
    {
        id: 7,
        text: 'Jeans',
        class: 'clothing',
    },
    {
        id: 8,
        text: 'Jumpsuits',
        class: 'clothing',
    },
    {
        id: 9,
        text: 'Lingerie',
        class: 'clothing',
    },
    {
        id: 10,
        text: 'Pants',
        class: 'clothing',
    },
    {
        id: 11,
        text: 'Shoes',
        class: 'shoes',
    },
    {
        id: 12,
        text: 'Skirts',
        class: 'clothing',
    },
    {
        id: 13,
        text: 'Socks and Tights',
        class: 'clothing',
    },
    {
        id: 14,
        text: 'Sweaters',
        class: 'clothing',
    },
    {
        id: 15,
        text: 'Swimwear',
        class: 'clothing',
    },
    {
        id: 16,
        text: 'Tops',
        class: 'clothing',
    }
  ],

  prohibitedFibers: [
    {
        text: 'Not sure',
        id: 101,
        checked: false
    },
    {
        text: 'Acetate',
        id: 1,
        checked: false
    },
    {
        text: 'Acrylic',
        id: 2,
        checked: false
    },
    {
        text: 'Microfiber',
        id: 3,
        checked: false
    },
    {
        text: 'Neoprene',
        id: 4,
        checked: false
    },
    {
        text: 'Nylon',
        id: 5,
        checked: false
    },
    {
        text: 'Olefin',
        id: 6,
        checked: false
    },
    {
        text: 'Polyamide',
        id: 7,
        checked: false
    },
    {
        text: 'Polyester',
        id: 8,
        checked: false
    },
    {
        text: 'Polyurethane',
        id: 9,
        checked: false
    },
    {
        text: 'Vinyl',
        id: 10,
        checked: false
    },
    {
        text: 'Elastane',
        id: 11,
        checked: false
    },
    {
        text: 'Spandex',
        id: 12,
        checked: false
    },
    {
        text: 'Lycra',
        id: 13,
        checked: false
    }
  ],

washOptions: [
    {
        id: 0,
        text: 'Select washing instructions'
    },
    {
        id: 1,
        text: 'Not disclosed'
    },
    {
        id: 2,
        text: 'Do not wash'
    },
    {
        id: 3,
        text: 'Machine wash cold (≤85°F/≤30°C)'
    },
    {
        id: 4,
        text: 'Machine wash warm (≤105°F/≤40°C)'
    },
    {
        id: 5,
        text: 'Machine wash hot (≥140°F/≥60°C)'
    },
    {
        id: 6,
        text: 'Hand wash'
    },
    {
        id: 7,
        text: 'Dry clean only'
    },
    {
        id: 8,
        text: 'Do not dry clean'
    },
    {
        id: 9,
        text: 'Do not wash'
    },
    {
        id: 10,
        text: 'Machine wash normal cycle'
    },
    {
        id: 11,
        text: 'Machine wash permanent press'
    },
    {
        id: 12,
        text: 'Machine wash delicate'
    }
  ]
}

export default formData