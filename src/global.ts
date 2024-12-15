import { CardAnime, CardEpisode } from "./component";
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
            listEpisode.innerHTML += CardEpisode(episode);
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
        console.log(paginationAnime);
        if(animes.length != 30){
            paginationAnime.classList.add("d-none");
        }
        for(const anime of animes){
            listAnime.innerHTML += CardAnime(anime);
        }
    }
}