<template>
  <div>
    <MainHeader/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
  components: {
    MainHeader,
  },
};
</script>
