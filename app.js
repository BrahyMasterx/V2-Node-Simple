const { exec } = require("child_process");

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
