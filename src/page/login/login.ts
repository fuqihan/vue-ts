import { Component, Vue } from 'vue-property-decorator';
import { Logger } from '../../util/log';

import './login.scss';

@Component({
    template: require('./login.html')
})

export class LoginComponent extends Vue {

    protected logger: Logger;
    private pwdType = 'password';
    private loading = false;
    private loginForm: any = {
        username: '',
        password: '',
    };
    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info('about is ready!'));
    }
    showPwd() {
        if (this.pwdType === 'password') {
            this.pwdType = '';
        } else {
            this.pwdType = 'password';
        }
    }
    handleLogin() {
        if (this.loginForm.username.trim() === 'admin' && this.loginForm.password.trim() === '123456') {
            this.$store.dispatch('loginInfo', true)
            this.$router.push({ name: 'index' });
        }
    }
}
