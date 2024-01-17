document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮和输出元素
    var testButton = document.getElementById('testButton');
    var outputElement = document.getElementById('output');

    // 按钮点击事件
    testButton.addEventListener('click', function () {
        // 检查浏览器是否支持Web Bluetooth API
        if ('bluetooth' in navigator) {
            navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['battery_service'] // You can specify the services you are interested in
            })
                .then(device => {
                    // 设备已选择，可以执行更多操作
                    outputElement.innerHTML = 'BLE Device Selected: ' + device.name;
                    console.log('BLE Device:', device);
                })
                .catch(error => {
                    // 处理错误
                    outputElement.innerHTML = 'Error: ' + error.message;
                    console.error('Error:', error);
                });
        } else {
            outputElement.innerHTML = 'Web Bluetooth API is not supported in this browser.';
            console.error('Web Bluetooth API is not supported in this browser.');
        }
    });
});
