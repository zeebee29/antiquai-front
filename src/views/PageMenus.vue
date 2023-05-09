<template>
  <div class="menu">
    <h1>Menus du restaurant</h1>
    <div class="menu-items text-center">
      <div v-for="menu in menus" :key="menu['@id']">
        <h2>{{ menu.nom }} - {{ menu.prix }}€</h2>
        <div v-for="plat in menu.plats" :key="plat['@id']">{{ plat.nom }}
          <h3>
            {{ menu.cat }}
          </h3>
          <div>
            {{ menu.plat }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    fetch(process.env.VUE_APP_BACK_URL + '/api/menus', {
      headers: {
        Accept: "application/ld+json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.menus = data["hydra:member"];
      })
      .catch((error) => console.log(error));
  },
};
</script>
