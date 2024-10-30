<script>
import { store } from '../../store.js';
import Project from '../projectComponents/project.vue';
import sideBar from '../sideBar.vue';




export default {
    data() {
        return {
            store,

        }
    },
    components: {
        Project,
        sideBar,
    },
}
</script>

<template>
<sideBar />
    <section class="bodyProject">
        <h1 class="titleProject">I miei progetti</h1>
      
            <project />
        
    </section>
</template>

<style lang="scss" scoped>
.titleProject {
    text-align: center;
    height: max-content;
    width: 100vw;
    margin-top: 30px;
}
.bodyProject {

    height: calc(100vh - 54px);
    position: relative;
    display: flex;
    top: 54px;
    justify-content: center;
    
    flex-wrap: wrap;
}
.sideBar{
    display: none;
}
@media screen and (max-width: 800px){
    
    .sidebarMobile{
    display: block;
    animation: hb 0.4s linear;
}
}
</style>