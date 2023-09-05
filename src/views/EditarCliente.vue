<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="3" class="align-center" align-center>
        <v-card>
          <v-card-title>
            <h1>Editar Cliente</h1>
          </v-card-title>
          <v-card-content>
            <v-container>
              <v-row justify="center">
                <v-col>
                  <v-text-field
                    label="nome"
                    v-model="nome"
                  ></v-text-field>

                  <v-text-field
                    label="sobrenome"
                    v-model="sobrenome"
                  ></v-text-field>
                  <v-text-field label="idade" v-model="idade"></v-text-field>
                </v-col>
               
              </v-row>
              <v-row justify="center">
                  <v-col>
                    <v-btn @click="editar">Editar</v-btn>
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
export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
      idade: "",
    };
  },
  mounted() {
    this.buscarCliente();
  },
  methods: {
    async buscarCliente() {
      const response = await axios.get(
        `http://localhost:3000/clientes/${this.$route.params.id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      this.nome = response.data.nome;
      this.sobrenome = response.data.sobrenome;
      this.idade = response.data.idade;
    },
    async editar() {
      const response = await axios.patch(
        `http://localhost:3000/clientes/${this.$route.params.id}`,
        {
          nome: this.nome,
          sobrenome: this.sobrenome,
          idade: this.idade,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      this.$router.push("/clientes");
    },
  },
};
</script>
