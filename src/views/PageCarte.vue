<template>
  <div class="col1">
    <h1>Carte</h1>
    <ul v-for="(plats, category) in groupedPlats" :key="category">
      <h2 class="text-center">{{ category }}</h2>
      <div v-for="plat in plats" :key="plat.name">
        <div class="flex items-start justify-between">
          <div class="w-2/3">
            <strong>{{ plat.name }}</strong>
          </div>
          <div class="w-1/3 text-right">
            <strong>{{ plat.price }}</strong>
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
      plats: []
    };
  },
  mounted() {
    fetch('http://localhost:8000/cartes')
      .then(response => response.json())
      .then(data => {
        this.plats = data;
        console.log(this.plats);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  },
  computed: {
    groupedPlats() {
      return this.plats.reduce((result, plat) => {
        console.log('R: '+result + 'P: '+plat);
        if (!result[plat.categorie]) {
          result[plat.categorie] = [];
        }
        //console.log(plat.categorie);
        result[plat.categorie].push(plat);
        console.log(result);
        return result;
      }, {});
    }
  }
};
</script>
