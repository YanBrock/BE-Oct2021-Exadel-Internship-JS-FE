const PROXY_CONFIG =[{
  context: [
    "/Account/*",
    "/admin/*"
  ],
      "target": "https://exadel3team.myapptechka.by",
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true
  }
]

