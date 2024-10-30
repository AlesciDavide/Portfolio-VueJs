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
    <article class="sideBar" :class="(store.isTrueHbMenu == true) ? 'sidebarMobile' : ''">
        <div>
            <span>
                <article class="x">x</article>
                <img class="imgProfilo" src="/img/imgProfilo.png" alt="">
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
                <ul class="linkUl">
                    <li v-for="social in store.linkSocial" :key="social.link">
                        <a :href="social.link"><i :class="social.icon"></i></a>
                    </li>
                </ul>

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
</template>

<style lang="scss">
.x {
    display: none;
}

.sideBar {
    width: 350px;
    height: 100vh;
    position: fixed;
    z-index: 6;
    top: 0;
    display: flex;
    justify-content: center;
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
    width: 100%;
    padding: 2rem 20px;

    span:first-child {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 1.6rem;
            text-align: start;

        }

    }

    span:last-child {

        h2 {
            margin-bottom: .5rem;
        }

        a {
            margin: 0 1rem;
        }
    }

    p {
        font-size: 1.1rem;
        text-align: start;
    }
}

.sideBar div:last-child {
    height: 25vh;
    width: 100%;

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
            margin: 1rem;
            width: 15%;

            .tecImg {
                margin: .4rem 0;
            }

        }
    }

}

@media screen and (max-width: 800px) {
    .sideBar {
        display: none;
        width: 100vw;

    }

    .imgProfilo {
        width: 30%;
    }

    .sideBar div:last-child {
        height: 30vh;
        width: 100%;

        background-color: #1f2231;
    }

    .sideBar div:first-child {
        height: 70vh;
        width: 100%;
        padding: 1.5rem 20px;

        span:first-child {

            img {
                margin-bottom: .5rem;
            }

            h1 {
                font-size: 1.2rem;
                text-align: start;

            }

        }

        span:last-child {

            h2 {
                margin-bottom: .5rem;
            }

            a {
                margin: 0 1rem;
            }
        }

        p {
            font-size: .9rem;
            text-align: start;

        }
    }

    .sidebarMobile {
        display: block;
        animation: hb 0.4s linear;
    }

    @keyframes hb {

        0% {
            opacity: 0.1;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }

    .myBody {
        width: 100vw;

        article:nth-child(2) {
            .myProject {

                margin: 1rem 0;
            }

            .myProject:hover {

                transform: scale(1);


            }
        }

    }
}
</style>