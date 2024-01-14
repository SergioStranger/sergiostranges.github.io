<template>
  <nav class="navbar navbar-expand-lg d-block">
    <div class="container">
      <router-link to="/" class="navbar-brand nav-link">
        <i class="icon icon-home"></i> Nyako.<span class="select">ru</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon icon-align-justify"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="menu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="icon icon-book"></i> Блог
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="icon icon-user"></i> Профиль
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" scoped>

</style>
<script setup>
</script>
