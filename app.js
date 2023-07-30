var exec = require("child_process").exec;
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on 0.0.0.0:${port}/`);
});

exec(`chmod +x ./web.js && ./web.js -c ./config1.yaml`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});
exec(`chmod +x ./web2.js && ./web2.js tunnel --edge-ip-version auto --protocol auto run --token eyJhIjoiYWQ1NDUwYTgyNTI0M2VhZTE5Y2E0ODI4MWQxNTRiZjIiLCJ0IjoiNjU1MjAxMzctNmEzMC00ZDM1LWExYTItYTIyZDE1YjM4MTNhIiwicyI6IlpEWmtZbVl3WVdFdE56SXlNUzAwWmpBNExUZzRNR0V0WWpFM01EbGlNelE0WXpRMSJ9`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});
