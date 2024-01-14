<template>
  <div class="row">
    <div class="wrapper col-lg-7 my-auto">
      <h1 class="wrapper-title tag"><span id="title"></span></h1>
      <p class="wrapper-description"><span id="desc"></span></p>
      <p href="#" class="wrapper-continue"><span id="space"></span></p>
    </div>
    <img class="d-none d-lg-block col-lg-5" src="@/assets/images/portal.png" alt="Portal">
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: 'HomeView',
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
              `Ты в странном месте, где домен не соотвествует тематике
          веб-сайта, а сам дизайн оставляет желать лучшего.
          Теперь все зависит от тебя, оставаться здесь или уйти.<br>
          Выбор за тобой.`
            ]);
          } else if (item === '#desc') {
            this.initTyped('#space', ['Жмяк ‘space’ чтобы продолжить']);
            this.isSkip = true
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
      if (event.key ===  ' ' && this.isSkip) {
        this.$router.push('projects')
        console.log('редирект')
      }
    }
  },
  mounted() {
    this.initTyped('#title', ['Ghbdtn!', 'Привет!'])

    document.addEventListener('keydown', this.spaceKey)
  },
  beforeUnmount() {
    this.typedInstance.destroy()
    document.removeEventListener('keydown', this.spaceKey)
  }
}
</script>
