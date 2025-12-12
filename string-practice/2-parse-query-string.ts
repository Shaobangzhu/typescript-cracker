// Parse query string into an object (split + decode + duplicate)
// Rules:
// Input may start with ?
// Keys/values may be URL-encoded (%20, etc)
// If a key appears once -> string
// If a key appears multiple times -> string[]

// "?q=hello%20world&page=2" -> { q: "hello world", page: "2" }
// "tag=ts&tag=js&tag=react" -> { tag: ["ts", "js", "react"] }

type QueryValue = string | string[];

function parseQueryString(qs: string): Record<string, QueryValue> {
    const out: Record<string, QueryValue> = {};

    const raw = qs.startsWith("?") ? qs.slice(1) : qs;
    if (raw.trim() === "") return out;

    const safeDecode = (s: string): string => {
        try {
            return decodeURIComponent(s.replace(/\+/g, "%20")); // 全局匹配,将"+"替换成"%20" "a+b++c" -> "a%20b%20%20c"
        } catch {
            // 如果遇到坏编码, 不让程序崩: 按原样返回
            return s;
        }
    };

    for (const part of raw.split("&")) {
        if(!part) continue;

        const eq = part.indexOf("=");
        const kRaw = eq >= 0 ? part.slice(0, eq) : part;
        const vRaw = eq >= 0 ? part.slice(eq + 1) : "";

        const key = safeDecode(kRaw);
        const val = safeDecode(vRaw);

        const curr = out[key];
        if (curr === undefined) {
            out[key] = val; // 第一次: 存string
        } else if (Array.isArray(curr)) {
            curr.push(val); // 第三次: 继续push到array里
        } else {
            out[key] = [curr, val] // 第二次: 把string 升级为array
        }
    }

    return out;
}