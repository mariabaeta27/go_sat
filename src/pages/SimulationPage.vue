<template>
  <q-page class="row q-pa-xl q-page-custom">
    <TableComponent></TableComponent>
  </q-page>
</template>

<script lang="ts">
import TableComponent from 'src/components/TableComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { TableComponent },
});
</script>

<style>
.q-page-custom {
  justify-content: center;
}
</style>
