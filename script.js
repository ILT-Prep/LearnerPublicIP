fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').innerText = data.ip;
    })
    .catch(error => {
        document.getElementById('ip-address').innerText = 'Error fetching IP address';
        console.error('Error:', error);
    });
