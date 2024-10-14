<script>
import AppHeader from './components/AppHeader.vue'
import sliderUno from './components/sliderUno.vue'
import AppMain from './components/homepage/AppMain.vue';


export default{
  components:{
    AppHeader,
    sliderUno,
    AppMain,


  },
    data() {
        return{
            
        }
    }
}
</script>

<template>
  
  <Router-view></Router-view>

</template>

<style lang="scss">
@import url("/styles/general.scss");


</style>