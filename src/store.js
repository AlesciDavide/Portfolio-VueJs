import { reactive } from "vue";

export const store = reactive({
  linkHeader: ["Home", "portfolio"],

  iconArray: [
      { nome: "JavaScript", icon: "/src/assets/img/icons-javascript.svg" },
      { nome: "PHP", icon: "/src/assets/img/icons-php.svg" },
      { nome: "HTML5", icon: "/src/assets/img/icons-html.svg" },
      { nome: "CSS", icon: "/src/assets/img/icons-css.svg" },
      { nome: "Bootstrap", icon: "/src/assets/img/icons-bootstrap.svg" },
      { nome: "SCSS", icon: "/src/assets/img/icons-scss.svg" },
      { nome: "VueJs", icon: "/src/assets/img/icons-vuejs.svg" },
      { nome: "Laravel", icon: "/src/assets/img/icons-laravel.svg" },
    
  ],
  linkSocial: [
    {link: "https://github.com/AlesciDavide", icon: "myIcon fa-brands fa-github"},
    {link: "https://www.linkedin.com/in/sebastiano-davide-alesci-609450314/", icon: "myIcon fa-brands fa-linkedin"},
    {link: "mailto:davi.alesci@gmail.com", icon: "myIcon fa-regular fa-envelope"},
  ],
  projects: [
    {
      nome: "vite-yu-gi-oh",
      link: "https://alescidavide.github.io/vite-yu-gi-oh/",
      src: "/src/assets/img/vite-yu-gi-oh.png"
    },
    {
      nome: "Dashboard bootstrap",
      link: "https://alescidavide.github.io/html-css-bootstrap-dashboard/",
      src: "/src/assets/img/Dashboard bootstrap.png"
    },
    {
      nome: "vite-comics",
      link: "https://alescidavide.github.io/vite-comics/",
      src: "/src/assets/img/vite-comics.png"
    },
  ]
});
