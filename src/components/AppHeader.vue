<script>
import { store } from '../store.js';

export default {
    data() {
        return {
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
header {
    nav {
        z-index: 5;
        position: fixed;
        width: 100vw;
        
        background: linear-gradient(135deg,
                #2d354a 0%,
                #2d354a 70%,
                #7d8eb8 70%,
                #7d8eb8 100%);

        ul {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: row;

            li {
                font-size: 2rem;
                padding: .5rem 0;
                margin: 0 2rem;
            }
        }

        ;
    }
}

@media screen and (max-width: 800px){
    header{
        nav{
            background: linear-gradient(135deg,
                #2d354a 0%,
                #2d354a 20%,
                #7d8eb8 20%,
                #7d8eb8 100%);
        }
    }
}
</style>