<template>
  <div id="app">
    <MessageList :messages="messages" />
  </div>
</template>

<script>
// npm run unit -- -u
import MessageList from "./components/MessageList";
export default {
  data: () => ({
    messages: ["Hey John", "Howdy Paco", "Bruno Wesno", "Karl Dall"]
  }),

  name: "App",
  components: {
    MessageList
  }
};
</script>

<style>
</style>
