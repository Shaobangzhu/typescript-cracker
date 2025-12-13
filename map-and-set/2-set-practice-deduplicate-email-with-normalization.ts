// Deduplicate emails with normalization
// Rules
// 1. Trim spaces
// 2. Lowercase everything
// 3. For Gmail addresses only: remove dots in the local part (a.b->ab); ignore anything after + in local part (alice+promo -> alice)
// 4. Keep first occurence of each normalized email (stable)
// [
//   " Alice.B+promo@gmail.com ",
//   "aliceb@gmail.com",
//   "Bob@Example.com",
//   "bob@example.com"
// ]
// ---------->
// [
//   " Alice.B+promo@gmail.com ",
//   "Bob@Example.com"
// ]

// Set 去重 + 保持稳定顺序
// Gmail的dot/plus规则只对gmail.com生效 (细节)
// normalize拆出来独立函数 (可读性)

function dedupeEmails(emails: string[]): string[] {
    const seen = new Set<string>();
    const out: string[] = [];

    const normalize = (raw: string): string => {
        const trimmed = raw.trim().toLowerCase();

        const at = trimmed.lastIndexOf("@");
        if (at < 0) return trimmed; // 非法就按原样 (也可以选择跳过/throw)

        let local = trimmed.slice(0, at);
        const domain = trimmed.slice(at + 1);

        // Gmail only
        if (domain === "gmail.com") {
            const plus = local.indexOf("+");
            if (plus >= 0) local = local.slice(0, plus);
            local = local.replace(/\./g, "");
        }

        return `${local}@${domain}`;
    };

    for (const e of emails) {
        const key = normalize(e);
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(e);
    }

    return out;
}