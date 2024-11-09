import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot, b as renderComponent, d as renderHead, e as createAstro, f as addAttribute } from '../chunks/astro/server_CRdybN8J.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg bg-body-tertiary pt-4"> <div class="container-fluid"> <a class="navbar-brand" href="/">Flictnime</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</a> <ul class="dropdown-menu"> <li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="#">Something else here</a></li> </ul> </li> <li class="nav-item"> <a class="nav-link disabled" aria-disabled="true">Disabled</a> </li> </ul> <form class="d-flex" role="search"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-success" type="submit">Search</button> </form> </div> </div> </nav>`;
}, "C:/project/astro-speed/anime-astro/src/components/static/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Flictnime | ', '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/bootstrap/bootstrap.css">', '</head> <!-- <body class="bg-body-tertiary" data-bs-theme="dark" > --> <body class="bg-body-tertiary"> <div class="container"> ', " ", ' </div> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"><\/script> </body> </html>'])), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]));
}, "C:/project/astro-speed/anime-astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const page = parseInt(new URL(Astro2.request.url).searchParams.get("page") ?? "1") || 1;
  const origin = Astro2.url.origin;
  const response = await fetch(`https://samehadaku-api-man.vercel.app?page=${page}`, {
    method: "get"
  });
  const animes = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nonton Anime Terbaik dengan gratis" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="row mt-3"> ${animes.map((anime) => {
    return renderTemplate`<div class="col-6 col-md-3 my-1 mb-3"> <div class="card shadow"> <img${addAttribute("https://mangapi-man.vercel.app/gambar?url=" + anime.image, "src")} class="image-height-card card-img-top"${addAttribute(anime.title, "alt")}> <div class="card-body"> <h5 class="card-title text-truncate">${anime.title}</h5> </div> </div> </div>`;
  })} </div> <div class="d-flex justify-content-end mt-3" data-bs-theme=""> <nav aria-label="pagination"> <ul class="pagination "> <li${addAttribute(`page-item ${page == 1 ? "disabled" : ""}`, "class")}> ${page == 1 ? renderTemplate`<span class="page-link">Previous</span>` : renderTemplate`<a class="page-link"${addAttribute(`${origin}?page=${page - 1}`, "href")}>Previous</a>`} </li> <li class="page-item"> ${page != 1 ? renderTemplate`<a class="page-link"${addAttribute(`${origin}?page=${page - 1}`, "href")}>${page - 1}</a>` : renderTemplate`<span class="page-link d-none">1</span>`} </li> <li class="page-item" aria-current="page"> <span class="page-link active">${page}</span> </li> <li class="page-item"><a class="page-link"${addAttribute(`${origin}?page=${page + 1}`, "href")}>${page + 1}</a></li> <li class="page-item"> <a class="page-link "${addAttribute(`${origin}?page=${page + 1}`, "href")}>Next</a> </li> </ul> </nav> </div> ` })}`;
}, "C:/project/astro-speed/anime-astro/src/pages/index.astro", void 0);

const $$file = "C:/project/astro-speed/anime-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
