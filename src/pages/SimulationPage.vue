<template>
  <q-page class="row q-pa-xl">
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
