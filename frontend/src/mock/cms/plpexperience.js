const plpResponse = {
    data: {
        category: {
            categoryId: "CATEGORY-0002",
            categoryName: "Solitaire"
        },
        filters: [
            {
                code: "stone",
                title: "Stone",
                options: [
                    {
                        id: "lab",
                        label: "Lab",
                        count: 35
                    },
                    {
                        id: "natural",
                        label: "Natural",
                        count: 18
                    },
                    {
                        id: "yellow",
                        label: "Yellow",
                        count: 35
                    },
                    {
                        id: "ruby",
                        label: "Ruby",
                        count: 18
                    }

                ]
            },
            {
                code: "shape",
                title: "Shape",
                options: [
                    {
                        id: "round",
                        label: "round",
                        count: 35
                    },
                    {
                        id: "princess",
                        label: "Princess",
                        count: 18
                    },
                    {
                        id: "cushion",
                        label: "cushion",
                        count: 35
                    },
                    {
                        id: "oval",
                        label: "Oval",
                        count: 18
                    }

                ]
            },
             {
                code: "style",
                title: "Style",
                options: [
                    {
                        id: "solitaire",
                        label: "Solitaire",
                        count: 35,
                    },
                    {
                        id: "side-stone",
                        label: "Side Stone",
                        count: 18,
                    },
                    {
                        id: "halo-rings",
                        label: "Halo Rings",
                        count: 24,
                    },
                    {
                        id: "hidden-halo",
                        label: "Hidden Halo",
                        count: 12,
                    },
                    {
                        id: "trilogy",
                        label: "Trilogy",
                        count: 15,
                    },
                    {
                        id: "cluster-engagement-rings",
                        label: "Cluster Engagement Rings",
                        count: 10,
                    },
                    {
                        id: "vintage",
                        label: "Vintage",
                        count: 20,
                    },
                    {
                        id: "bridal-set",
                        label: "Bridal Set",
                        count: 8,
                    },
                    {
                        id: "ethereal-collection",
                        label: "Ethereal Collection",
                        count: 14,
                    },
                    {
                        id: "mens-engagement-rings",
                        label: "Mens Engagement Rings",
                        count: 9,
                    },
                    {
                        id: "womens",
                        label: "Womens",
                        count: 30,
                    },
                    {
                        id: "gemstone-rings",
                        label: "Gemstone Rings",
                        count: 16,
                    },
                    {
                        id: "simple-engagement-rings",
                        label: "Simple Engagement Rings",
                        count: 22,
                    },
                    {
                        id: "twisted-engagement-rings",
                        label: "Twisted Engagement Rings",
                        count: 11,
                    },
                    {
                        id: "dainty-engagement-rings",
                        label: "Dainty Engagement Rings",
                        count: 13,
                    },
                    ]
            },
            {
                code: "metal",
                title: "Metal",
                options: [
                    {
                        id: "platinum",
                        label: "Platinum",
                        count: 35,
                    },
                    {
                        id: "white-gold",
                        label: "White Gold",
                        count: 18,
                    },
                    {
                        id: "yellow-gold",
                        label: "Yellow Gold",
                        count: 24,
                    },
                    {
                        id: "rose-gold",
                        label: "Rose Gold",
                        count: 16,
                    },
                    {
                        id: "mixed-metals",
                        label: "Mixed Metals",
                        count: 10,
                    },
                    ]
            }
        ],
        products: [
            {
                productId:"PRODUCT-0001",
                name:"Oval Solitaire Ring",
                price:1499,
                image:"/ring.jpeg",
                badge:"25% OFF",
                metals:[
                    "white Gold",
                    "yellow gold",
                    "rose Gold"
                ],
                shape: [
                    "round", "princess"
                ],

            },
            {
                productId:"PRODUCT-0002",
                name: "Vintage Solitaire Diamond Engagement Ring",
                price: 653,
                image:"/ring.jpeg",
                badge:"25% OFF",
                metals:[
                    "white Gold",
                    "yellow Gold",
                    "rose Gold",
                    "platinum"
                ], shape: ["round", "princess", "oval"]
            },
            {
                productId:"PRODUCT-0003",
                name: "Vintage Diamond Engagement Ring",
                price: 925,
                image:"/ring.jpeg",
                badge:"25% OFF",
                metals:[
                    "white Gold",
                    "yellow Gold",
                    "rose Gold",
                    "platinum"
                ], shape: ["round", "princess", "oval"]
            },
            {
                productId:"PRODUCT-0004",
                name: "Floral Diamond Accent Engagement Ring",
                price: 1524,
                image:"/ring.jpeg",
                badge:"25% OFF",
                metals:[
                    "white Gold",
                    "yellow Gold",
                    "rose Gold",
                    "platinum"
                ]
            }
        ],
        pagination: {

            pageNo: 1,

            totalCount: 6

        }

    },

    status: 200,

    error: null,

    message: "Success"

}

export default plpResponse;