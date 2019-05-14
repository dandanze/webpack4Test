<template>
    <div class="page">
        <h2>{{title}}</h2>
        <img src="./assets/pie.png" alt="">
        <div class="big">
            big
        </div>
        <div class="small">
            small
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:'bigData page',
        };
    },
    mounted() { 
    },
}
</script>
<style lang="scss" scoped>
@import './reset';
    .page{
        background:#555;
        color:#fff;
        /deep/ h2{
            font-size:20px;
            color:$main-color;
        }
        .big{
            width:200px;
            height:200px;
            background: url(./assets/big.png) no-repeat;
        }
        .small{
            background: url(./assets/pie.png) no-repeat;
        }
    } 
</style>
