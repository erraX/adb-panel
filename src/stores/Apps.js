import {observable, computed} from 'mobx';

export default class Apps {
    @observable name = '';
    @observable package = '';
    @observable icon = '';
}