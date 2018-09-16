import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/hello_world/HelloWorld'; // @ is an alias to /src

@Component({
	components: {
		HelloWorld,
	},
})
export default class Home extends Vue {
}
