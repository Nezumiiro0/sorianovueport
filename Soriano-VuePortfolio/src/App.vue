<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Ensure the App takes full height and allows child elements to center properly */
html,
body,
#app {
  height: 100%; /* Full height of the viewport */
  margin: 0;
  padding: 0;
  width: 100%; /* Full width of the viewport */
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure the app content takes at least the full height of the viewport */
}
</style>
