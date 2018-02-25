import { Component, Watch, Vue } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { HeaderComponent } from '../../components/header';
import { MenuComponent } from '../../components/menu';
import './main.scss';

@Component({
    template: require('./main.html'),
    components: {
        fHeader: HeaderComponent,
        fMenu: MenuComponent
    }
})

export class IndexComponent extends Vue {

    protected logger: Logger;
    private isCollapse = false;
    private levelList = null;

    created() {
        this.getBreadcrumb()
    }
    getBreadcrumb() {
        this.levelList = this.$route.matched.filter(item => item.name)
    }

    @Watch('$route')
    onRouteChanged() {
        this.getBreadcrumb()
    }
}
