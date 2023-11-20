<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="q-pa-md">
      <q-form @submit="onSubmit" class="q-form-custom">
        <div class="inputs-custom">
          <q-input
            clearable
            clear-icon="close"
            v-model="cliente"
            label="Informe cpf para consulta"
            dense
            rounded
            outlined
            mask="###.###.###-##"
            :rules="required"
          />
          <q-input
            clearable
            clear-icon="close"
            v-model="valorSolicitado"
            label="Informe o valor solicitado"
            dense
            rounded
            outlined
            prefix="R$"
            :rules="required"
          />
          <q-input
            clearable
            clear-icon="close"
            v-model="qntParcelas"
            label="Informe a quantidade de parcelas"
            dense
            rounded
            outlined
            :rules="required"
          />
        </div>
        <div class="q-my-md">
          <q-btn label="Consultar" type="submit" color="primary" rounded />
        </div>
      </q-form>
      <q-card v-show="cardShow" class="q-ma-sm">
        <q-card-section>
          <div class="text-h6">{{ message }}</div>
        </q-card-section>
      </q-card>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormComponent',
  data() {
    return {
      cliente: '',
      valorSolicitado: '',
      qntParcelas: '',
      required: [(val: string | number) => !!val || 'Esse campo é obrigatório'],
      message: '',
      cardShow: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await fetch('http://localhost:8000/api/simulation', {
          method: 'POST',
          body: JSON.stringify({
            cliente: this.cliente,
            valorSolicitado: this.valorSolicitado,
            qntParcelas: this.qntParcelas,
          }),
        });
        const data = await response;
        console.log(data);

        if (data.status === 201) {
          this.message = 'Simulação consultado com sucesso';
          this.cardShow = true;
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          this.message = 'Falha ao consultar simulação';
          this.cardShow = true;
        }

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style scoped>
.q-form-custom {
  display: flex;
  flex-direction: column;
}
.inputs-custom {
  display: flex;

  flex-direction: column;
  max-width: 100vw;
}
</style>
