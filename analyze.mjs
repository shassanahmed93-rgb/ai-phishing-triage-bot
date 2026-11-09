export function analyze(input) {
  const domain = address => address.toLowerCase().split("@").at(-1);
  const checks = [
    [domain(input.from) !== domain(input.replyTo), 35, "Reply-To domain differs from sender"],
    [/urgent|immediately/i.test(input.body), 15, "Urgency language"],
    [/password|verify your account/i.test(input.body), 25, "Credential request language"],
    [/http:\/\//i.test(input.body), 25, "Unencrypted URL"]
  ];
  const matched = checks.filter(([hit]) => hit);
  const score = matched.reduce((sum, [, weight]) => sum + weight, 0);
  return {score, disposition: score >= 60 ? "quarantine for review" : "review normally", evidence: matched.map(([, , reason]) => reason)};
}
