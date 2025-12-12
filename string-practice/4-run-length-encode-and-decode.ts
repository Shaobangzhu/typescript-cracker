// Rules:
// Consecutive runs become <char><count>
// Count always included (even 1)
// Examples:
// "aaabbc" -> "a3b2c1"
// "" -> ""

function rleEncode(s: string): string {
    if (s.length === 0) return "";

    let res = "";
    let runChar = s[0];
    let runLen = 1;

    for (let i = 1; i < s.length; i++) {
        const ch = s[i];
        if (ch === runChar) {
            runLen++;
        } else {
            res += `${runChar}${runLen}`;
            runChar = ch;
            runLen = 1;
        }
    }
    res += `${runChar}${runLen}`;
    return res;
}

// Bonus
// 1. decode处理多位数(如a12)是高频坑
// 2. 输入非法时: throw或返回策略一致(工程化)
function rleDecode(encoded: string): string {
    if (encoded.length === 0) return "";

    let res = "";
    for (let i = 0; i < encoded.length; i++) {
        const ch = encoded[i];

        // 后面必须跟数字 (可能有多位)
        let j = i + 1;
        if (j >= encoded.length || !/\d/.test(encoded[j])) {
            throw new Error("Invalid RLE string: missing count.");
        }

        let numStr = "";
        while (j < encoded.length && /\d/.test(encoded[j])) {
            numStr += encoded[j];
            j++;
        }

        const count = Number(numStr);
        if(!Number.isFinite(count) || count < 0) {
            throw new Error("Invalid RLE string: bad count.");
        }

        res += ch.repeat(count);
        i = j - 1; // 在while 循环结束的时候,j正好指向字母，但是由于外层for循环结束时的i++.因此i = j - 1
    }

    return res;
}