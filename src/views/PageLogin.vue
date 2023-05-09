<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <div>
          <label for="loginEmail">Email</label>
          <input type="email" id="loginEmail" v-model="email" required>
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
/*        await fetch(process.env.VUE_APP_URL + '/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.email, password: this.password })
        })
        .then(response => response.json())
        .then(data => {
          const token = data.token;
          // Stocker le token JWT dans localStorage
          console.log(token);
          localStorage.setItem('jwt', token);
        })
        .catch(error => console.error(error));
*/
        try {
          const response = await fetch(process.env.VUE_APP_BACK_URL + '/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.email, password: this.password })
          })
          const data = await response.json()
          if (response.ok) {
            localStorage.setItem('token', data.token) 
            console.log(data.token)
            this.$router.push({ name: 'HomeQuai' }) 
          } else {
            throw new Error(data.error)
          }
        } catch (error) {
          console.error(error.message)
        }
      }
    }
  }
  </script>
  