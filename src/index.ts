import { VueConstructor } from 'vue'
import ViewerVue from './Index.vue'

(ViewerVue as any).install = function (vue: { components: (arg0: string, arg1: VueConstructor<ViewerVue>) => void }) {
    vue.components(ViewerVue.name,ViewerVue)
}

export default ViewerVue as typeof ViewerVue
