bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function on_uart_data_received() {
    
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(data)
})
let data = ""
bluetooth.startUartService()
