<template>
  <div>
    <q-table
      title="Simulações"
      :rows="rows"
      :columns="columns"
      row-key="name"
      style="max-width: 800vw"
      no-data-label="Não há simulações salvas no banco!"
      :loading="loading"
    >
      <template v-slot:body="props">
        <q-tr :props="props" class="">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>

          <q-td key="cliente" :props="props">
            {{ props.row.cliente }}
          </q-td>

          <q-td key="valorSolicitado" :props="props">
            {{ props.row.valorSolicitado }}
          </q-td>

          <q-td key="qntParcelas" :props="props">
            {{ props.row.qntParcelas }}
          </q-td>

          <q-td key="simulacoes" :props="props" style="white-space: normal">
            <div
              v-for="simulacao in props.row.simulacoes"
              :key="simulacao.modalidadeCredito"
            >
              <div v-if="typeof simulacao !== 'string'">
                <p>
                  <span class="text-weight-bold">
                    Instituição financeira:
                  </span>
                  {{ simulacao.instituicaoFinanceira }} -
                  <span class="text-weight-bold"> Modalidade: </span>
                  {{ simulacao.modalidadeCredito }} -
                  <span class="text-weight-bold"> Valor a pagar: </span
                  >{{ simulacao.valorApagar }} -
                  <span class="text-weight-bold"> Taxa de Juros:</span>
                  {{ simulacao.taxaJuros }}
                </p>
                <p></p>
              </div>
              <div v-else>
                {{ simulacao }}
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { cpf } from 'cpf-cnpj-validator';
import { defineComponent } from 'vue';
import { Simulations, Rows } from './models';
export default defineComponent({
  name: 'SimulationTable',

  data() {
    return {
      simulations: [],
      columns: [
        {
          name: 'id',
          label: 'Id',
          field: 'id',
          sortable: true,
        },
        {
          name: 'cliente',
          label: 'Cliente',
          field: 'cliente',
        },
        {
          name: 'valorSolicitado',
          label: 'Valor solicitado',
          field: 'valorSolicitado',
        },
        {
          name: 'qntParcelas',
          label: 'Quant. parcelas',
          field: 'qntParcelas',
        },
        {
          name: 'simulacoes',
          label: 'Simulações',
          field: 'simulacoes',
          style: 'width: 500px',
          headerStyle: 'width: 100px',
        },
      ],
      rows: <Rows[]>[],
      loading: false,
    };
  },

  mounted() {
    this.fetchApi();
  },
  methods: {
    async fetchApi() {
      try {
        this.loading = true;
        const response = await fetch('http://localhost:8000/api/simulation');
        const data = await response.json();
        this.simulations = data;

        this.formattedRows(data);

        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    formattedRows(data: Simulations[]) {
      this.rows = data.map((item) => {
        return {
          id: item.id,
          cliente: cpf.format(item.cliente),
          valorSolicitado: `R$ ${item.valorSolicitado}`,
          qntParcelas: item.qntParcelas,
          simulacoes: item.simulacoes,
        };
      });
    },
  },
});
</script>

<style></style>
