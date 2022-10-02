import fs from 'fs'
import { URLSearchParams } from 'url'

const scenarios = []

for (const contain of ['none', 'content', 'strict']) {
  for (const items of [10, 100, 500, 1000]) {
    scenarios.push({
      contain,
      items
    })
  }
}

const makeJson = browser => ({
  "$schema": "https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json",
  "sampleSize": 25,
  "timeout": 0,
  "benchmarks": [
    {
      "browser": {
        "name": browser
      },
      "measurement": [
        {
          "mode": "performance",
          "entryName": "total"
        }
      ],
      "expand": scenarios.map((params) => ({
        name: `items: ${params.items}, contain: ${params.contain}`,
        url: `http://localhost:3000?${new URLSearchParams(params).toString()}`
      }))
    }
  ]
})

for (const browser of ['chrome', 'firefox', 'safari']) {
  const filename = `${browser}.tachometer.json`
  fs.writeFileSync(filename, JSON.stringify(makeJson(browser), null, 2), 'utf8')
}
