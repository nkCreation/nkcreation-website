<template>
  <nav class="menu" :class="{ 'is-dark': dark }">
    <ul class="menu__list">
      <li class="menu__item menu__item--icon">
        <a
          class="menu__link menu__link--icon"
          href="https://github.com/nkCreation/"
          target="_blank"
          rel="noopener noreferrer"
          ><Icon symbol="github" /><span>GitHub</span></a
        >
      </li>
      <li class="menu__item menu__item--icon">
        <a
          class="menu__link menu__link--icon"
          href="https://twitter.com/nkcreationweb"
          target="_blank"
          rel="noopener noreferrer"
          ><Icon symbol="twitter" /><span>Twitter</span></a
        >
      </li>
      <li class="menu__item">
        <a class="menu__link" href="/services/">Services</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="/projects/">Projects</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="/contact/">Contact</a>
      </li>
      <li class="menu__item">
        <a
          target="_blank"
          class="menu__link menu__link--external"
          href="https://www.nicolasleport.fr/"
          >Blog <Icon symbol="external" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Icon from "./Icon.vue";

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
@import "../assets/scss/conf";

.menu {
  color: inherit;

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;

    @supports (gap: 2em) {
      gap: 2em;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;

    @supports (gap: 2em) {
      margin: 0;
    }

    &--icon {
      padding: 0.5em;
      font-size: autoclamp(1.6rem, 1.8rem);

      svg {
        stroke-width: 0;
      }
    }

    &--icon span {
      font-size: 0;
      pointer-events: none;
    }
  }

  &__item {
    margin: 0 2em;
    font-family: var(--font-family-title);
    letter-spacing: 0;
    font-size: autoclamp(2rem, 2.4rem);

    @supports (gap: 2em) {
      margin: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &--icon {
      margin: 0;
    }

    .icon-external {
      width: 0.5em;
      height: 0.5em;
      stroke-width: 1;
      margin: 0.25em;
      transform: translateY(-50%);
    }
  }
}
</style>
