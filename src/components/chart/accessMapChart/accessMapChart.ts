import { Component, Vue, Prop } from 'vue-property-decorator';
import echarts from 'echarts';
import axios from 'axios';

function randomData() {
  return Math.round(Math.random() * 1000);
}
let legendData = ['用户', '课程', '教师'];
// legend自定义颜色 不设置有默认色
let legendColor = ['blue', 'gray', '#000'];
// 映射颜色  不设置有默认色
let visColor = ["#ffffff", "#e8192f", "#d6664d", "#B9044E", "#f0ba2e", "#d3ce2b", "#169A7f", "#0b6573", "#1BB3c8"];
// seriesData Array [{name:'',type:'map',mapType:'china',
//           label: { normal: {show: true},emphasis: { show: true}},data:[{name:'',value:''},...]},{...}]
let seriseData = [
  {
    name: '用户',
    type: 'map',
    mapType: 'china',
    label: { normal: { show: true }, emphasis: { show: true } },
    data: [
      { name: '北京', value: randomData() },
      { name: '天津', value: randomData() },
      { name: '上海', value: randomData() },
      { name: '重庆', value: randomData() },
      { name: '河北', value: randomData() },
      { name: '河南', value: randomData() },
      { name: '云南', value: randomData() },
      { name: '辽宁', value: randomData() },
      { name: '黑龙江', value: randomData() },
      { name: '湖南', value: randomData() },
      { name: '安徽', value: randomData() },
      { name: '山东', value: randomData() },
      { name: '新疆', value: randomData() },
      { name: '江苏', value: randomData() },
      { name: '浙江', value: randomData() },
      { name: '江西', value: randomData() },
      { name: '湖北', value: randomData() },
      { name: '广西', value: randomData() },
      { name: '甘肃', value: randomData() },
      { name: '山西', value: randomData() },
      { name: '内蒙古', value: randomData() },
      { name: '陕西', value: randomData() },
      { name: '吉林', value: randomData() },
      { name: '福建', value: randomData() },
      { name: '贵州', value: randomData() },
      { name: '广东', value: randomData() },
      { name: '青海', value: randomData() },
      { name: '西藏', value: randomData() },
      { name: '四川', value: randomData() },
      { name: '宁夏', value: randomData() },
      { name: '海南', value: randomData() },
      { name: '台湾', value: randomData() },
      { name: '香港', value: randomData() },
      { name: '澳门', value: randomData() }
    ]
  },
  {
    name: '课程',
    type: 'map',
    mapType: 'china',
    label: { normal: { show: true }, emphasis: { show: true } },
    data: [
      { name: '湖北', value: randomData() },
      { name: '广西', value: randomData() },
      { name: '甘肃', value: randomData() },
      { name: '山西', value: randomData() },
      { name: '内蒙古', value: randomData() },
      { name: '陕西', value: randomData() },
      { name: '吉林', value: randomData() },
      { name: '福建', value: randomData() },
      { name: '贵州', value: randomData() },
      { name: '广东', value: randomData() },
      { name: '青海', value: randomData() },
      { name: '西藏', value: randomData() },
      { name: '四川', value: randomData() },
      { name: '宁夏', value: randomData() },
      { name: '海南', value: randomData() },
      { name: '台湾', value: randomData() },
      { name: '香港', value: randomData() },
      { name: '澳门', value: randomData() }
    ]
  },
  {
    name: '教师',
    type: 'map',
    mapType: 'china',
    label: {
      normal: {
        show: true
      },
      emphasis: {
        show: true
      }
    },
    data: [
      { name: '北京', value: randomData() },
      { name: '天津', value: randomData() },
      { name: '上海', value: randomData() },
      { name: '重庆', value: randomData() },
      { name: '河北', value: randomData() },
      { name: '安徽', value: randomData() },
      { name: '新疆', value: randomData() },
      { name: '浙江', value: randomData() },
      { name: '江西', value: randomData() },
      { name: '山西', value: randomData() },
      { name: '内蒙古', value: randomData() },
      { name: '吉林', value: randomData() },
      { name: '福建', value: randomData() },
      { name: '广东', value: randomData() },
      { name: '西藏', value: randomData() },
      { name: '四川', value: randomData() },
      { name: '宁夏', value: randomData() },
      { name: '香港', value: randomData() },
      { name: '澳门', value: randomData() }
    ]
  }
]


const option = {
  title: {
    text: '访问地图分布',
    left: 'left'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: '3%',
    bottom: '3%',
    data: legendData
  },
  color: legendColor,
  visualMap: {
    min: 0,
    max: 2500,
    left: 'left',
    bottom: '3%',
    text: ['高', '低'],           // 文本，默认为数值文本
    calculable: true,
    color: visColor
  },
  toolbox: {
    show: true,
    right: '3%',
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  series: seriseData
};

@Component({
  template: require('./accessMapChart.html')
})

export class AccessMapChartComponent extends Vue {
  mounted() {
    let myChart = echarts.init(this.$refs.accessMapChart);
    axios.get('http://oxw83yoit.bkt.clouddn.com/map/china.json').then(res => {
      echarts.registerMap('china', res.data);
      myChart.setOption(option);
    })
  }
}
