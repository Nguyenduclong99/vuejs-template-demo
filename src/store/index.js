import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex);
Vue.use(axios, VueAxios);
export default new Vuex.Store(
    {
        data() {
            return {
                info: null,
            }
        },
        mounted() {
            axios.get('https://fakestoreapi.com/products').then(response => (this.info = response)) 
        },
        state:{
            username: 'longanh1199@gmail.com',
            age: 21
        },
        getters:{

        },
        mutations:{
        changeUsername(state, newUsername)
        {
            state.username = newUsername;
        }
        },
        actions:{
            handleChangeUsername(context, newUsername)
            {
                context.commit('changeUsername', newUsername);
            }
        }
    }
);
