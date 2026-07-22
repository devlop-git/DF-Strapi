const plpApiData = {
    "breadcrumb": [
      { "label": "Home", "url": "/" },
      { "label": "Engagement Rings", "url": "/engagement-rings" },
      { "label": "Trilogy", "url": "/engagement-rings/trilogy", "current": true }
    ],
    "category": {
      "categoryId": "CATEGORY-ENG-RINGS",
      "name": "Engagement Rings",
      "subCategory": "Trilogy",
      "slug": "engagement-rings/trilogy",
      "language": "en"
    },
    "totalProducts": 1420,
    "pagination": {
      "page": 1,
      "pageSize": 24,
      "totalPages": 60
    },
    "sort": {
      "selected": "recommended",
      "options": [
        { "id": "recommended", "label": "Recommended" },
        { "id": "price_asc", "label": "Price: Low to High" },
        { "id": "price_desc", "label": "Price: High to Low" },
        { "id": "newest", "label": "New In" },
        { "id": "bestselling", "label": "Best Selling" }
      ]
    },
    "filters": [
      {
        "featureId": "FEATURE-STYLE",
        "name": "Style",
        "displayName": "Style",
        "partOf": "MS",
        "sequence": 0,
        "displaySequence": 0,
        "featureSequence": 0,
        "selectionType": "single",
        "renderAs": "checkbox",
        "values": [
          { "valueCode": "00", "valueName": "Solitaire", "displayName": "Solitaire", "valueSequence": 0, "isSelected": false },
          { "valueCode": "01", "valueName": "Side Stone", "displayName": "Side Stone", "valueSequence": 1, "isSelected": false },
          { "valueCode": "02", "valueName": "Halo Rings", "displayName": "Halo Rings", "valueSequence": 2, "isSelected": false },
          { "valueCode": "03", "valueName": "Hidden Halo", "displayName": "Hidden Halo", "valueSequence": 3, "isSelected": false },
          { "valueCode": "04", "valueName": "Trilogy", "displayName": "Trilogy", "valueSequence": 4, "isSelected": true }
        ]
      },
      {
        "featureId": "FEATURE-STONETYPE",
        "name": "Stone",
        "displayName": "Stone",
        "partOf": "ST",
        "sequence": 1,
        "displaySequence": 1,
        "featureSequence": 0,
        "selectionType": "multi",
        "renderAs": "checkbox",
        "values": [
          { "valueCode": "00", "valueName": "Lab-Created Diamond", "displayName": "Lab Diamond", "valueSequence": 0, "isSelected": false },
          { "valueCode": "01", "valueName": "Natural Diamond", "displayName": "Natural Diamond", "valueSequence": 1, "isSelected": false },
          { "valueCode": "02", "valueName": "Yellow Diamond", "displayName": "Yellow Diamond", "valueSequence": 2, "isSelected": false },
          { "valueCode": "03", "valueName": "Black Diamond", "displayName": "Black Diamond", "valueSequence": 3, "isSelected": false }
        ]
      },
      {
        "featureId": "FEATURE-SHAPE",
        "name": "Shape",
        "displayName": "Shape",
        "partOf": "ST",
        "sequence": 2,
        "displaySequence": 2,
        "featureSequence": 1,
        "selectionType": "single",
        "renderAs": "icon",
        "values": [
          { "valueCode": "00", "valueName": "Round", "displayName": "Round", "valueSequence": 0, "isSelected": false, "icon": "shape-round" },
          { "valueCode": "01", "valueName": "Princess", "displayName": "Princess", "valueSequence": 1, "isSelected": false, "icon": "shape-princess" },
          { "valueCode": "02", "valueName": "Oval", "displayName": "Oval", "valueSequence": 2, "isSelected": false, "icon": "shape-oval" },
          { "valueCode": "03", "valueName": "Emerald", "displayName": "Emerald", "valueSequence": 3, "isSelected": false, "icon": "shape-emerald" },
          { "valueCode": "04", "valueName": "Cushion", "displayName": "Cushion", "valueSequence": 4, "isSelected": false, "icon": "shape-cushion" },
          { "valueCode": "05", "valueName": "Pear", "displayName": "Pear", "valueSequence": 5, "isSelected": false, "icon": "shape-pear" }
        ]
      },
      {
        "featureId": "FEATURE-METAL",
        "name": "Metal",
        "displayName": "Metal",
        "partOf": "MS",
        "sequence": 3,
        "displaySequence": 3,
        "featureSequence": 0,
        "colourSequence": 0,
        "selectionType": "multi",
        "renderAs": "swatch",
        "values": [
          { "valueCode": "00", "valueName": "Platinum (950)", "displayName": "Platinum", "valueSequence": 0, "isSelected": false, "karat": "PL", "colour": "Platinum", "swatch": "#D9D9D6" },
          { "valueCode": "01", "valueName": "Yellow Gold", "displayName": "Yellow Gold", "valueSequence": 1, "isSelected": false, "karat": null, "colour": "Yellow", "swatch": "#E6C200" },
          { "valueCode": "02", "valueName": "White Gold", "displayName": "White Gold", "valueSequence": 2, "isSelected": false, "karat": null, "colour": "White", "swatch": "#E5E4E2" },
          { "valueCode": "03", "valueName": "Rose Gold", "displayName": "Rose Gold", "valueSequence": 3, "isSelected": false, "karat": null, "colour": "Rose", "swatch": "#B76E79" }
        ]
      },
      {
        "featureId": "FEATURE-CARAT",
        "name": "Carat",
        "displayName": "Carat",
        "partOf": "CT",
        "sequence": 4,
        "displaySequence": 4,
        "featureSequence": 0,
        "selectionType": "range",
        "renderAs": "range",
        "range": {
          "min": 0.20,
          "max": 10.0,
          "step": 0.05,
          "unit": "ct",
          "selectedMin": 0.20,
          "selectedMax": 10.0,
          "presets": [
            { "valueCode": "P0", "displayName": "0.20 - 3.00", "min": 0.20, "max": 3.00, "isSelected": false },
            { "valueCode": "P1", "displayName": "3.50 - 10.00", "min": 3.50, "max": 10.00, "isSelected": false }
          ]
        }
      },
      {
        "featureId": "FEATURE-SETTINGTYPE",
        "name": "Setting Type",
        "displayName": "Setting Type",
        "partOf": "SF",
        "sequence": 5,
        "displaySequence": 5,
        "featureSequence": 0,
        "selectionType": "multi",
        "renderAs": "checkbox",
        "collapsed": true,
        "values": [
          { "valueCode": "00", "valueName": "2 Prong", "displayName": "2 Prong", "valueSequence": 0, "isSelected": false },
          { "valueCode": "01", "valueName": "3 Prong", "displayName": "3 Prong", "valueSequence": 1, "isSelected": false },
          { "valueCode": "02", "valueName": "4 Prong", "displayName": "4 Prong", "valueSequence": 2, "isSelected": false },
          { "valueCode": "03", "valueName": "6 Prong", "displayName": "6 Prong", "valueSequence": 3, "isSelected": false }
        ]
      },
      {
        "featureId": "FEATURE-PRICE",
        "name": "Price",
        "displayName": "Price",
        "partOf": "PR",
        "sequence": 6,
        "displaySequence": 6,
        "featureSequence": 0,
        "selectionType": "range",
        "renderAs": "range",
        "range": {
          "min": 150,
          "max": 25000,
          "step": 50,
          "currency": "GBP",
          "selectedMin": 150,
          "selectedMax": 25000
        }
      }
    ],
    "appliedFilters": [
      { "featureId": "FEATURE-STYLE", "valueCode": "04", "displayName": "Trilogy" }
    ],
     "products": [
      {
        "ornamentId": "ORNAMENT-CLRN04546",
        "designRef": "CLRN04546",
        "designNumber": "RF0046029",
        "baseProductCode": "CLRN04546",
        "name": "Prong Setting Trilogy Diamond Engagement Ring",
        "ornamentType": "Engagement Ring",
        "category": "Engagement Rings",
        "subCategory": "Trilogy",
        "language": "en",
        "customisable": true,
        "rating": 4.4,
        "ratingCount": 128,
        "badges": ["bestseller"],
        "image": {
          "altText": "Trilogy ring front view",
          "thumbnail": "https://cdn.diamondsfactory.co.uk/design/CLRN04546/PL/ROUND/MAIN_thumb.jpg",
          "medium": "https://static.diamondsfactory.com/image/product_v2/clrn00349/rn0026163/showcase/vr/yy/di/0001.jpg",
          "hover": "https://static.diamondsfactory.com/image/product_v2/clrn00349/rn0026163/showcase/front/yy/di/0001.jpg"
        },
        "priceFrom": {
          "currency": "GBP",
          "listPrice": 3310.0,
          "salePrice": 2482.5,
          "promotion": { "code": "RING25", "description": "25% off engagement rings" }
        },
        "availableValues": {
          "FEATURE-STYLE": ["04"],
          "FEATURE-STONETYPE": ["00", "01"],
          "FEATURE-SHAPE": ["00", "01", "02"],
          "FEATURE-METAL": ["00", "01", "02", "03"],
          "FEATURE-SETTINGTYPE": ["02"],
          "FEATURE-CARAT": { "min": 0.95, "max": 5.00 }
        },
        "defaultSelection": {
          "FEATURE-STYLE": "04",
          "FEATURE-STONETYPE": "00",
          "FEATURE-SHAPE": "00",
          "FEATURE-METAL": "00",
          "FEATURE-SETTINGTYPE": "02",
          "FEATURE-CARAT": 0.95
        }
      },
      {
        "ornamentId": "ORNAMENT-CLRN02218",
        "designRef": "CLRN02218",
        "designNumber": "RF0022187",
        "baseProductCode": "CLRN02218",
        "name": "Classic Halo Diamond Engagement Ring",
        "ornamentType": "Engagement Ring",
        "category": "Engagement Rings",
        "subCategory": "Halo Rings",
        "language": "en",
        "customisable": true,
        "rating": 4.6,
        "ratingCount": 94,
        "badges": ["new"],
        "image": {
          "altText": "Halo ring front view",
          "thumbnail": "https://cdn.diamondsfactory.co.uk/design/CLRN02218/RG/OVAL/MAIN_thumb.jpg",
          "medium": "https://static.diamondsfactory.com/image/product_v2/clrn00349/rn0026163/showcase/vr/yy/di/0001.jpg",
          "hover": "https://static.diamondsfactory.com/image/product_v2/clrn00349/rn0026163/showcase/front/yy/di/0001.jpg"
        },
        "priceFrom": {
          "currency": "GBP",
          "listPrice": 1980.0,
          "salePrice": 1485.0,
          "promotion": { "code": "RING25", "description": "25% off engagement rings" }
        },
        "availableValues": {
          "FEATURE-STYLE": ["02", "03"],
          "FEATURE-STONETYPE": ["00", "01", "02"],
          "FEATURE-SHAPE": ["02", "00", "05", "03"],
          "FEATURE-METAL": ["03", "02", "00"],
          "FEATURE-SETTINGTYPE": ["03"],
          "FEATURE-CARAT": { "min": 0.50, "max": 4.00 }
        },
        "defaultSelection": {
          "FEATURE-STYLE": "02",
          "FEATURE-STONETYPE": "00",
          "FEATURE-SHAPE": "02",
          "FEATURE-METAL": "03",
          "FEATURE-SETTINGTYPE": "03",
          "FEATURE-CARAT": 1.00
        }
      }
    ]
}

export default plpApiData; 