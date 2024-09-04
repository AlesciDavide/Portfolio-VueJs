<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
        }
    },

}
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>

                    <router-link to="/project">Project</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>