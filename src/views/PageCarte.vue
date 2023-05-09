<template>
  <div class="col1">
    <h1>Carte</h1>
    <ul v-for="(category, index) in categories" :key="index">
      <h2 class="text-center">{{ category.title }}</h2>
      <div v-for="(plat, index) in category.plats" :key="index">
        <div class="flex items-start justify-between">
          <div class="w-2/3">
            <strong>{{ plat.nom }}</strong>
          </div>
          <div class="w-1/3 text-right">
            <strong>{{ plat.prix }}</strong>
          </div>
        </div>
        <br>
        <div class="text-left">{{ plat.description }}</div>
      </div>
    </ul>
  </div>
</template>

<style>
.text-center {
  text-align: center;
}

.col1 {
  width: 60%
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.w-2tiers {
  width: 66.67%;
}

.w-1tiers {
  width: 33.33%;
}

.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}

</style>

<script>
export default {
  data() {
    return {
      plats: [],
      categories: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(process.env.VUE_APP_BACK_URL + '/api/plats?inCarte=true')
        .then(response => response.json())
        .then(data => {
          this.plats = data['hydra:member'];
          this.groupPlatsByCategory();
        });
    },
    groupPlatsByCategory() {
      const categories = [];
      for (const plat of this.plats) {
        const category = categories.find(category => category.id === plat.categorie['@id']);
        if (category) {
          category.plats.push(plat);
        } else {
          categories.push({
            id: plat.categorie['@id'],
            title: plat.categorie.titreCarte,
            plats: [plat],
          });
        }
      }
      this.categories = categories;
    },
  },
};
</script>
