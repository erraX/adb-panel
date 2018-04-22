import {ipcMain} from 'electron';
import adb from 'adbkit';

console.log('Starting adb service...')

export default {
    start() {
        ipcMain.on('inited', (event, arg) => {
            console.log('Connected to adb control panel.')

            setTimeout(() => {
                event.sender.send('connected', {
                    id: 'XIAOMI_DEVICE',
                    name: 'xiaomi mix2'
                });
                console.log('device connected');
            }, 2000);

            // setTimeout(() => {
            //     event.sender.send('disconnected', 'haha');
            //     console.log('device disconnected');
            // }, 4000);
        });
    }
}