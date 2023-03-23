<template>
  <nav>
    <div class="nav-brand">
      <!--img src="chemin/vers/le/logo.png" alt="Logo du site"-->
      <h1>Le Quai Antique</h1>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Accueil</router-link></li>
      <li><a href="#">Le restaurant</a></li>
      <li><router-link to="/carte">Carte</router-link></li>
      <li><router-link to="/menus">Menus</router-link></li>
      <li><a href="#">Réservation</a></li>
      <li><a href="#">Nous trouver</a></li>
    </ul>
  </nav>
  <router-view/>
  <footer class="footer">
    <p>Tous droits réservés &copy; 2023 Mon site Web</p>
    <div class="social-links">
      <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
      <a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
    </div>
  </footer>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 50px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nav-brand img {
    height: 60px;
  }
  
  .nav-brand h1 {
    margin-left: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin-left: 50px;
  }
  
  .nav-links a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }
  
  .nav-links a:hover {
    color: #0077b6;
  }

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 96px;
  background-color: #333;
  color: #fff;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.social-links a {
  display: inline-block;
  margin: 0 8px;
  color: #fff;
  font-size: 24px;
}

.fab {
  font-size: inherit;
}
</style>
