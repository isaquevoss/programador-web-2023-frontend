<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1>Novo Cliente</h1>
          </v-card-title>
          <v-card-content>
            <v-container>
              <v-row justify="center">
                <v-col>
                
                  <v-text-field
                    label="Nome"
                    v-model="cliente.nome"
                  ></v-text-field>
                  <v-text-field
                    label="Sobrenome"
                    v-model="cliente.sobrenome"
                  ></v-text-field>
                  <v-text-field
                    label="Idade"
                    v-model="cliente.idade"
                  ></v-text-field>
                  
                </v-col>
               
              </v-row>
              <v-row justify="center">
                  <v-col>
                    <v-btn @click="cadastrar">Cadastrar</v-btn>
                  </v-col>
                </v-row>
            </v-container>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  components: {
    VDataTable,
  },
  data() {
    return {
      cliente: {},
      
    };
  },
  methods: {
    async cadastrar() {
      await axios.post("http://localhost:3000/clientes", this.cliente, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      this.$router.push("/clientes");
    }
  }
};
</script>
