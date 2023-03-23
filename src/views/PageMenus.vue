<template>
    <div class="menu">
      <h1>Menu du restaurant</h1>
      <div class="menu-items">
        <div v-for="(item, index) in menuItems" :key="index" class="menu-item">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p>{{ item.price }}€</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            name: "Poulet rôti",
            description: "Un délicieux poulet rôti accompagné de légumes grillés",
            price: 12.50,
          },
          {
            name: "Burger du chef",
            description: "Un burger fait maison avec un steak juteux et du fromage fondu",
            price: 15.00,
          },
          {
            name: "Pâtes aux crevettes",
            description: "Des pâtes fraîches accompagnées de crevettes sautées à l'ail",
            price: 14.00,
          },
          {
            name: "Salade césar",
            description: "Une salade fraîche avec du poulet grillé, des croûtons et du parmesan",
            price: 10.50,
          },
        ],
      };
    },
  };
  </script>
  