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
    <section>
        <article class="sideBar">
            <div>
                <img class="imgProfilo" src="/src/assets/img/imgProfilo.png" alt="">
                <span>
                    <h1>Sebastiano Davide Alesci</h1>

                    <!-- <h2>JR FULL-STACK WEB DEVELOPER</h2> -->

                </span>
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

            </div>
            <div>
                <h2>Tecnologie</h2>
                <span  v-for="tec in store.iconArray" :key="tec">
                    <img class="tecImg" :src="tec" alt="" >
                </span>
                
            </div>
        </article>
        <article class="myBody">

        </article>
    </section>
</template>

<style lang="scss" scoped>
.sideBar {
    width: 30vw;
    height: 100vh;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: white;
}
.imgProfilo{
    width: 50%;
    border-radius: 10%;
    filter: drop-shadow(12px 8px 10px white);
}
.tecImg{
    height: 20px;
    aspect-ratio: 1/1;
}
.sideBar div:first-child{
    background-color: #2d354a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    width: 30vw;
    padding: 0 20px;
    span{
        h1{
            font-size: 2rem;
            text-align: start;
            margin-bottom: 20px;
        }
      
    }
    p{
        font-size: 1.2rem;
        text-align: start;
    }
}
.sideBar div:last-child{
    width: 30vw;
    height: 30vh;
    
    background-color: #1f2231;
}
</style>