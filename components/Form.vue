<template>
  <section class="feedback">
    <div class="container">
      <h4 class="title">Заказать услугу</h4>
      <div class="feedback__content">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form">
          <div class="form-1">
            <div class="form-1-wrap" v-if="hide">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  class="inp"
                  placeholder="Ваше имя"
                  v-model="name"
                  type="text"
                  name="name"
                />
                <span class="form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <input
                  class="inp"
                  placeholder="Ваш E-mail"
                  v-model="email"
                  type="text"
                  name="email"
                />
                <span class="form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }">
                <textarea
                  class="inp inp-text"
                  placeholder="Опишите заказ"
                  v-model="company"
                  type="text"
                  name="company"
                ></textarea>
                <span class="form__error">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="form-pol">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных
              </div>
              <input
                value="Отправить"
                type="submit"
                v-on:click="handleSubmit(sendForm)"
                class="form-1-btn"
              />
            </div>
						<span class="sended" v-if="!hide">Ваша заявка успешно отпрвлена!</span>
						<div class="done" v-if="!hide"> 
							<img src="/done.svg" alt="Отпралено">
						</div>
          </div>
        </ValidationObserver>
        <div>
          <p class="feedbak__text">
            Вы и ваши клиенты будете приятно удивлены результатам!
          </p>
          <span class="feedback__span"
            >Принимаю заказы из разных точек планеты.</span
          >
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import axios from "axios";

export default {
  data: () => ({
    name: "",
    email: "",
    company: "",
    value: "",
		hide: true
  }),

  methods: {
    sendForm() {
      let formData = {
        name: this.name,
        email: this.email,
        company: this.company,
      };
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
				
        this.name = this.company = this.email = '';

        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
      axios.post(`http://kniazey.ru`, formData);
			this.hide = false
    },
  },
};
</script>


<style>
.feedback {
}
.form-1 {
  background: #3b8070;
  padding: 25px;
  border-radius: 10px;
  display: inline-block;
  max-width: 650px;
  width: 100%;
	margin-bottom: 30px;
}
.form-1-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feedback__span {
  font-size: 18px;
  margin-top: 25px;
  display: inline-block;
}
.form-1-btn {
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  background: #42d392;
  color: white;
  text-transform: uppercase;
  align-self: flex-start;
  width: 100%;
  transition: all 0.3s ease;
	cursor: pointer;
}
.inp {
  max-width: 700px;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 35px;
  font-size: 16px;
  align-self: flex-start;
}
.inp-text {
  height: 174px;
}
.form-pol {
  margin-bottom: 30px;
  font-size: 14px;
  color: white;
  line-height: 18px;
  max-width: 400px;
  text-align: center;
}
.feedback__content {
  display: flex;
	 flex-direction: column;
  align-items: center;
}
.feedbak__text {
  font-size: 24px;
  line-height: 30px;
  max-width: 500px;
  display: flex;
  align-items: center;
  font-weight: 700;
}
.form-new {
}
.form-1-wrap span {
  display: block;
  width: 100%;
}
.form__error {
  font-size: 18px;
  color: rgb(241, 29, 29);
  margin-bottom: 10px;
  font-weight: 500;
  margin-top: -30px;
}
.sended{
	font-size: 38px;
	text-align: center;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
}
.done{
	margin-top: 30px;
	display: flex;
	justify-content: center;
}
@media(min-width: 590px){
	.feedbak__text {
 	 font-size: 38px;
 	 line-height: 48px;
}
.form-1-btn {
  font-size: 20px;
}
.form-pol {
  font-size: 18px;
  line-height: 22px;
}
.feedback__span {
  font-size: 20px;
}
.inp {
  padding: 20px;
  font-size: 20px;
}
.form-1 {
  padding: 70px 60px 70px 60px;
}
}
@media (min-width: 1100px){
	.feedback__content {
  display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.form-1 {
  padding: 70px 60px 70px 60px;
}
}
</style>