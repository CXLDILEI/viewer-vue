import Viewer from "viewerjs";

/**
 * main ImageViewer class
 */
declare class ImageViewer {
    public viewerBox: HTMLElement
    private options: Viewer.Options | undefined
    public images: Array<string> | string
    public visible: boolean

    /**
     * 初始化插件
     * @private
     */
    private _initViewer(): void

    /**
     * update
     */
    private update(): ImageViewer

    /**
     * 销毁
     */
    private destroy(): void
}
declare module 'viewer-vue' {
    export default ImageViewer
}

export default ImageViewer
