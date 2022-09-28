<template>
  <svg class="icon" :class="'icon-' + props.symbol">
    <use :href="`#astroicon:${props.symbol}`"></use>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps<{
  symbol: string;
}>();
</script>
