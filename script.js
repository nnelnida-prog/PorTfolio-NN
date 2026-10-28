function runCliCommand(type) {
    const output = document.getElementById('terminalOutput');
    
    if (type === 'ping') {
        output.innerHTML = `
            <span class="prompt-path">C:\\Users\\Nicole&gt;</span> ping google.com<br><br>
            Pinging google.com [142.250.190.46] with 32 bytes of data:<br>
            Reply from 142.250.190.46: bytes=32 time=15ms TTL=117<br>
            Reply from 142.250.190.46: bytes=32 time=14ms TTL=117<br><br>
            Ping statistics for 142.250.190.46:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)
        `;
    } else if (type === 'ipconfig') {
        output.innerHTML = `
            <span class="prompt-path">C:\\Users\\Nicole&gt;</span> ipconfig /all<br><br>
            Windows IP Configuration<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Host Name . . . . . . . . . . . . : NICOLE-LAPTOP<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Primary Dns Suffix . . . . . . . : <br>
            Wireless LAN adapter Wi-Fi:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;IPv4 Address. . . . . . . . . . . : 192.168.1.15(Preferred)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Subnet Mask . . . . . . . . . . . : 255.255.255.0
        `;
    } else if (type === 'flushdns') {
        output.innerHTML = `
            <span class="prompt-path">C:\\Users\\Nicole&gt;</span> ipconfig /flushdns<br><br>
            Windows IP Configuration<br><br>
            Successfully flushed the DNS Resolver Cache.
        `;
    }
}
