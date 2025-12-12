function paginate<T>(items: T[], page: number, limit: number): T[] {
    if (page < 1 || limit < 1) return [];

    const start = (page - 1) * limit;
    if (start >= items.length) return [];

    return items.slice(start, start + limit);
}