import qs from "qs";

const homePopulate = qs.stringify(
    {
        populate: {
            Sections: {
                on: {
                    "sections.new-home-page": {
                        populate: {
                            heroSlides: {
                                populate: {
                                    desktopImage: true,
                                    mobileImage: true,
                                    tabImage: true
                                }
                            },
                        },
                    },

                    "sections.featured-categories": {
                        populate: "*",
                    },

                    "sections.image-text-section": {
                        populate: {
                            desktopImage: true,
                            tabImage: true,
                            mobileImage: true
                        },
                    },

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

                    "sections.promotion-banner": {
                        populate: {
                            desktopBgImage: true,
                            mobileBgImage: true,
                            tabBgImage: true
                        },
                    },

                    "sections.reviews": {
                        populate: "*",
                    },

                    "sections.instagram-feed": {
                        populate: {
                            posts: {
                                populate: {
                                    desktopInstaImage: true,
                                    mobileInstaImage: true,
                                    tabInstaImage: true
                                },
                            },
                        },
                    },

                    "sections.newsletter": {
                        populate: "*",
                    },
                },
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
);

export default homePopulate;
