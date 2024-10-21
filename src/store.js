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
});
