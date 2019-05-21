<template>
    <div class="page">
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:'bigData page1111',
        };
    },
    mounted() { 
        console.log(process.env.NODE_ENV);
    },
}
</script>
<style lang="scss" scoped>
</style>
