<template>
  <div>
    <MainHeader/>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
  components: {
    MainHeader,
  },

  data() {
    return {
      transitionName: null,
    };
  },

  watch: {
    $route(to) {
      this.transitionName = !(['home', 'error'].includes(to.name)) ? 'fade' : null;
    },
  },
};
</script>

<style>
  .fade-enter-active {
    transition: opacity ease-out 0.6s, transform ease-out .3s;
  }

  .fade-leave-active {
    transition: opacity ease-in 0.5s
  }

  .fade-leave {
    opacity: 0;
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(100px);
  }
</style>
