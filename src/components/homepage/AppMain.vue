<script>
import { store } from '../../store.js';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    }

}
</script>

<template>
    <div class="container">

        <section>
            <article class="sideBar">
                <div>
                    <span>
                        <img class="imgProfilo" src="/src/assets/img/imgProfilo.png" alt="">
                        <h1>Sebastiano Davide Alesci</h1>

                        <!-- <h2>JR FULL-STACK WEB DEVELOPER</h2> -->

                    </span>
                    <span>

                        <h2>Profilo</h2>
                        <p>Sono un Jr. Full Stack Web
                            Developer con la passione per lo
                            sviluppo web, durante il mio
                            percorso ho consolidato le mie basi
                            in matematica e informatica
                            acquisite durante gli studi in
                            ingegneria elettronica. Ho
                            esperienza come inventarista e
                            team leader, ruoli in cui ho gestito
                            con successo squadre di lavoro per
                            diversi negozi nella mia città. Sono
                            ora alla ricerca di opportunità per
                            applicare le mie competenze
                            tecniche e gestionali nel settore
                            dello sviluppo web.</p>
                    </span>
                    <span>
                        <h1>link</h1>
                    </span>

                </div>
                <div class="myTec">
                    <h2>Tecnologie</h2>
                    <div>
                        <span class="boxTec" v-for="tec in store.iconArray" :key="tec">
                            <p> {{ tec.nome }}</p>
                            <img class="tecImg" :src="tec.icon" :alt="tec.nome">
                        </span>
                    </div>

                </div>
            </article>
        </section>
        <section class="myBody">
            <article>
                <div>
                    <h1>
                        Full Stack Web Developer
                    </h1>
                    <p>Sono un Jr. Full Stack Web Developer con la passione per lo sviluppo web, durante il mio percorso
                        ho consolidato le mie basi in matematica e informatica acquisite durante gli studi in ingegneria
                        elettronica. Ho esperienza come inventarista e team leader, ruoli in cui ho gestito con successo
                        squadre di lavoro per diversi negozi nella mia città. Sono ora alla ricerca di opportunità per
                        applicare le mie competenze tecniche e gestionali nel settore dello sviluppo web.</p>
                </div>

                <!-- <img src="/src/assets/img/imgProfiloS.png" alt=""> -->

            </article>
            <article>
                <div>

                </div>
                <div></div>
                <div></div>
                <div></div>
            </article>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
}

.myBody {
    margin-top: 50px;
    height: calc(100vh - 50px);
    width: calc(100% - 350px);
    overflow: scroll;
    position: relative;

    & article:nth-child(1) {
        width: 100%;
        height: 40vh;
        background-color: #98a5c7;
        display: flex;
        justify-content: space-around;
        justify-content: center;
        align-items: center;
        position: relative;

        div {
            padding: 0 50px;

            h1 {
                font-size: 3rem;
            }

            p {
                width: 70%;
                font-size: 1.3rem;
            }
        }

        img {
            width: 100%;
            /* margin-bottom: 1rem; */
            margin-right: 4rem;

            filter: drop-shadow(12px 8px 10px white);
        }

    }

    & article:nth-child(2) {
        display: flex;
        position: absolute;
        top: 37vh;
        right: 0;
        height: 20vh;
        width: 100%;

        div:nth-child(1) {
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            width: 25%;
            rotate: 2deg;
        }

        div:nth-child(2) {
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            width: 25%;
            rotate: -2deg;
        }

        div:nth-child(3) {
            rotate: 2deg;
            width: 25%;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        div:nth-child(4) {
            rotate: -2deg;
            width: 25%;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }
}

.sideBar {
    width: 350px;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: white;
}

.imgProfilo {
    width: 50%;
    border-radius: 50%;
    background-color: #1f2231;
    filter: drop-shadow(12px 8px 10px white);
}

.tecImg {
    height: 30px;
    aspect-ratio: 1/1;
}

.sideBar div:first-child {
    background-color: #2d354a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 75vh;
    width: 350px;
    padding: 2rem 20px;

    span:first-child {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
            margin-bottom: .5rem;
        }

        h1 {
            font-size: 1.8rem;
            text-align: start;

        }

    }

    span:last-child {
        h2 {
            margin-bottom: .5rem;
        }
    }

    p {
        font-size: 1.1rem;
        text-align: start;
    }
}

.sideBar div:last-child {
    height: 25vh;
    width: 350px;

    background-color: #1f2231;
}

.myTec {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
        padding: 1rem 0;
        text-align: center;
    }

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        span {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 1rem ;
            width: 15%;

            .tecImg {
                margin: .4rem 0;
            }

        }
    }

}
</style>