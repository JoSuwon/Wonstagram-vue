<template>
  <v-bottom-navigation v-model="value" app>
    <v-btn value="home">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn value="search">
      <v-icon>mdi-card-search</v-icon>
    </v-btn>
    <v-btn value="add">
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
    <v-btn value="heart">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn value="account">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation.vue',
  data() {
    return {
      value: 'home',
    };
  },
}
</script>