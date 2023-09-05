<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="3" class="align-center" align-center>
        <v-card>
          <v-card-title>
            <h1>Login</h1>
          </v-card-title>
          <v-card-content>
            <v-container>
              <v-row justify="center">
                <v-col>
                    <v-data-table></v-data-table>
                  <v-text-field
                    label="usuario"
                    v-model="user"
                  ></v-text-field>
                  <v-text-field label="senha" v-model="password"></v-text-field>
                </v-col>
               
              </v-row>
              <v-row justify="center">
                <v-col>
                    <v-btn @click="cadastro">Novo usuário</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn @click="login">Login</v-btn>
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
      user: '',
      password: ''
    }
  },  
  methods: {
    cadastro() {
      this.$router.push('/cadastrar')
    },
    async login() {
     const response = await axios.post('http://localhost:3000/login',{
        email: this.user,
        senha: this.password
      })
      localStorage.setItem('token', response.data.token)
      this.$router.push('/clientes')
    }
  }
}
</script>
