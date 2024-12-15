import type { Anime, Episode } from "./type";

export function CardEpisode (episode:Episode) : string {
    return `
        <div class="col-12 col-md-3 my-1 mb-3">
            <a href="/episode/${episode.slug}" class="card shadow h-100 text-decoration-none" >
                <img src="https://mangapi-man.vercel.app/gambar?url=${episode.image}" loading="lazy" class="min-height-card card-img-top" alt="${episode.title}">
                <div class="card-body">
                    <h5 class="fs-5 card-title text-truncate">${episode.title}</h5>
                    <span class="badge bg-theme text-theme">Episode ${episode.episode}</span>
                </div>
            </a>
        <div>
    `
}

export function CardAnime (anime:Anime) : string {
    return `
        <div class="col-12 col-md-4 my-1 mb-3">
           <a href="/anime/${anime.slug}" class="card shadow h-100 text-decoration-none" >
                <img src="https://mangapi-man.vercel.app/gambar?url=${anime.image}" loading="lazy" class="height-card-anime card-img-top" alt="${anime.title}">
                    <div class="card-body">
                    <h5 class="fs-5 card-title text-truncate">${anime.title}</h5>
                    <p class="card-text d-md-block d-none" >${anime.synopsis}</p>
                </div>
            </a>
        </div>
    `
}