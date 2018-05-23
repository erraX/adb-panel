import {ipcMain} from 'electron';
import adb from 'adbkit';

console.log('Starting adb service...')

export default {
    start() {
        ipcMain.on('inited', (event, arg) => {
            console.log('Connected to adb control panel.')

            setTimeout(() => {
                event.sender.send('connected', {
                    name: 'xiaomi mix2',
                    model: '123123',
                    device: 'XIAOMI_DEVICE'
                });
            }, 2000);

            // setTimeout(() => {
            //     event.sender.send('disconnected', 'haha');
            //     console.log('device disconnected');
            // }, 4000);
        });
    }
}