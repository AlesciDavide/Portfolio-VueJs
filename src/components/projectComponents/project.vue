<script>
import { store } from '../../store.js';


export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <h1 class="titleProject">I miei progetti</h1>

    <article v-for="(project, index) in store.projects" :key="index">
        <div>
            <h1>{{ project.nome }}</h1>
            <p>paragrafo del progetto Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum, quos assumenda
                delectus tempora soluta. Dolore quos a ratione est, doloremque ipsa repellendus aut nihil numquam nemo
                rem, incidunt vitae.</p>
        </div>
        <div>

            <img :src="project.src" :alt="project.nome">

        </div>
    </article>
    <!-- <iframe src="https://alescidavide.github.io/html-css-bootstrap-dashboard/" frameborder="0"></iframe> -->
</template>

<style lang="scss" scoped>
.titleProject {
    text-align: center;
    padding: 1rem 0;
}

article {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 20vh;
    width: 100vw;
    margin-bottom: 1rem;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;

    div:nth-child(1) {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 1rem;

        p {
            overflow: hidden;
            /* make sure it hides the content that overflows */

            text-overflow: ellipsis
        }
    }

    div:nth-child(2) {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            height: 80%;
            display: flex;
            justify-content: center;

        }

    }
}

article:nth-child(2n+2) {
    background-color: #7d8eb8;
}
</style>