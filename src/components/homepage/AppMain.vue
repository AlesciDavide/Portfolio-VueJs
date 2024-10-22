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
        </section>
        <section class="myBody">
            <article>
                <div>
                    <h1>
                        Full Stack Web Developer
                    </h1>
                    <p></p>
                </div>

                <button class="mybutton"><a href="/src/assets/AlesciSebastianoDavideCV.pdf" download="AlesciSebastianoDavideCV.pdf">Scarica il mio cv --></a></button>

            </article>
            
            <article>
                <div class="routerLink">
                    <router-link to="/project">Vedi tutti i progetti --></router-link>
                </div>
                <div>
                    <div class="myProject">
                        <span>
                            <h3>vite-yu-gi-oh</h3>
                            <p>progetto vite yo-gi-oh</p>
                        </span>
                        <a href="https://alescidavide.github.io/vite-yu-gi-oh/">
                            <img src="/src/assets/img/vite-yu-gi-oh.png" alt="vite-yu-gi-oh">
                        </a>
                    </div>
                    <div class="myProject">
                        <span>
                            <h3>Dashboard bootstrap</h3>
                            <p></p>
                        </span>
                        <a href="https://alescidavide.github.io/html-css-bootstrap-dashboard/">
                            <img src="/src/assets/img/Dashboard bootstrap.png" alt="Dashboard bootstrap">
                        </a>
                    </div>
                    <div class="myProject">
                        <span>
                            <h3>vite-yu-gi-oh</h3>
                            <p></p>
                        </span>
                        <a href="https://alescidavide.github.io/vite-yu-gi-oh/">
                            <img src="/src/assets/img/vite-yu-gi-oh.png" alt="vite-yu-gi-oh">
                        </a>
                    </div>

                </div>
                
            </article>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.myIcon{
    font-size: 3rem;
}
.linkUl{
    display: flex;
    a:active{
        color: #4d5b7e;
        & i{

            transform: scale(0.95);
        }
    }
}
.mybutton{
    padding: 1em 2em;
    border: none;
    background-color: #2d354a;
    color: white;
    border-radius: .25rem;
    margin: 1rem 50px;
    cursor: pointer;
    a{
        font-size: 1rem;
    }
}
.mybutton:hover{
    background-color: #3b4661;
}
.mybutton:active{
    transform: scale(0.98);
}
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
        height: 35vh;
        background-color: #98a5c7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
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
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #7d8eb8;
        flex-wrap: wrap;
        width: 100%;
        height: fit-content;
        .routerLink{
                font-size: 2rem;
                margin-top: .5rem;
        }
        div{
            display: flex;
        }
       /*  div:nth-child(1) {
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            width: 25%;
            rotate: 2deg;
            a{
                img{
                    width: 80%;
                }
            }
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
        } */
        .myProject{
            width: 400px;
            height: 20vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: 2px solid black;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            margin: 1rem;
            background-color: #2d354a;
            color: white;
            transition: transform 1s;

            a{
                width: 60%;
                img{
                    width: 100%;
                }
            }
        }
        .myProject:hover{

            transform: scale(1.2);
            
    
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
        a{
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