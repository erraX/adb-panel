import {observable, computed} from 'mobx';
import DeviceCollection from './DeviceCollection';

export default class Store {

    constructor() {
        this.deviceCollection = new DeviceCollection();
    }

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
        return !!this.deviceCollection.devices.length;
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