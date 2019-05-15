<template>
    <div class="page">
        <h2>{{title}}</h2>
        <img src="./assets/pie.png" alt>
        <div class="big">big</div>
        <div class="small">small</div>
        <div class="chart-box" ref="chart"></div>
    </div>
</template>
<script>
import echarts from "echarts";

export default {
  data() {
    return {
      title: "bigData page"
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    this.chart.setOption(option);
  }
};
</script>
<style lang="scss" scoped>
@import "./reset";
.page {
  background: #555;
  color: #fff;
  /deep/ h2 {
    font-size: 20px;
    color: $main-color;
  }
  .big {
    width: 200px;
    height: 200px;
    background: url(./assets/big.png) no-repeat;
  }
  .small {
    background: url(./assets/pie.png) no-repeat;
  }
  .chart-box{
      width:400px;
      height:400px;
  }
}
</style>
