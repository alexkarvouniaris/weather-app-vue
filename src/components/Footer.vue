<template>
  <v-footer padless absolute color="#1E88E5">
    <v-col cols="12" class="text">
      Last updated on
      {{
        new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })
      }}
    </v-col>
  </v-footer>
</template>

<style lang="scss" scoped>
.text {
  text-align: end;
  color: white;
}
</style>
