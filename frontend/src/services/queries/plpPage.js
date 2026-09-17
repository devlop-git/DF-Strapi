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
                                    tabIcon: true,
                                    lines: true
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
                    "grids.promotion-banner-grid": {
                        populate: {
                            items: {
                                populate: {
                                    desktopBgImage: true,
                                    mobileBgImage: true,
                                    tabBgImage: true
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
                    "banners.image-banner": {
                        populate: {
                            desktopImage: true,
                            tabImage: true,
                            mobileImage: true
                        }
                    },
                    "content-blocks.read-more-content": {
                        populate: "*"
                    },
                    "content-blocks.rich-text": {
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
