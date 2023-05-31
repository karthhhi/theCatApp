const baseUrl = process.env.CAT_API_DOMAIN || process.env.NEXT_PUBLIC_CAT_API_DOMAIN;

export const getAllCats = async (query: CatQueryType): Promise<ApiDataType> => {
    const queryKeys = Object.keys(query);
    let queryString: string = '';
    if(queryKeys.length !== 0) {
        queryString = '?' + queryKeys.map((key) =>`${key}=${encodeURIComponent(query[key as keyof CatQueryType])}`).join('&');
    }
    const cats: Response = await fetch(`${baseUrl}/cats${queryString}`);
    return cats.json();
}

export const getAllCatBreeds = async (): Promise<ApiDataType> => {
    const breeds: Response = await fetch(`${baseUrl}/cats/breeds`);
    return breeds.json();
}