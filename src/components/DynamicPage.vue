<template>
  <div class="content">
    <div v-html="htmlContent"></div>
  </div>
</template>

<script lang="ts" setup>
import { useEditorjs } from "../composables/useEditorjs";

const props = defineProps<{
  page: any;
}>();

const { createHTML } = useEditorjs();

const htmlContent = createHTML(props.page?.content?.blocks || []);
</script>
