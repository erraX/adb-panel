import {observable, computed} from 'mobx';

export default class Device {

    setDevice({name, id, device}) {
        this.id = id;
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
    @observable id = null;

    /**
     * 设备ICON
     *
     * @type {string}
     */
    @observable device = null;
}