<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
  </nav> -->
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--black);
  text-decoration: none;
  outline: none;
}

:root {
  --black: rgb(69, 69, 69);
  --green: rgb(21, 166, 81);
  --red: rgb(193, 42, 42);
  --blue: rgb(7, 114, 191);
}
</style>
