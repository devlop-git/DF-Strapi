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

                    "sections.image-text-section": {
                        populate: {
                            desktopImage: true,
                            tabImage: true,
                            mobileImage: true
                        },
                    },

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

                    "banners.promotion-banner": {
                        populate: {
                            desktopBgImage: true,
                            mobileBgImage: true,
                            tabBgImage: true
                        },
                    },

                    "social-proof.reviews": {
                        populate: "*",
                    },

                    "carousels.instagram-feed": {
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

                     "carousels.image-card-carousel": {
                        populate: {
                            guideItem: {
                                populate: {
                                    desktopMedia: true,
                                    mobileMedia: true,
                                    tabMedia: true
                                },
                            },
                        },
                    },

                    "forms.newsletter": {
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
