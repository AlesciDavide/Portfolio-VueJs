import { reactive } from "vue";

export const store = reactive({
  linkHeader: ["Home", "portfolio"],
  isTrueHbMenu : false,
  iconArray: [
      { nome: "JavaScript", icon: "/img/icons-javascript.svg" },
      { nome: "PHP", icon: "/img/icons-php.svg" },
      { nome: "HTML5", icon: "/img/icons-html.svg" },
      { nome: "CSS", icon: "/img/icons-css.svg" },
      { nome: "Bootstrap", icon: "/img/icons-bootstrap.svg" },
      { nome: "SASS", icon: "/img/icons-scss.svg" },
      { nome: "VueJs", icon: "/img/icons-vuejs.svg" },
      { nome: "Laravel", icon: "/img/icons-laravel.svg" },
    
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
      src: "/img/vite-yu-gi-oh.png"
    },
    {
      nome: "Dashboard bootstrap",
      link: "https://alescidavide.github.io/html-css-bootstrap-dashboard/",
      src: "/img/Dashboard bootstrap.png"
    },
    {
      nome: "vite-comics",
      link: "https://alescidavide.github.io/vite-comics/",
      src: "/img/vite-comics.png"
    },
    
  ]
});
