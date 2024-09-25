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
    header{
        nav{
            
            width: 100vw;
            background-color: aqua;
            ul{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: row;
            };
        }
    }
</style>