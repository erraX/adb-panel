import {observable, computed} from 'mobx';
import Device from './Device';

export default class Store {

    /**
     * 设备信息
     *
     * @type {Device}
     */
    @observable device = new Device();

    /**
     * 当前选择的设备ID
     *
     * @type {string}
     */
    @observable selectedDeviceId = null;

    /**
     * 是否又设备链接
     *
     * @type {boolean}
     */
    @computed
    get isConnected() {
        return !!this.device.name;
    }

    /**
     * 是否选择设备
     *
     * @type {boolean}
     */
    @computed
    get isSelected() {
        return !!this.selectedDeviceId;
    }
}