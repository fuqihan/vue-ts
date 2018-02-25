import { Component, Vue, Prop } from 'vue-property-decorator';
import { Logger } from '../../util/log';

import './header.scss';

@Component({
    template: require('./header.html')
})
export class HeaderComponent extends Vue {
    @Prop()
    isCollapse: boolean

    isMenu() {
        this.$emit('update:isCollapse', !this.$props.isCollapse)
    }
}
