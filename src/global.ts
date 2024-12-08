import type { Anime, Episode } from "./type";

export function getUrl (get:string) {
    return new URLSearchParams(new URL(window.location.href).search).get(get);
}

export async function getEpisode (listEpisode:HTMLElement | null,page:string | null = "1") {
    page = page ? page : "1";
    const responseEpisode = await fetch(`https://samehadaku-api-man.vercel.app?page=${page}`,{
        method:"get"
    });
    const episodes:Episode[] = await responseEpisode.json();
    if(listEpisode){
        listEpisode.innerHTML = "";
        for(const episode of episodes){
            listEpisode.innerHTML += `
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
    }
}

export async function getAnime (listAnime:HTMLElement | null,paginationAnime:HTMLElement | null,page:string | null = "1",title:string|null = "") {
    page = page ? page : "1";
    title = title ? title : "";
    const responseAnime = await fetch(`https://samehadaku-api-man.vercel.app/anime?page=${page}&order=update&title=${title}`,{
        method:"get"
    });
    const animes:Anime[] = await responseAnime.json();
    if(listAnime && paginationAnime) {
        listAnime.innerHTML = "";
        if(animes.length == 30){
            paginationAnime.style.display = "none";
        }
        console.log(animes);
        for(const anime of animes){
        listAnime.innerHTML += `
        <div class="col-12 col-md-3 my-1 mb-3">
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
    }
}