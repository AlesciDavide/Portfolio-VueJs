<script>
import { store } from '../../store.js';
import sideBar from '../sideBar.vue';


export default {
    data() {
        return {
            store,
        }
    },
    components: {
        sideBar,
    },
    methods: {

    },


}
</script>

<template>
    <div class="container">

        <section>
            <sideBar />
            
        </section>
        <section class="myBody">
            <article>
                <div>
                    <h1>
                        Full Stack Web Developer
                    </h1>
                    <p></p>
                </div>

                <button class="mybutton"><a href="/cv/AlesciSebastianoDavideCV.pdf"
                        download="AlesciSebastianoDavideCV.pdf">Scarica il mio cv --></a></button>

            </article>

            <article>
                <div class="routerLink">
                    <router-link to="/project">Vedi tutti i progetti --></router-link>
                </div>
                <div>
                    <div v-for="(project, index) in store.projects.slice(0, 3)" :key="index" class="myProject">
                        <span>
                            <h3>{{ project.nome }}</h3>
                            <p></p>
                        </span>
                        <a :href="project.link">
                            <img :src="project.src" :alt="project.nome">
                        </a>
                    </div>

                </div>

            </article>
        </section>
    </div>
</template>

<style lang="scss">
.myIcon {
    font-size: 3rem;
}

.linkUl {
    display: flex;

    a:active {
        color: #4d5b7e;

        & i {

            transform: scale(0.95);
        }
    }
}

.mybutton {
    padding: 1em 2em;
    border: none;
    background-color: #2d354a;
    color: white;
    border-radius: .25rem;
    margin: 1rem 50px;
    cursor: pointer;

    a {
        font-size: 1rem;
    }
}

.mybutton:hover {
    background-color: #3b4661;
}

.mybutton:active {
    transform: scale(0.98);
}

.container {
    display: flex;
    justify-content: space-between;
}

.myBody {

    width: calc(100vw - 350px);

    overflow: scroll;
    position: relative;

    article:nth-child(1) {
        width: 100%;
        height: 35vh;
        background-color: #98a5c7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 54px;

        div {
            padding: 0 30px;
            text-align: center;

            h1 {
                font-size: 3rem;
                margin-top: .5rem;
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

    article:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #7d8eb8;

        width: 100%;
        height: fit-content;

        .routerLink {
            font-size: 2rem;
            margin-top: .5rem;
        }

        div {
            display: flex;
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
        }

        .myProject {
            width: 350px;
            height: 20vh;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            border: 2px solid black;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
            margin: 1.2rem 1rem;

            background-color: #2d354a;
            color: white;
            transition: transform 1s;

            span {
                width: 40%;
                text-align: center;
            }

            a {
                width: 60%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 95%;
                    height: 90%;
                }
            }
        }

        .myProject:hover {

            transform: scale(1.2);


        }
    }
}

/* sidebar 
/* .x{
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
            margin: 1rem ;
            width: 15%;

            .tecImg {
                margin: .4rem 0;
            }

        }
    }

}
    */
@media screen and (max-width: 800px) {
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