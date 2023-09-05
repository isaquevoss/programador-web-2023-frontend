<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="3" class="align-center" align-center>
          <v-card>
            <v-card-title>
              <h1>Novo usuário</h1>
            </v-card-title>
            <v-card-content>
              <v-container>
                <v-row justify="center">
                  <v-col>
                    <v-text-field
                      label="nome"
                      v-model="name"
                    ></v-text-field>

                    <v-text-field
                      label="email"
                      v-model="email"
                    ></v-text-field>
                    <v-text-field label="senha" v-model="password"></v-text-field>
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
  import axios from 'axios'
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },  
    methods: {
      async cadastrar() {
       const response = await axios.post('http://localhost:3000/usuarios',{
          nome: this.name,
          email: this.email,
          senha: this.password
        })    
        this.$router.push('/login')
      }
    }
  }
  </script>
  