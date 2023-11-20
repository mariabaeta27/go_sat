<template>
  <q-page class="q-pa-xl">
    <div class="q-ma-md absolute-top-right">
      <q-btn
        label="Consultar simulação"
        type="button"
        color="primary"
        rounded
        @click="drawerOpen = !drawerOpen"
      />
    </div>
    <div class="q-ma-md form-custom">
      <FormComponent v-if="drawerOpen" />
    </div>
    <TableComponent></TableComponent>
  </q-page>
</template>

<script lang="ts">
import TableComponent from 'src/components/TableComponent.vue';
import FormComponent from 'src/components/FormComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { TableComponent, FormComponent },

  data() {
    return {
      drawerOpen: false,
    };
  },

  methods: {
    closeDrawer() {
      this.drawerOpen = false;
    },
  },
});
</script>

<style>
.form-custom {
  display: flex;

  justify-content: center;
}
</style>
