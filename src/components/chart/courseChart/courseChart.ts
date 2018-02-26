import { Component, Vue, Prop } from 'vue-property-decorator';
import echarts from 'echarts';

const option = {
    title: {
        text: '课程分类浏览'
    },
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        orient: 'vertical',
        x: 'right',
        itemWidth: 14,
        itemHeight: 14,
        align: 'left',

        data: ['高考', 'IT', '外语', '其他'],
        textStyle: {
            color: '#000000'
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['40%', '42%'],
        color: ['#915872', '#3077b7', '#9a8169', '#3f8797', '#5b8144', '#307889', '#9c6a79'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            },

        },
        tooltip: {
            show: false,


        },

        data: [{
            value: 435,
            name: ''
        }, {
            value: 679,
            name: ''
        }, {
            value: 848,
            name: ''
        }, {
            value: 348,
            name: ''
        }, {
            value: 679,
            name: ''
        }, {
            value: 848,
            name: ''
        }, {
            value: 348,
            name: ''
        }]
    }, {
        name: '浏览次数',
        type: 'pie',
        radius: ['42%', '55%'],
        color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677'],
        label: {
            normal: {
                formatter: '{b}\n{d}%'
            },

        },
        data: [{
            value: 435,
            name: '高考'
        }, {
            value: 679,
            name: 'IT'
        }, {
            value: 848,
            name: '外语'
        }, {
            value: 348,
            name: '其他'
        }

        ]
    }]
};

@Component({
    template: require('./courseChart.html')
})

export class CourseChartComponent extends Vue {
    mounted() {
        let myChart = echarts.init(this.$refs.courseChart);
        myChart.setOption(option);
      }
}
