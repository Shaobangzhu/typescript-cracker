// Q1 Normalize a name (trim + collapse spaces + title case)
// Examples
// " aLiCe bETH chen " -> "Alice Beth Chen"
// "\tjohn DOE" -> "John Doe"

function normalizeFullName(input: string): string {
    const normalized = input.trim().replace(/\s+/g, " ");
    
    if (normalized === "") return "";

    return normalized.split(" ").filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}