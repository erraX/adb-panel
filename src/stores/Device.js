import {observable, computed} from 'mobx';

export default class Device {

    setDevice({name, model, device}) {
        this.model = model;
        this.name = name;
        this.device = device;
    }

    /**
     * 设备id
     *
     * @type {string}
     */
    @observable name = null;

    /**
     * 设备名
     *
     * @type {string}
     */
    @observable model = null;

    /**
     * 设备ICON
     *
     * @type {string}
     */
    @observable device = null;
}