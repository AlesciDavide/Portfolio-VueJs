<script>
import { store } from '../../store.js';


export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <section>
        <article class="jumbo">
            <div>
                <h1>Profilo</h1>
                <p>
                    Ho recentemente completato un
                    master intensivo in
                    programmazione full stack web
                    development, consolidando le mie
                    basi in matematica e informatica
                    acquisite durante gli studi in
                    ingegneria elettronica (esami di
                    Analisi 1 e Informatica). Ho
                    esperienza come inventarista e
                    team leader, ruoli in cui ho gestito
                    con successo squadre di lavoro per
                    diversi negozi nella mia città. Sono
                    ora alla ricerca di opportunità per
                    applicare le mie competenze
                    tecniche e gestionali nel settore
                    dello sviluppo web.
                </p>
            </div>
            <div>
                <img src="../../assets/imgJumboHome/imgProfile.png" alt="">
            </div>
            <div></div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: linear-gradient(#9F8DA6, #AF9BB7);
    height: calc(60vh - 55px);

    article.jumbo {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            width: 33vw;
        }

        div:nth-child(1) {
            h1 {
                text-align: center;
                font-size: 2.5rem;
                color: white;
                margin-bottom: 1rem;
            }

            p {
                text-align: justify;
                line-height: 1.5rem;
                font-size: 1.2rem;
            }

            padding: 0 30px;
        }

        div:nth-child(2) {
            height: 100%;

            img {
                height: 300px;
                width: 300px;
                background-color: #FFFFFF;
                position: relative;
                box-shadow: 0px 0px 10px 2px #e4d9e9;
                border-radius: 50%;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    section {
        article.jumbo {
            flex-direction: column;

            div {
                width: 100vw;

                div:nth-child(1) {
                    order: 2;
                }

                div:nth-child(2) {
                    order: 1;
                    justify-content: center;
                    display: flex;
                }

                div:nth-child(3) {
                    order: 3;
                }
            }
        }
    }
}
</style>