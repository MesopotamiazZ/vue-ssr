<template>
  <div class="login">
    this is login!
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route, this.$route.params.id, this.$route.meta)
  }
}
</script>
