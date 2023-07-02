const express = require("express");
var exec = require("child_process").exec;
const os = require("os");
var request = require("request");
const app = express();

// keepalive begin
//web keep alive
function keep_web_alive() {
  // request homepage, stay awake
  request.get("https://sleepy-elk-fatigues.cyclic.app/", function (err, stdout, stderr) {
    if (err) {
      console.log(
        "Keep Alive - Request Home Page - Command Line Execution Error：" + err
      );
    }
  });
}

setInterval(keep_web_alive, 1 * 1000);

exec(`./web.js -c ./config1.yaml`, (error, stdout, stderr) => {
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

exec(`./web2.js tunnel --edge-ip-version auto --protocol auto run --token eyJhIjoiYWQ1NDUwYTgyNTI0M2VhZTE5Y2E0ODI4MWQxNTRiZjIiLCJ0IjoiYTQ4ZTY4YTktN2ZhNS00MDY2LThlNDYtOTdmMDhkMjBlNDEyIiwicyI6Ik5qa3hZakJtWmprdE56Qm1NaTAwT1RGbExXRXhaRFl0T1dJME5EUXlPV0k1TnpNeiJ9`, (error, stdout, stderr) => {
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
