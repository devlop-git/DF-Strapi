import qs from "qs";

const plpPopulate = qs.stringify(
    {
        populate: {
            plp_section: {
                on: {
                    "sections.feature-highlights": {
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
                    "plp.faq": {
                        populate: {
                          faqItem: {
                            populate: "*"
                          },
                        },
                    },
                    "plp.banner-info": {
                        populate: "*"
                    },
                    "plp.guide-section": {
                        populate: {
                            guideItem: {
                                populate: {
                                 desktopIcon: true,
                                    mobileIcon: true,
                                    tabIcon: true,
                                },
                            },
                        },
                    },
                    "plp.read-more-content": {
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
