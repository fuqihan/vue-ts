import { Component, Vue, Prop } from 'vue-property-decorator';
import echarts from 'echarts';

const option = {
  backgroundColor: '#ffffff',
  title: {
    text: '访问量统计',
    left: '6%'
  },
  tooltip: {
    trigger: 'axis', 
      axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14, 
    itemHeight: 5,
    itemGap: 13, 
    data: ['前天', '昨天', '今天'],
    right: '4%', 
    textStyle: {
      fontSize: 12,
      color: '#000000'
    }
  },
  grid: {
    left: '3%', 
    right: '4%', 
    bottom: '3%', 
    containLabel: true 
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false, 
    axisLine: {
      lineStyle: {
        color: '#57617B' 
      }
    },
    data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
  }],
  yAxis: [{
    type: 'value',
    name: '单位（%）',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B' 
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14 
      }
    },
    splitLine: {
      lineStyle: {
        color: '#dddddd' 
      }
    }
  }],
  series: [{
    name: '前天',
    type: 'line',
    smooth: true, 
    symbol: 'circle', 
    symbolSize: 5, 
    showSymbol: false, 
    lineStyle: { 
      normal: {
        width: 1
      }
    },
    areaStyle: { 
      normal: {
        color: echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(137, 189, 27, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(137, 189, 27, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)', 
        shadowBlur: 10 
      }
    },
    itemStyle: { 
      normal: {
        color: 'rgb(137,189,27)',
        borderColor: 'rgba(137,189,2,0.27)', 
        borderWidth: 12 

      }
    },
    data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
  }, {
    name: '昨天',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0, 136, 212, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(0, 136, 212, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(0,136,212)',
        borderColor: 'rgba(0,136,212,0.2)',
        borderWidth: 12

      }
    },
    data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
  }, {
    name: '今天',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(219, 50, 51, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(219, 50, 51, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {

        color: 'rgb(219,50,51)',
        borderColor: 'rgba(219,50,51,0.2)',
        borderWidth: 12
      }
    },
    data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
  },]
}

@Component({
  template: require('./statisticsChart.html')
})

export class StatisticsChartComponent extends Vue {
  mounted() {
    let myChart = echarts.init(this.$refs.statisticsChart);
    myChart.setOption(option);
  }
}
