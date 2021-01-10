const formData = {
    brand: {
        pageTitle: 'Brand',
        id: 'brand',
        prompts: [
            'Which brand made this product?',
            'Brand not listed above?'
        ],
        dropdownOptions: [
            {
                id: 'amour-vert',
                text: 'Amour Vert'
            },
            {
                id: 'sezane',
                text: 'Sézane'
            },
            {
                id: 'stella-mccartney',
                text: 'Stella McCartney'
            }
        ],
        buttonText: 'ADD A BRAND',
        addBrand: {
            id: 'add-brand',
            name: 'addBrand',
            prompt: 'Which brand made this product?',
            explanation: '',
            brandName: {
                id: 'brandName',
                prompt: 'Brand name',
                explanation: ''
            },
            brandWebsite: {
                id: 'brandWebsite',
                prompt: 'Brand website',
                explanation: ''
            },
            brandCurrency: {
                id: 'brandCurrency',
                prompt: 'Which currency does the brand list prices in?',
                explanation: ''
            },
            brandSizeSystem: {
                id: 'brandSizeSystem',
                prompt: 'Which sizing system does the brand use?',
                explanation: ''
            },
            submitButton: 'SUBMIT BRAND'
        },
        certifications: [
            {
                id: 1,
                text: 'BlueSign',
                checked: false
            },
            {
                id: 2,
                text: 'OEKO-TEX',
                checked: false
            }
        ]
    },

    colors: {
        id: 'colors',
        pageTitle: 'Colors',
        pagePrompts: [
            {
                prompt: `How many color options does the product have?`,
                promptSubtitle: `If the product has color options listed on other pages (at other URLs), add those as separate products.`
            },
            {
                prompt: `Enter all color options listed on the product webpage`,
                promptSubtitle: ''
            }
        ],
        colorName: {
            prompt: 'Color name',
            explanation: 'What the brand calls the color'
        },
        colorDescription: {
            prompt: 'Color description',
            explanation: 'Select an option that best describes the color',
            options: [
                {
                    id: 1,
                    text: 'Black'
                },
                {
                    id: 2,
                    text: 'Grey'
                },
                {
                    id: 3,
                    text: 'White'
                },
                {
                    id: 4,
                    text: ''
                }
            ]
        }
    },

    images: {
        id: 'images',
        pageTitle: 'Images',
        pagePrompts: {
            prompt: `Enter the color swatch URL and image URL(s) for each color`,
            promptSubtitle: ''
        },
        colorSwatchUrlFieldset: {
            name: 'colorSwatchUrl',
            prompt: 'Color swatch URL',
            explanation: `Right click on the color swatch, select 'Copy Image Address', and paste the address here.`
        },
        imageUrl: {
            id: 'color-image-url',
            name: 'colorImageUrl',
            prompt: 'Image URL for this color',
            explanation: `Right click on the image, select 'Copy Image Address', and paste the address here.`
        }
    },

    manufacturing: {
        id: 'manufacturing',
        pageTitle: 'Manufacturing',
        pagePrompts: [
            {    
                prompt: 'Enter the manufacturing information provided on the product page.',
                subprompt: '',
                explanation: 'If the product page does not provide factory names or locations, select "Not disclosed" from the dropdown.'
            },
            {    
                prompt: 'Sewing and finishing',
                subprompt: '',
                explanation: 'If the product page does not provide factory names or locations, select "Not disclosed" from the dropdown.'
            },
            {    
                prompt: 'Fabric cutting',
                subprompt: '',
                explanation: 'If the product page does not provide factory names or locations, select "Not disclosed" from the dropdown.'
            },
            {    
                prompt: 'Does the fabric have any of the following certifications?',
                subprompt: 'Check all that apply.'
            },
            {
                prompt: 'Are there any additional notes about how the product was cut, sewn, or finished?',
                subprompt: 'Copy and paste them here.'
            },
            // {    
            //     prompt: 'Add a sewing and finishing factory',
            //     promptSubtitle: ''
            // },
            // {    
            //     prompt: 'Add a cutting factory',
            //     promptSubtitle: ''
            // },
            // {    
            //     prompt: 'Add a certification',
            //     promptSubtitle: ''
            // }
        ],
        location: {
            name: 'location',
            prompt: 'Location',
            explanation: 'If the product page does not provide a factory location, select "Not disclosed"'
        },
        factory: {
            name: 'factory',
            prompt: 'Factory',
            explanation: 'If the product page does not provide a factory name, select "Not disclosed"',
            options: [
                {
                    id: 1,
                    text: 'Dynotex',
                    name: 'Dynotex',
                    location: 'US',
                    website: 'dynotex.com',
                    notes: 'Established in 1999. 226 Newell Street, Ground Floor, Brooklyn, NY 11222. Phone: 1-718-618-9731'
                },
                {
                    id: 2,
                    text: 'Spooltown',
                    name: 'Spooltown',
                    location: 'US',
                    website: 'spooltown.com',
                    notes: 'Portland, Oregon'
                }
            ]
        },
        buttonText: ['ADD A FACTORY', 'ADD A CERTIFICATION'],
        addSewing: {
            id: 'addSewing',
            name: 'addSewing',
            pageTitle: 'New Factory',
            prompt: 'Add a sewing and finishing factory',
            explanation: 'If the product page does not provide a factory location, select "Not disclosed"',
            button: 'ADD A FACTORY',
            factoryName: {
                id: 'sewingFactoryName',
                prompt: 'Factory name',
                explanation: ''
            },
            factoryLocation: {
                id: 'sewingFactoryLocation',
                prompt: 'Location',
                explanation: ''
            },
            factoryWebsite: {
                id: 'sewingFactoryWebsite',
                prompt: 'Website',
                explanation: ''
            },
            factoryNotes: {
                id: 'sewingFactoryNotes',
                prompt: 'Notes',
                explanation: ''
            },
            submitButton: 'SUBMIT FACTORY'
        },
        addCutting: {
            id: 'addCutting',
            name: 'addCutting',
            pageTitle: 'New Factory',
            prompt: 'Add a cutting factory',
            explanation: 'If the product page does not provide a factory location, select "Not disclosed"',
            button: 'ADD A FACTORY',
            factoryName: {
                id: 'cuttingFactoryName',
                prompt: 'Factory name',
                explanation: ''
            },
            factoryLocation: {
                id: 'cuttingFactoryLocation',
                prompt: 'Location',
                explanation: ''
            },
            factoryWebsite: {
                id: 'cuttingFactoryWebsite',
                prompt: 'Website',
                explanation: ''
            },
            factoryNotes: {
                id: 'cuttingFactoryNotes',
                prompt: 'Notes',
                explanation: ''
            },
            submitButton: 'SUBMIT FACTORY'
        },
        certifications: {
            name: 'certifications',
            prompt: 'Certifications',
            options: [
                {
                    id: 1,
                    text: 'BlueSign',
                    checked: false
                },
                {
                    id: 2,
                    text: 'OEKO-TEX',
                    checked: false
                }
            ]
        },
        newCertification: {
            title: 'New Certification',
            submitButton: 'SUBMIT CERTIFICATION',
            certName: {
                id: 'certName',
                prompt: 'Certification name',
                explanation: ''
            },
            certWebsite: {
                id: 'certWebsite',
                prompt: 'Website',
                explanation: ''
            }
        },
        additionalNotes: {
            id: 'additionalNotes',
            prompt: 'Are there any additional notes about how the product was cut, sewn, or finished?',
            subprompt: 'Copy and paste them here.'
        }
    },

    newProduct: {
        id: 'new-product',
        pageTitle: 'New Product',
        careInstructions: {
            prompt: 'Care instructions'
        },
        productCategory: {
            prompt: 'Category',
            options: [
                {
                    id: 1,
                    text: 'Activewear',
                    class: 'clothing'
                    
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
            ]
        },
        productCurrency: {
            prompt: 'Currency'
        },
        dry: {
            id: 'dry',
            prompt: 'Dry instructions',
            options: [
                {
                    id: 1,
                    text: 'Hang dry'
                },
                {
                    id: 2,
                    text: 'Hand dry in the shade'
                },
                {
                    id: 3,
                    text: 'Dry flat'
                }
            ],
        },
        featureImageUrl: {
            id: 'feature-image-url',
            prompt: 'Feature image URL'
        },
        productName: {
            id: 'product-name',
            prompt: 'Product name',
            explanation: `Enter the product name as it is listed on the brand's website`
        },
        productPrice: {
            prompt: 'Product price',
            promptSubtitle: '',
        },
        price: {
            id: 'price',
            prompt: 'Product price'
        },
        productUrl: {
            id: 'productUrl',
            prompt: 'Product URL'
        },
        wash: {
            id: 'wash',
            prompt: 'Wash instructions',
            options: [
                {
                    id: 1,
                    text: 'Do not wash'
                },
                {
                    id: 2,
                    text: 'Machine wash cold'
                },
                {
                    id: 3,
                    text: 'Machine wash warm'
                }
            ]
        }
    },

    notions: {
        pageTitle: 'Notions',
        pagePrompts: {
            prompt: 'If the product includes notions succh as zippers or buttons, list them here.',
            promptSubtitle: 'If the product does not include notions, skip this section.'
        },
        notionType: {
            prompt: 'Notion',
            explanation: '',
            buttonText: ['ADD A NOTION', 'ADD A FACTORY'],
            options: [
                {
                    id: '1',
                    text: 'Brass zipper'
                },
                {
                    id: '2',
                    text: 'Shell buttons'
                }
            ]
        },
        notionMaterial: {
            id: 'notionMaterial',
            prompt: 'Material',
            explanation: '',
            options: [
                {
                    id: '1',
                    text: 'brass'
                },
                {
                    id: '2',
                    text: 'shell'
                }
            ]
        },
        manufacturingLocation: {
            id: 'location',
            prompt: 'Location of notion manufacturing',
            explanation: ''
        },
        certifications: {
            id: 'certifications',
            prompt: 'Does the notion have any of the following certifications?',
            explanation: 'Check all that apply.',
            options: [
                {
                    id: 'organic',
                    text: 'Organic'
                },
                {
                    id: 'bluesign',
                    text: 'Bluesign'
                },
                {
                    id: 'fairTrade',
                    text: 'Fair trade'
                }
            ]
        },
        additionalNotes: {
            id: 'additionalNotes',
            prompt: `Are there any additional notes about this product's notions?`,
            subprompt: 'Copy and paste them here.'
        }    
    },

    permittedCategories: {
        pageTitle: 'Category',
        pagePrompt: {
                prompt: `Does the product fall into one of the following categories?`,
                promptSubtitle: `Check all that apply and click 'next'.`
        },
        categoryOptions: [
            {
                text: 'Coats and jackets',
                id: 'coats-and-jackets',
                checked: false
            },
            {
                text: 'Shoes',
                id: 'shoes',
                checked: false
            },
            {
                text: 'Swimwear',
                id: 'swimwear',
                checked: false
            },
            {
                text: 'None of these',
                id: 'none',
                checked: false
            }
        ]
    },

    notPermitted: {
        message: 'Veronaut does accept products made with synthetic fabrics, with exceptions for outerwear, shoes, and swimwear',
        buttons: [
            {
                link: '/about',
                text: 'FIND OUT WHY'
            },
            {
                text: 'SUBMIT A DIFFERENT PRODUCT'
            }
        ]
    },

    newBrand: {
        pageTitle: 'New Brand',
        prompts: [
            'Which brand made this product?'
        ],
        brandName: {
            id: 'brand-name',
            prompt: 'Brand name'
        },
        brandWebsite: {
            id: 'brand-website',
            prompt: 'Brand website'
        },
        currency: {
            id: 'currency',
            prompt: 'Which currency does the brand list prices in?',
            options: [
                {
                    text: 'USD',
                    id: 'USD'
                },
                {
                    text: 'PEN',
                    id: 'PEN'
                }
            ]
        },
        sizeSystem: {
            id: 'size-system',
            prompt: 'Which sizing system does the brand use?',
            options: [
                {
                    text: 'US',
                    id: 'US'
                },
                {
                    text: 'PE',
                    id: 'PE'
                }
            ]
        }
    },

    productAttributes: {
        prompt: `Does the product fall into one of the following categories?`,
        promptSubtitle: `Check all that apply and click 'next'.`,
        attributes: [
            {
                id: 'neckline',
                prompt: 'Neckline',
                options: [
                    {
                        id: 'v-neck',
                        text: 'V-neck'
                    },
                    {
                        id: 'scoop-neck',
                        text: 'Scoop neck'
                    },
                    {
                        id: 'crew-neck',
                        text: 'Crew neck'
                    }
                ]
            },
            {
                id: 'sleeve-length',
                prompt: 'Sleeve length',
                options: [
                    {
                        id: 'short-sleeve',
                        text: 'Short-sleeved'
                    },
                    {
                        id: 'three-quarter-sleeve',
                        text: 'Three-quarter sleeve'
                    },
                    {
                        id: 'long-sleeve',
                        text: 'Long-sleeved'
                    }
                ]
            }
        ]
    },

    prohibitedFibers: [
        {
            text: 'Acetate',
            id: 'acetate',
            checked: false
        },
        {
            text: 'Acrylic',
            id: 'acrylic',
            checked: false
        },
        {
            text: 'Microfiber',
            id: 'microfiber',
            checked: false
        },
        {
            text: 'Neoprene',
            id: 'neoprene',
            checked: false
        },
        {
            text: 'Nylon',
            id: 'nylon',
            checked: false
        },
        {
            text: 'Olefin',
            id: 'olefin',
            checked: false
        },
        {
            text: 'Polyamide',
            id: 'polyamide',
            checked: false
        },
        {
            text: 'Polyester',
            id: 'polyester',
            checked: false
        },
        {
            text: 'Polyurethane',
            id: 'polyurethane',
            checked: false
        },
        {
            text: 'Vinyl',
            id: 'vinyl',
            checked: false
        },
        {
            text: 'None of these',
            id: 'none',
            checked: false
        }
    ],

    formDropdown : {
        id: 'dog',
        prompt: 'Dog',
        dropdownOptions: [
            {
                id: 'dog',
                text: 'Dog'
            },
            {
                id: 'cat',
                text: 'Cat'
            },
            {
                id: 'hamster',
                text: 'Hamster'
            }
        ]
    },

    FormFieldset: {
        legendText: 'Other: add a notion type'
    },

    formPrompts: [
        {
            prompt: 'Select all size options available on this product page.',
            promptSubtitle: 'Include sold out sizes'
        }
    ],

    
    
    
}

export default formData