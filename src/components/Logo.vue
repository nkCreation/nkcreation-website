<template>
  <div>
    <img
      v-if="dark"
      src="../assets/img/logo_white.svg"
      class="dark"
      height="48"
      alt="nkCreation logo"
    />
    <img
      v-if="!dark"
      src="../assets/img/logo.svg"
      height="48"
      alt="nkCreation logo"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dark: boolean;
  }>(),
  {
    dark: false,
  }
);
</script>

<style lang="scss" scoped>
img {
  display: block;

  &.dark {
    filter: drop-shadow(0 0 16px rgba(black, 0.32));
  }
}
</style>
