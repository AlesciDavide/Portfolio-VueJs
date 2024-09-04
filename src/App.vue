<script>
import AppHeader from './components/AppHeader.vue'
import sliderUno from './components/sliderUno.vue'
import AppMain from './components/pages/AppMain.vue';

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
  <AppHeader />
  <Router-view></Router-view>

</template>

<style scoped>

</style>