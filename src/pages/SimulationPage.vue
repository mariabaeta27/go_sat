<template>
  <q-page class="row items-center justify-evenly">
    <SimulationsTable></SimulationsTable>
  </q-page>
</template>

<script lang="ts">
import SimulationsTable from 'src/components/SimulationsTable.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { SimulationsTable },
});
</script>
