type Link = {
    title:string,
    link:string
}

export interface Slug {
    title: string;
    slug: string;
}

export interface Episode {
    title: string;
    date: string;
    slug: string;
    image: string;
    episode: string;
    posted?: string;
}

export interface DetailAnime {
    japanese?: string,
    english?: string,
    status?: string,
    type?: string,
    source?: string,
    duration?: string,
    total_episode?: string,
    season?:Slug | null,
    studio?:Slug | null,
    producers?:Slug[] | null,
    released?:string
}

export interface Anime extends DetailAnime {
    title:string,
    image:string,
    slug:string,
    rating?:string,
    description:string
    genre?:Slug[],
    synopsis:string,
    trailer?:string,
    episode?:Episode[],
}

export interface Iframe {
    title:string,
    post:string,
    nume:number,
    type?:string
}

export interface Download {
    d360p?:Link[],
    d480p?:Link[],
    d720p?:Link[],
    d1080p?:Link[],
}

export interface FormatDownload {
    mkv?:Download,
    mp4?:Download,
    x265?:Download,
}

export interface Streaming extends Anime {
    anime?:string,
    anime_slug:string,
    nextStreaming?:string,
    previousStreaming?:string,
    iframe:Iframe[],
    downloads?:FormatDownload,
}
