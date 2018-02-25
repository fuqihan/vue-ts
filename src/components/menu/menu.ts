import { Component, Vue, Prop } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import './menu.scss';

@Component({
    template: require('./menu.html')
})
export class MenuComponent extends Vue {
    @Prop()
    isCollapse: boolean

    get deActiive() {
        return this.$route.path
    }
}
