# AI Phishing Triage Bot

Score suspicious messages using sender alignment, urgency and URL evidence.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/ai-phishing-triage-bot/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "score": 100,
  "disposition": "quarantine for review",
  "evidence": [
    "Reply-To domain differs from sender",
    "Urgency language",
    "Credential request language",
    "Unencrypted URL"
  ]
}
```

## Scope

Synthetic lab inputs and deterministic rules. Review results before applying them to a real incident. The workflow currently uses rules or templates and has no model integration.
