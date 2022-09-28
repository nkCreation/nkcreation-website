<template>
  <figure>
    <blockquote>
      <p>
        <slot />
      </p>
    </blockquote>
    <figcaption v-if="author">{{ author }}</figcaption>
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  author?: string;
}>();
</script>

<style lang="scss" scoped>
@import "../assets/scss/conf";

figure {
  --background-scale: 1;

  display: block;
  margin: 8em 0 10em;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    background-image: url("../assets/img/quote.svg");
    width: 75.3rem;
    height: 71.7rem;
    background-size: contain;
    transform: translate(-56%, -40%) scale(var(--background-scale));
  }

  @include breakpoint($tablet) {
    --background-scale: 0.8;
  }

  @include breakpoint($bigPhone) {
    --background-scale: 0.6;
  }
}

blockquote {
  font-size: 4.8rem;
  font-size: autoclamp(2.8rem, 4.8rem);
  margin: 0;
  padding: 0;
  font-family: var(--font-family-title);
  font-weight: 300;
  color: var(--nk-color1);
  letter-spacing: calc(-20em / 1000);
  line-height: 1.3;

  &::before,
  &::after {
    position: absolute;
    font-size: 16rem;
    color: var(--nk-color2);
    font-weight: 300;
    line-height: 1;
    padding: 0 0.1em;
    opacity: 0.4;
  }
  &::before {
    content: "“";
    top: -2rem;
    right: 100%;
  }
  &::after {
    content: "”";
    left: 100%;
    top: calc(100% - 8rem);
  }

  p {
    font: inherit;
    margin: 0;
  }
}

figcaption {
  font-size: autoclamp(1.6rem, 2.4rem);
  margin-top: 1.6rem;
}
</style>
