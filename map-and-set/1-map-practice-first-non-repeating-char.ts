// Q1 Frequency Map

// Rules:
// 1.Case-insensitive (treat A and a the same)
// 2.Ignore spaces
// 3.Return the index in the original string of the first character whose normalized count is 1
// 4.If none,return -1

// Example:
// 1. "Swiss" -> s(3), w(1), i(1), first unique is w at index 1
// 2. "a a b b" -> -1

// Map用于计数 + 第二遍找答案
// 忽略空格, 但index要返回字符串位置

function firstUniqueCharIndex(s: string): number {
    const freq = new Map<string, number>();

    // 计数: 大小写无关; 忽略空格
    for (const ch of s) {
        if (ch === " ") continue;
        const key = ch.toLowerCase();
        freq.set(key, (freq.get(key) ?? 0) + 1);
    }

    // 第二遍:返回原字符串 index
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === " ") continue;
        const key = ch.toLowerCase();
        if ((freq.get(key) ?? 0) === 1) return i;
    }

    return -1;
}