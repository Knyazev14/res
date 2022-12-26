import Vue from "vue"
import { ValidationProvider, ValidationObserver,  extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(vueSmoothScroll);



extend('required',{
	...required,
	message: 'Обязательноe поле'
})
extend('email',{
	...email,
	message: 'Введите email'
})
extend('min',{
	...min,
	message: 'Обязательноe поле'
})