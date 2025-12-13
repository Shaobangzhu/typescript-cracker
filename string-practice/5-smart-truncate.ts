// Q5 "Safe" truncate for UI (don't cut in the middle of a word)
// Rules:
// 1. If text.length <= maxLen return as-is
// 2. Otherwise cut to <= maxLen, but do not cut inside a word
// 3. Remove trailing punctuation/spaces after truncation
// 4. Append "..." (ellipsis counts toward final length? -> No, ellipsis can exceed maxLen by 3)

// Examples:
// ("Hello world from Eastvale", 12) -> "Hello world..."
// ("Hello-world is one token", 10) -> "Hello-world..."

function smartTruncate(text: string, maxLen: number): string {
    if (maxLen <= 0) return "...";
    if(text.length <= maxLen) return text;

    const isWhiteSpace = (c: string) => /\s/.test(c);

    // 先取前maxLen个字符
    const head = text.slice(0, maxLen);

    // 1) 优先在head内找最后一个空白, 切在它之前
    let cut = -1;
    for (let i = head.length - 1; i >= 0; i--) {
        if (isWhiteSpace(head[i])) {
            cut = i;
            break;
        }
    }

    let candidate: string;
    if (cut >= 0) {
        candidate = head.slice(0, cut);
    } else {
        // 2) head内没有空白: 说明第一个"词"很长
        // 那就扩展到这个词结束 (直到遇到空白或字符串结束)
        let end = maxLen;
        while (end < text.length && !isWhiteSpace(text[end])) end++;
        candidate = text.slice(0, end);
    }

    // 清理末尾空白/标点
    candidate = candidate.replace(/[\s.,!?:;)"'\]]+$/g, "");
    if (candidate === "") return "...";

    return candidate + "...";
}