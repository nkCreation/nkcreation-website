<template>
  <component :is="tag" v-bind="componentProps"><slot /></component>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color?: string;
    type?: string;
    href?: string;
  }>(),
  {
    color: "primary",
    type: "button",
    href: "",
  }
);

const isExternalLink = computed(() => {
  return !!props.href.startsWith("http");
});

const tag = computed(() => {
  return props.href ? "a" : "button";
});

const componentProps = computed(() => {
  return {
    type: props.type,
    class: classesNames.value,
    href: props.href || null,
    target: props.href && isExternalLink.value ? "_blank" : "_self",
  };
});

const classesNames = computed(() => {
  return `nk-button nk-button--${props.color}`;
});
</script>

<style lang="scss" scoped>
.nk-button {
  --nk-button-color: white;
  --nk-button-background: linear-gradient(
    to bottom right,
    var(--nk-color2) 0%,
    var(--nk-color1) 100%
  );
  --nk-button-active-color: var(--nk-button-color);
  --nk-button-active-background: var(--nk-button-background);
  --nk-button-shadow-color: rgba(var(--nk-color1-rgb), 0.16);
  --nk-button-shadow-property: 0 4px 32px;

  cursor: pointer;
  text-decoration: none;
  appearance: none;
  outline: none;
  border: 0;
  padding: 0 2em;
  width: auto;
  height: 2.4em;
  border-radius: 2em;
  color: var(--nk-button-color);
  font-weight: 600;
  letter-spacing: calc(-16em / 1000);
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--nk-button-background);
  box-shadow: var(--nk-button-shadow-property) var(--nk-button-shadow-color);

  &--white {
    --nk-button-shadow-color: rgba(255, 255, 255, 0.16);
    --nk-button-color: var(--nk-color1);
    --nk-button-background: #fff;
  }
}
</style>
