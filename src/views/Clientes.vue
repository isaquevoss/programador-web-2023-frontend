<template>
  <v-container>
    <v-card>
      <v-card-content>
        <v-row justify="end">
          <v-col
            ><v-btn @click="$router.push('/clientes/cadastrar')"
              >Novo Cliente</v-btn
            ></v-col
          >
        </v-row>
        <v-row>
          <v-col>
            <v-data-table :items="clientes" :headers="headers">
              <template v-slot:item.actions="{ item }">
                <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                  mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteItem(item.raw)">
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card-content>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  components: {
    VDataTable: VDataTable,
  },
  mounted() {
    this.buscarClientes();
  },
  data() {
    return {
      clientes: [],
      headers: [
        {
          title: "Id",
          key: "id",
        },
        {
          title: "Nome",
          key: "nome",
        },
        {
          title: "Sobrenome",
          key: "sobrenome",
        },
        {
          title: "Idade",
          key: "idade",
        },
        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
  methods: {
    buscarClientes() {
      axios
        .get("http://localhost:3000/clientes", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.clientes = response.data;
        });
    },
    editItem(item) {
      this.$router.push(`/clientes/${item.id}`);
    },
    async deleteItem(item) {
      console.log(item.raw)
      await axios
        .delete(`http://localhost:3000/clientes/${item.id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        this.buscarClientes();
    },
  },
};
</script>
