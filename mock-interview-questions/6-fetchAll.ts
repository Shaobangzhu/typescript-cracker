async function fetchAll<T>(urls: string[]): Promise<T[]> {
    const requests: Promise<T>[] = urls.map(async (url) => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }

        // 这里假设后端返回json，并且类型是T
        return response.json() as Promise<T>;
    });

    return Promise.all(requests);
}