import qs from "qs";

const homePopulate = qs.stringify(
    {
        populate: {
            Sections: {
                on: {
                    "sections.new-home-page": {
                        populate: {
                            heroSlides: {
                                populate: "*",
                            },
                        },
                    },

                    "sections.featured-categories": {
                        populate: "*",
                    },

                    "sections.image-text-section": {
                        populate: {
                            image: true,
                        },
                    },

                    "sections.feature-highlights": {
                        populate: {
                            items: {
                                populate: {
                                    icon: true,
                                },
                            },
                        },
                    },

                    "sections.promotion-banner": {
                        populate: {
                            backgroundImage: true,
                        },
                    },

                    "sections.reviews": {
                        populate: "*",
                    },

                    "sections.instagram-feed": {
                        populate: {
                            posts: {
                                populate: {
                                    instaImage: true,
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
