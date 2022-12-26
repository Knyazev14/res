<template>
  <section class="skill">
    <div class="container">
      <div class="skill-body">
        <h3 class="title">Стек технологий</h3>
        <div class="skill-items">
          <div class="skill-item">
            <h6 class="skill-item-title classik">Классический</h6>
            <div class="slill-item-body body-classik">
              <div class="skill-item-box">
                <span class="skill-item-main"> Язык программирования: </span>
                <span class="skill-item-child"> php </span>
              </div>
              <div class="skill-item-box">
                <span class="skill-item-main"> Фронтенд: </span>
                <span class="skill-item-child"> JS </span>
                <span class="skill-item-child"> jQuery </span>
              </div>
              <div class="skill-item-box">
                <span class="skill-item-main"> CMS: </span>
                <span class="skill-item-child"> wordpress </span>
              </div>
              <div class="skill-item-box">
                <span class="skill-item-main"> База данных: </span>
                <span class="skill-item-child"> mySQL </span>
              </div>
              <p class="skill-item-text">
                Подавляющее большинство сайтов сделаны на подобных технологиях.
                Легки в изучении, много готовых решений.
              </p>
            </div>
          </div>
          <div class="skill-item item-left">
            <h6 class="skill-item-title">Современный:</h6>
            <div class="slill-item-body">
              <div class="skill-item-box">
                <span class="skill-item-main"> Язык программирования: </span>
                <span class="skill-item-child"> JS </span>
              </div>
              <div class="skill-item-box">
                <span class="skill-item-main"> Фронтенд: </span>
                <span class="skill-item-child"> vue </span>
                <span class="skill-item-child"> nuxt </span>
              </div>
              <div class="skill-item-box">
                <span class="skill-item-main"> Бэкенд: </span>
                <span class="skill-item-child"> Express </span>
              </div>
              <div class="skill-item-box">
                <span class="skill-item-main"> База данных: </span>
                <span class="skill-item-child"> mongodb </span>
              </div>
              <p class="skill-item-text">
                Неограниченная функциональность. Максимальное удобство и
                скорость при разработке индивидуальных решений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {};
</script>

<style>
.skill {
  margin-bottom: 70px;
}
.skill-body {
}
.skill-items {
  display: flex;
  flex-direction: column;
}
.skill-item {
  margin-bottom: 40px;
}
.skill-item-title {
  font-size: 35px;
  border-bottom: 10px solid #42d392;
  display: inline-block;
  padding-bottom: 5px;
  margin-bottom: 30px;
  padding-right: 40px;
}
.classik {
  border-bottom: 10px solid #647eff;
}
.slill-item-body {
}
.skill-item-box {
  margin-bottom: 20px;
}
.skill-item-main {
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
}
.item-left {
  margin-left: auto;
}
.skill-item-child {
  background: #f1f1f1;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 16px;
  color: #42d392;
  font-weight: 500;
  box-shadow: 0 0 3px rgba(128, 128, 128, 0.671);
}
.skill-item-child + .skill-item-child {
  margin-left: 10px;
}
.skill-item-text {
  margin-top: 40px;
  font-size: 18px;
  line-height: 25px;
  max-width: 550px;
}
.body-classik .skill-item-child {
  color: #647eff;
}
@media (min-width: 590px) {
  .skill-item-title {
    padding-right: 70px;
  }
}
@media (min-width: 1200px) {
  .skill-items {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .skill-item-text {
    font-size: 24px;
    line-height: 32px;
  }
  .skill-item-main {
    font-size: 24px;
    font-weight: 500;
    margin-right: 10px;
  }
  .skill-item-child {
    background: #f1f1f1;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 20px;
    color: #42d392;
    font-weight: 500;
    box-shadow: 0 0 3px rgba(128, 128, 128, 0.671);
  }
}
</style>