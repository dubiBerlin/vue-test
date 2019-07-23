<template>
  <div id="app">
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from "./components/MessageList";
export default {
  data: () => ({ messages: ["Hey John", "Howdy Paco", "Bruno Wesno"] }),

  name: "App",
  components: {
    MessageList
  }
};
</script>

<style>
</style>
