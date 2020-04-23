<template>
  <v-card>
    <v-card-title> {{ msg }} </v-card-title>
    <v-card-text>
      <p>
        For a guide and recipes on how to configure / customize this project,<br />
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
          >vue-cli documentation</a
        >.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
