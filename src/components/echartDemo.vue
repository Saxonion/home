<template>
  <div id="main"></div>
</template>

<script>
const echarts = require('echarts');

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 示例',
      },
      tooltip: { trigger: 'axis' },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    });
  },
};
</script>

<style lang="scss" scoped>
// #main {
//   width: 500px;
//   height: 500px;
// }
</style>
