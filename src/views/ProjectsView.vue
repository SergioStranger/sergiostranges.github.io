<template>
  <div class="row">
    <img src="@/assets/images/Clouds.png" alt="Clouds">
    <div class="wrapper">
      <h1 class="wrapper-title tag"><span id="title"></span></h1>
      <p class="wrapper-description"><span id="desc"></span></p>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link tag" href="#">
            Hooks.js
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link tag" href="#">
            DiscordWebhooks
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link tag" href="#">
            Game-on-unity
          </a>
        </li>
      </ul>
      <p href="#" class="wrapper-continue"><span id="space"></span></p>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: 'ProjectView',
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
              `Буду краток, тут покоются, все мои надежды и несбывшиеся мечты.`
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
      if (event.key === ' ' && this.isSkip) {
        this.$router.push('about')
        console.log('редирект')
      }
    }
  },
  mounted() {
    this.initTyped('#title', ['Кладбище несбывшихся надежд'])

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
