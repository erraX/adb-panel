import {observable, computed} from 'mobx';

export default class Device {

    constructor({id, name, icon}) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    /**
     * 设备id
     *
     * @type {string}
     */
    @observable id = null;

    /**
     * 设备名
     *
     * @type {string}
     */
    @observable name = null;

    /**
     * 设备ICON
     *
     * @type {string}
     */
    @observable icon = null;
}