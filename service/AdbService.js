import { ipcMain } from 'electron';
import adb from 'adbkit';

const CONNECTED = 'connected';
const DISCONNECTED = 'disconnected';

export default class AdbService {
    constructor() {
        this.client = adb.createClient();
    }

    init() {
        this.listenToFront();

    }

    listenToFront() {
        ipcMain.on('inited', this.onAdbInited.bind(this));
    }

    onAdbInited(evt, args) {
        console.log('Connected to adb control panel.')

        const emitter = evt.sender;

        setTimeout(() => {
            emitter.send(CONNECTED, {
                name: 'xiaomi',
                device: 'de129das'
            });
        }, 3000);

        // Device connected
        const onAddDevice = device => {
            emitter.send(CONNECTED, device);
        };

        // Device removed
        const onRemoveDevice = device => {
            emitter.send(DISCONNECTED, device);
        };

        // Device ended
        const onEndDevice = device => {};

        // Error handler
        const onError = err => {
            console.error('Error occur in `inited`', err);
        };

        this.client.trackDevices()
            .then(tracker => {
                tracker.on('add', onAddDevice);
                tracker.on('remove', onRemoveDevice);
                tracker.on('end', onEndDevice);
            })
            .catch(onError);
    }
}