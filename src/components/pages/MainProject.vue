<script>
import { store } from '../../store.js';
import Project from '../projectComponents/project.vue';



export default {
    data() {
        return {
            store,

        }
    },
    components: {
        Project,
    },
}
</script>

<template>
    <section class="bodyProject">
        <project />
    </section>
</template>

<style lang="scss">
.bodyProject {
    
    height: calc(100vh - 54px);
   /*  background-color: white; */
    top: 54px;
    position: relative;

}
</style>