const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// List of services to monitor
const services = [
    { name: 'SvelteKit', url: 'http://localhost:5173' },
    { name: 'PocketBase', url: 'http://localhost:8090/_/' },
    { name: 'Dashboard', url: 'http://localhost:3000' },
    { name: 'FaceFusion', url: 'http://127.0.0.1:7860/' }
    // Replace PORT1, PORT2, PORT3 with actual port numbers
];

// Ping function
async function pingService(service) {
    try {
        await axios.get(service.url);
        return { name: service.name, status: 'Running' , url: service.url};
    } catch (error) {
        return { name: service.name, status: 'Down', url: service.url };
    }
}

// Endpoint to get services status
app.get('/status', async (req, res) => {
    const statuses = await Promise.all(services.map(s => pingService(s)));
    res.json(statuses);
});

// Serve the dashboard page
app.get('/', (req, res) => {
    res.send(`
    <h1>Services Status</h1>
    <ul id="statusList"></ul>
    <script>
        async function getStatus() {
            const response = await fetch('/status');
            const statuses = await response.json();
            const list = document.getElementById('statusList');
            list.innerHTML = '';
            statuses.forEach(s => {
                const li = document.createElement('li');
                const text = document.createTextNode(s.name + ': ' + s.status + ' - ');
                const link = document.createElement('a');
                link.setAttribute('href', s.url);
                link.setAttribute('target', '_blank'); // Open in new tab
                link.textContent = 'Open';
    
                li.appendChild(text);
                li.appendChild(link);
                list.appendChild(li);
            });
        }
        getStatus();
        setInterval(getStatus, 5000); // Update every 5 seconds
    </script>    
    `);
});

app.listen(port, () => {
    console.log(`Dashmon running at http://localhost:${port}`);
});
