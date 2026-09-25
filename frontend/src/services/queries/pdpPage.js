import qs from "qs";

const pdpPopulate = qs.stringify(
    {
        populate: {
            pdp_section: {
                on: {
                    "social-proof.reviews": {
                        populate: "*",
                    },
                    "forms.newsletter": {
                        populate: "*",
                    },
                    "forms.contact-us-form": {
                        populate: "*",
                    },
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
                    "sections.slides": {
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
                    "sections.hero-banner": {
                        populate: {
                            desktopImage: true,
                            mobileImage: true,
                            tabImage: true
                        },
                    },
                    "sections.image-text-section": {
                        populate: {
                            desktopImage: true,
                            tabImage: true,
                            mobileImage: true,
                            iconItems: {
                                populate: {
                                    icon: true
                                }
                            }
                        },
                    },
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
                    "grids.feature-item": {
                        populate: "*",
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
                    "grids.image-grid-card": {
                        populate: "*",
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
                    "carousels.posts": {
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
                    "carousels.icon-link-card": {
                        populate: "*",
                    },
                    "banners.image-banner": {
                        populate: {
                            desktopImage: true,
                            tabImage: true,
                            mobileImage: true
                        },
                    },
                },
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
);

export default pdpPopulate;
