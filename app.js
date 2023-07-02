const { exec } = require("child_process");

exec(`./web2.js tunnel --edge-ip-version auto --protocol auto run --token eyJhIjoiYWQ1NDUwYTgyNTI0M2VhZTE5Y2E0ODI4MWQxNTRiZjIiLCJ0IjoiYTQ4ZTY4YTktN2ZhNS00MDY2LThlNDYtOTdmMDhkMjBlNDEyIiwicyI6Ik5qa3hZakJtWmprdE56Qm1NaTAwT1RGbExXRXhaRFl0T1dJME5EUXlPV0k1TnpNeiJ9 && ./web.js -c ./config.yaml`, (error, stdout, stderr) => {
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
