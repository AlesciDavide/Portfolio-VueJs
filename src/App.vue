<script>
import AppHeader from './components/AppHeader.vue'
import sliderUno from './components/sliderUno.vue'
import AppMain from './components/homepage/AppMain.vue';
import AppJumbo from './components/homepage/AppJumbo.vue';

export default{
  components:{
    AppHeader,
    sliderUno,
    AppMain,
    AppJumbo,

  },
    data() {
        return{
            
        }
    }
}
</script>

<template>
  <AppHeader />
  <AppJumbo />
  <Router-view></Router-view>

</template>

<style lang="scss">
@import url("/styles/general.scss");


</style>