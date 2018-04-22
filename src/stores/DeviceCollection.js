import Device from './Device';
import {observable, action} from "mobx";

export default class DeviceCollection {
    constructor(store) {
        this.store = store;
    }

    /**
     * 设备列表
     *
     * @type {Array.<Device>}
     */
    @observable devices = [];

    @action
    set(devices) {
        devices.forEach(this.add);
    }

    @action
    add(device) {
        this.devices.push(new Device(device));
    }

    @action
    remove(deviceId) {
        this.devices.forEach(({id}, idx) => {
            if (id === deviceId) {
                this.devices.splice(idx, 1);
            }
        });
    }
}