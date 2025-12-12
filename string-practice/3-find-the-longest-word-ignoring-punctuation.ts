// Rules:
// Treat , . ! ? : ; ( ) [ ] " ' as separators
// Hyphenated words like "state-of-the-art" should count as one word
// If tie, return the first longest
// Example:
// "Well... this is state-of-the-art, right?" -> return "state-of-the-art"

function longestWord(sentence: string): string {
    // 允许: 字母/数字 + 中间连字符
    // 例如 state-of-the-art 算一个词
    const matches = sentence.match(/[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*/g);
    if (!matches || matches.length === 0) return "";

    let best = matches[0];
    for (const w of matches) {
        if (w.length > best.length) best = w;
    }
    return best;
}