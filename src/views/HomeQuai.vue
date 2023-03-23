<template>
  <div class="homequai">
  
    <div class="content">
      <h1>Bienvenue sur la page d'accueil du Restau QUAI ANTIQUE!</h1>
      <p>Ravi de vous accueillir.</p>
      <p>N'hésitez pas à naviguer et à découvrir toutes nos spécialités !</p>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'HomeQuai',
  data() {
    return {
      isNavbarActive: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
    },
  },
};
</script>

<style>
.homequai {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

</style>
