import { Component, Vue } from 'vue-property-decorator';
import { Logger } from '../../util/log';

@Component({
    template: require('./app.html')
})
export class AppComponent extends Vue {

    protected logger: Logger;

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info('about is ready!'));
    }
}
