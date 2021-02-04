(function () {
    window.WebSocketListener = function () {
        this.watches = [];

        this.onmessage = null;

        const webSocketListener = this;
        this.addListeners = function (webSocket, channel, onclose) {
            webSocket.onmessage = function (event) {
                if (webSocketListener.onmessage) {
                    const data = window.JSON.parse(event.data);
                    webSocketListener.onmessage(window.decodeURIComponent(data['text']));
                }
            };
            webSocket.onopen = () => console.log(`Successfully connected to ${channel}!`);
            webSocket.onerror = event => console.log(event)
            webSocket.onclose = () => {
                console.log(`Disconnected from ${channel}. Attempting to reconnect...`);
                onclose();
            };
        }

        const watching = {};
        this.addWatch = function (channel) {
            if (watching[channel] === undefined) {
                const index = this.watches.length;
                watching[channel] = index;

                let webSocket = this.watches[index] = new WebSocket(channel);
                //Attempt to reconnect upon getting closed
                const onclose = () => {
                    let timeout = 10000;

                    const reconnect = () => {
                        try {
                            webSocket = new WebSocket(channel);
                            this.addListeners(webSocket, channel, onclose);
                        } catch (e) {
                            console.log(`Failed to reconnect. Trying again after ${(timeout *= 1.1) / 1000} seconds.`);
                            setTimeout(reconnect, timeout);
                        }
                    }
                    reconnect();
                };
                this.addListeners(webSocket, channel, onclose);
            }
        }

        this.removeWatch = function (index) {
            let webSocket = this.watches[index];
            webSocket.onmessage = webSocket.onopen = webSocket.onerror = webSocket.onclose = null;
            webSocket.close();
        }
    };
})();