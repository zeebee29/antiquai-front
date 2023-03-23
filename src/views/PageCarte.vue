<template>
    <div class="menu-container">
      <div class="category" v-for="(category, index) in Object.keys(menu)" :key="index">
        <h2>{{ category }}</h2>
        <ul class="menu-items">
          <li v-for="(item, index) in menu[category]" :key="index">
            <h3>{{ item.name }}</h3>
            <p class="description">{{ item.description }}</p>
            <p class="price">{{ item.price }} €</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      menu: {
        entrees: [
          {
            name: "Salade de chèvre chaud",
            description: "Salade verte avec des toasts de chèvre chaud",
            price: 8.50,
          },
          {
            name: "Soupe à l'oignon",
            description: "Soupe chaude avec des oignons caramélisés et du fromage fondu",
            price: 7.00,
          },
        ],
        viandes: [
          {
            name: "Entrecôte grillée",
            description: "Entrecôte de bœuf grillée avec une sauce maison et des frites",
            price: 19.00,
          },
          {
            name: "Magret de canard",
            description: "Magret de canard grillé avec une sauce aux figues et une purée de patates douces",
            price: 22.00,
          },
        ],
        poissons: [
          {
            name: "Pavé de saumon",
            description: "Pavé de saumon grillé avec une sauce au beurre blanc et des légumes",
            price: 18.50,
          },
          {
            name: "Filet de bar",
            description: "Filet de bar grillé avec une sauce vierge et du riz basmati",
            price: 20.00,
          },
        ],
        desserts: [
          {
            name: "Crème brûlée",
            description: "Crème vanillée caramélisée",
            price: 6.50,
          },
          {
            name: "Tarte tatin",
            description: "Tarte aux pommes renversée avec de la crème fraîche",
            price: 7.00,
          },
        ],
      },
    };
  },
};
</script>
