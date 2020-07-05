<template>
  <main class="v-error">
    <div class="container">
    <div class="v-error__text">
      Такой страницы нет!<br>
      Зато можно...
    </div>
    <router-link class="v-error__back-btn" :to="{name: 'home'}">
      Вернуться на главную
    </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'VError',
};
</script>

<style lang="scss">
.v-error {
  padding: 80px 0;

  &__text {
    font-size: 24px;
  }

  &__back-btn {
    font-size: 20px;
  }
}
</style>
