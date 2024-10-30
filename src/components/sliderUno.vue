<script>
export default{
    data() {
        return{
            slides : [
                {
                    image: './src/assets/imgSliderUno/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: './src/assets/imgSliderUno/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: './src/assets/imgSliderUno/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: './src/assets/imgSliderUno/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: './src/assets/imgSliderUno/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }, {
                        image: './src/assets/imgSliderUno/06.jpg',
                        title: "Deadpool & Wolverine",
                        text: 'La Time Variance Authority strappa l\'irresponsabile eroe Deadpool dalla sua vita tranquilla, e lo mette in una missione con Wolverine che cambierà la storia del Marvel Cinematic Universe',
                    }
                ],
            activeIndex: 5,
            isActive: false,
            isAutoplayActive: true,
            autoPlayClock: null,
        }
    },
    methods:{
        /* funzione per  attivare il tasto destro*/
        eventRightActive: function(){
            if(this.activeIndex < this.slides.length-1){
                this.activeIndex++
            }else{
                this.activeIndex = 0
            }
            this.AnimationEffectFunction();
        },
        /* funzione per  attivare il tasto sinistro*/
        eventLeftActive: function(){
            if(this.activeIndex > 0){
                this.activeIndex--
            }else{
                this.activeIndex = this.slides.length-1;
            }
            this.AnimationEffectFunction();
        },
        tumblrChangeindex: function(index){
            this.activeIndex = index;
            this.AnimationEffectFunction();
        },
        
        /* animazione per l'immagine principale ad ogni cambio di immagine */
        AnimationEffectFunction: function(){
            this.isActive = true;

            setTimeout(() =>{
                this.isActive = false;
            }, 750)
        },
    },
}
</script>

<template>
    <div class="boxContainer" >
            <div class="container">
                <div @click="eventLeftActive" class="btnActive">
                    <i class="arrowActiveLeft fa-solid fa-angles-left"></i>
                </div>
                <div class="slider-wrapper" tabindex="0">
                    <div class="item">
                        <img :src="slides[activeIndex].image" :alt="slides[activeIndex].title"
                            :class="(isActive) ? 'animated' : ''" />
                        <div class="text" :class="(isActive) ? 'animated' : ''">
                            <h3>
                                {{ slides[activeIndex].title }}
                            </h3>
                            <p>
                                {{ slides[activeIndex].text }}
                            </p>
                        </div>
                    </div>
                </div>
                <div @click="eventRightActive" class="btnActive">
                    <i class="arrowActiveRight fa-solid fa-angles-right"></i>
                </div>
            </div>
            <div class="boxImgTumblr">
                <div v-for="(item, index) in slides" :key="index">
                    <img :class="(index === activeIndex) ? '' : 'biancoNero'" :src="item.image" :alt="item.title"
                        class="imgTumblr" @click="tumblrChangeindex(index)">
                </div>
            </div>
        </div>
</template>

<style lang="scss">


.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.boxContainer{
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.boxImgTumblr{
    display: flex;
}

.item {
    float: left;
    width: 700px;
    height: 300px;
    position: relative;
}

.item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px double red;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 2s ease-in-out;
}

.item .text {
    position: absolute;
    padding: 5px;
    right: 0px;
    left: 3px;
    bottom: 0px;
    text-align: right;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.65);
    background-size: 100%;
    font-weight: bold;
}

.btnActive{
    padding: .5rem;
    margin: 0 .5rem;
}

.arrowActiveRight,
.arrowActiveLeft{
    font-size: 1.5rem;
}

.imgTumblr{
    width: 60px;
    aspect-ratio: 1/1;
    margin: .1rem;
    border: 2px solid red;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    animation: tumblrMove 5s linear infinite;
}

.biancoNero{
    filter: grayscale(1);
    margin: .3rem;
    width: 50px;
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    animation: tumblrMove 0s linear;
}

.animated {
    animation: immageMovie 0.75s linear;
}

@keyframes tumblrMove {
    0%{border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;}
    14%{border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;}
    28%{border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;}
    42%{border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;}
    56%{border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;}
    70%{border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;}
    84%{border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;}
    100%{border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;}
}

@keyframes immageMovie{
    /* opacity per ottimizzazione e gradevolezza */
    0%{opacity: 0.1;}
    50%{opacity: 0.5;}
    100%{opacity: 1;}
}

</style>