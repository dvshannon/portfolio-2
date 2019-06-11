<template>
    <div class="home">
        <div class="landing">
            <h1>Deyon Shannon</h1>
            <h1>Front-end Engineer</h1>

            <a href="#">LinkedIn</a>
            <a href="#">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        gohomepage: function() {
            this.$router.push("/");
    },
        goprojectspage: function() {
            this.$router.push("/projects");
    },
        gocontactpage: function() {
            this.$router.push("/contact");
    }
  }
}
</script>

<style lang="scss">

</style>
