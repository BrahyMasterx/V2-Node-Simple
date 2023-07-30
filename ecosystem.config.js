module.exports = {
  "apps":[

  {
          "name":"web",
          "script":"/app/web.js -c /app/config1.yaml"
      },
      {
          "name":"argo",
          "script":"/app/web2.js tunnel --edge-ip-version auto --loglevel panic --protocol auto run --token eyJhIjoiYWQ1NDUwYTgyNTI0M2VhZTE5Y2E0ODI4MWQxNTRiZjIiLCJ0IjoiNjU1MjAxMzctNmEzMC00ZDM1LWExYTItYTIyZDE1YjM4MTNhIiwicyI6IlpEWmtZbVl3WVdFdE56SXlNUzAwWmpBNExUZzRNR0V0WWpFM01EbGlNelE0WXpRMSJ9"
      }
  ]
}
