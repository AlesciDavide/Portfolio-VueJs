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
        <h1 class="titleProject">I miei progetti</h1>
        <project />
    </section>
</template>

<style lang="scss">
.titleProject {
    text-align: center;
    height: max-content;
    width: 100vw;
    margin-top: 30px;
}
.bodyProject {

    height: calc(100vh - 54px);
     background-color: aquamarine;
    position: relative;
    display: flex;
    top: 54px;
    justify-content: center;
    flex-wrap: wrap;
}
</style>