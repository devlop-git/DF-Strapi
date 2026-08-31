import qs from "qs";

const plpPopulate = qs.stringify(
    {
        populate: {
            plp_section: {
                on: {
                    "grids.feature-highlights": {
                        populate: {
                            items: {
                                populate: {
                                    desktopIcon: true,
                                    mobileIcon: true,
                                    tabIcon: true
                                },
                            },
                        },
                    },
                    "grids.image-grid": {
                        populate: {
                            items: {
                                populate: {
                                    image: true
                                },
                            },
                        },
                    },
                    "forms.newsletter": {
                        populate: "*",
                    },
                    "content-blocks.faq": {
                        populate: {
                          faqItem: {
                            populate: "*"
                          },
                        },
                    },
                    "banners.banner-info": {
                        populate: "*"
                    },
                    "content-blocks.read-more-content": {
                        populate: "*"
                    },
                    "plp.banner-configuration": {
                        populate: "*"
                    },
                    "plp.product-listing": {
                        populate: "*"
                    }
                },
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
);

export default plpPopulate;
