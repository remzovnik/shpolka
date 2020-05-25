<template>
  <main class="v-authors">
    <div class="container">
      <h1 class="page-title">Авторы</h1>
      <div class="v-authors__grid">
        <div>
          <c-author-card></c-author-card>
        </div>
        <div>
          <c-author-card></c-author-card>
        </div>
        <div>
          <c-author-card></c-author-card>
        </div>
        <div>
          <c-author-card></c-author-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CAuthorCard from '@/components/AuthorCard.vue';

export default {
  name: 'VAuthors',

  components: {
    CAuthorCard,
  },
};
</script>

<style lang="scss">

</style>
