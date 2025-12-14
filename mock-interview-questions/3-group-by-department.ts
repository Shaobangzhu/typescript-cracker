const students = [
    { id: 1, department: "CS" },
    { id: 2, department: "Math" },
    { id: 3, department: "CS" },
];

function groupBy<T, K extends string | number | symbol>(
    items: T[],
    getKey: (item: T) => K
): Record<K, T[]> {
    const result = {} as Record<K, T[]>;

    for(const item of items){
        const key = getKey(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }

    return result;
}

function groupByReduce<T, K extends string | number | symbol>(
    items: T[],
    getKey: (item: T) => K
): Record<K, T[]> {
    return items.reduce((accumutaltor, current) => {
        const key = getKey(current);
        (accumutaltor[key] ?? []).push(current);
        return accumutaltor;
    }, {} as Record<K, T[]>);
}