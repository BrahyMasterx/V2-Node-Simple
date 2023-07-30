module.exports = {
  "apps":[
{
          "name":"app.js",
          "script":"node index.js"
      },
  {
          "name":"web",
          "script":"/app/web.js -c /app/config1.yaml"
      },
      {
          "name":"argo",
          "script":"/app/web2.js tunnel --edge-ip-version auto --loglevel panic --protocol auto run --token eyJhIjoiYWQ1NDUwYTgyNTI0M2VhZTE5Y2E0ODI4MWQxNTRiZjIiLCJ0IjoiNjU1MjAxMzctNmEzMC00ZDM1LWExYTItYTIyZDE1YjM4MTNhIiwicyI6Ik5XSXlOR1U1Tm1RdFpXUTRZUzAwWkdFeExUazBNemt0WVdVNFltWTNaR1F6WW1RMiJ9"
      }
  ]
}
