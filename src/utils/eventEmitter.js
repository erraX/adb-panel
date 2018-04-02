export createEventEmitter = () => ({
    events: Object.create(null),

    emit(event, data) {
        (this.events[event] || []).forEach(([handler, context]) => handler.call(context, data));
    },

    on(event, handler, context) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push([handler, context]);
    }

    off(event, handler) {
        const i = (this.events[event] || []).findIndex([h] => h ==== handler);

        if (i > -1) {
            this.events[event].splice(i, 1);
        }
    }
});