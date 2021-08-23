<template>
  <div id="rjgf-viewer" ref="viewer" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Ref, Prop, Watch } from 'vue-property-decorator'
import Viewer from 'viewerjs'

const TOOLBAR_OPTIONS = {
  zoomIn: 1,
  zoomOut: 1,
  oneToOne: 1,
  reset: 1,
  prev: 1,
  play: 1,
  next: 1,
  rotateLeft: 1,
  rotateRight: 1,
  flipHorizontal: 1,
  flipVertical: 1,
}

@Component({
  name: 'ViewerVue',
})
export default class ViewerVue extends Vue {
  @Ref('viewer') public viewerBox!: HTMLElement
  // 设置属性
  @Prop({ type: Object }) private options: Viewer.Options | undefined
  // 显示图片
  @Prop({ type: Array || String }) public images!: Array<string> | string
  // 是否显示
  @Prop({ type: Boolean }) public visible!: boolean

  @Watch('images')
  public imagesChange() {
    this.$nextTick(() => {
      this.update()
    })
  }

  @Watch('visible')
  public visibleChange(v: boolean) {
    if (v) {
      this.viewer.show()
    }
  }

  private viewer!: any

  protected created(): void {
    this.$nextTick(() => {
      this._initViewer()
    })
  }

  // 初始化插件
  private _initViewer() {
    const toolbar = Object.assign(TOOLBAR_OPTIONS, this.options?.toolbar || {})
    const options = Object.assign(
      {
        toolbar,
        ready: (event: any) => {
          // 初始化ready事件
          this.$emit('ready', event)
        },
        show: (event: any) => {
          // 显示事件-开始
          this.$emit('show', event)
        },
        shown: (event: any) => {
          // 显示事件-结束
          this.$emit('shown', event)
          this.$emit('update:visible', true)
        },
        hide: (event: any) => {
          // 隐藏事件-开始
          this.$emit('hide', event)
        },
        hidden: (event: any) => {
          // 隐藏事件-结束
          this.$emit('hidden', event)
          this.$emit('update:visible', false)
        },
        view: (event: any) => {
          // 切换事件-开始
          this.$emit('view', event)
        },
        viewed: (event: any) => {
          // 切换事件-结束
          this.$emit('viewed', event)
        },
        zoom: (event: any) => {
          // 缩放事件-开始
          this.$emit('zoom', event)
        },
        zoomed: (event: any) => {
          // 缩放事件-结束
          this.$emit('zoomed', event)
        },
      },
      this.options,
    )
    this.viewer = new Viewer(this.viewerBox, options)
    this.$emit('inited', this.viewer)
    if (this.visible) {
      this.viewer.show()
    }
  }
  // 更新
  private update() {
    this.viewer.update()
    return this
  }
  // 销毁
  private destroy() {
    this.viewer.destroy()
  }
  public destroyed(): void {
    this.destroy()
  }
}
</script>
<style>
@import '~viewerjs/dist/viewer.css';
</style>
