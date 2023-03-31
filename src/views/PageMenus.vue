<template>
    <div class="menu">
      <h1>Menu du restaurant</h1>
      <div class="menu-items text-center">
        <div v-for="(menus, menuType) in groupedMenus" :key="menuType">
          <h2>{{ menus[0].menuType }} - {{ menus[0].price }}</h2>
          <div v-for="menu in menus" :key="menu.plat">
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
        menus: []
      };
    },

    mounted() {
      fetch('http://localhost:8000/menus')
      .then(response => response.json())
      .then(data => {
        this.menus = data;
        console.log(this.menus);
      })
      .catch(error => {
        console.error('Erreur : ', error);
      });
    },

    computed: {
      groupedMenus() {
        return this.menus.reduce((result, menu) => {
          if (!result[menu.menuType]) {
            result[menu.menuType]=[];
          }
          result[menu.menuType].push(menu);
          return result;
        }, {});
      }

    }
  };
  </script>
  