<template>
  <div>
    <h1 :class="{ 'has-subtitle': hasSubtitle }">
      <slot name="title">{{ title }}</slot>
    </h1>
    <p v-if="hasSubtitle" class="subtitle">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";

const props = defineProps<{
  title: string;
  subtitle?: string;
}>();

const slots = useSlots();
const hasSubtitle = computed(() => {
  return (
    props.subtitle || (slots?.subtitle?.length && slots.subtitle.length > 0)
  );
});
</script>

<style scoped>
.subtitle {
  width: calc(var(--background-gutter-size) * 5);
}
</style>
