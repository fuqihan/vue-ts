import { Component, Vue } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { CourseChartComponent } from '../../components/chart/courseChart';
import { AccessMapChartComponent } from '../../components/chart/accessMapChart';
import { ActivityChartComponent } from '../../components/chart/activityChart';
import { StatisticsChartComponent } from '../../components/chart/statisticsChart';

import './home.scss';

@Component({
    template: require('./home.html'),
    components: {
        courseChart: CourseChartComponent,
        activityChart: ActivityChartComponent,
        statisticsChart: StatisticsChartComponent,
        accessMapChart: AccessMapChartComponent
    }
})
export class HomeComponent extends Vue {


}
