<template>
  <v-app class="app">
    <Header/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <BottomNavigation/>
  </v-app>
</template>

<script>
import Header from './Header';
import BottomNavigation from './BottomNavigation';

export default {
  name: 'Layout',  
  components: {
    Header,
    BottomNavigation,
  },
}
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
}
</style>