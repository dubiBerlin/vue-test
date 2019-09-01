<template>
  <li style="margin-top: 10px" class="message">
    <span>{{ message }}</span>
  </li>
</template>
<script>
import axios from "axios";

export default {
  props: ["message"],
  created() {
    axios
      .get(
        "https://8174d70e-822b-40f0-ba26-9033f398d579.mock.pstmn.io/hello/world",
        {
          params: {
            request: 1,
            from: "2019-08-23",
            till: "2019-08-24"
          }
        }
      )
      .then(response => console.log("RESPONSE: ", response.data));
  }
};
</script>
