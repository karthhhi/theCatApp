declare module "*module.scss";

interface CatQueryType {
    name?: string;
    breed?: string;
    limit?: number;
    page?: number;
    [key: string]: string | number | boolean;
}

interface ICat {
    _id: string;
    name: string;
    breed: string;
    weight: number;
    createdAt?: string;
    updatedAt?: string;
}

type CatProps = {
    cat: ICat;
}

type ApiDataType = {
    message?: string;
    status?: string;
    cats?: ICat[];
    cat?: ICat;
    breeds?: [];
    totalPages?: number;
    currentPage?: number;
}