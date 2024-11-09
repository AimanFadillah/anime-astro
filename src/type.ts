// src/types.ts

export interface Slug {
    title: string;
    slug: string;
}

export interface Episode {
    title: string;
    date: string;
    slug: string;
    image?: string | undefined;
    episode?: string;
    posted?: string;
}

export interface Anime {
    title: string;
    image: string;
    slug?: string;
    rating?: string;
    type?: string;
    description?: string;
    genre?: Slug[];
    duration?: string;
    season?: Slug;
    producers?: Slug[];
    synopsis?: string;
    status?: string;
    source?: string;
    total_episode?: string;
    studio?: Slug;
    released?: string;
    trailer?: string;
    episode?: Episode[];
}
