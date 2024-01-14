<template>
  <div class="row">
    <div class="wrapper col-12 col-lg-8 my-auto">
      <h1 class="wrapper-title tag"><span id="title"></span></h1>
      <p class="wrapper-description"><span id="desc"></span></p>

      <figure>
        <blockquote class="blockquote">
          <p>Sergio Stranger</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Специалист по информационным системам
        </figcaption>
      </figure>

      <ul class="navbar-nav d-flex flex-row gap-4">
        <li class="nav-item">
          <a class="nav-link" href="https://vk.com/havename" target="_blank">
            <img src="@/assets/images/vk.svg" alt="vk">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/SergioStranger" target="_blank">
            <img src="@/assets/images/git.svg" alt="github">
          </a>
        </li>
<!--        <li class="nav-item">-->
<!--          <a class="nav-link" href="mailto:nyako.ru">-->
<!--            mail<span class="select">@nyako.ru</span>-->
<!--          </a>-->
<!--        </li>-->
      </ul>
    </div>
    <img class="d-none d-lg-block col-lg-4" src="@/assets/images/Magic.png" alt="Magic">
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "ContactsView",
  data() {
    return {
      typedInstance: null,
      isSkip: false
    }
  },
  methods: {
    initTyped(item, text) {
      const options = {
        strings: text,
        typeSpeed: 20,
        backSpeed: 10,
        showCursor: true,
        cursorChar: ' _',
        onComplete: (self) => {
          if (item === '#title') {
            this.initTyped('#desc', [
              `Портал проброшен, телепатическая связь по шлюзу доступна. Связаться со мной можно лишь тем, кто обладает
              особой силой`
            ]);
          }
          // Скрываем курсор, если текущий элемент не '#space'
          if (item !== '#space') {
            self.cursor.hidden = true;
          }
        },
      };

      this.typedInstance = new Typed(item, options)
      return this.typedInstance
    },
    spaceKey(event) {
      if (event.key === ' ' && this.isSkip) {
        this.$router.push('projects')
        console.log('редирект')
      }
    }
  },
  mounted() {
    this.initTyped('#title', ['Котнактная связь'])

    document.addEventListener('keydown', this.spaceKey)
  },
  beforeUnmount() {
    this.typedInstance.destroy()
    document.removeEventListener('keydown', this.spaceKey)
  }
}
</script>

<style scoped lang="sass">

</style>
