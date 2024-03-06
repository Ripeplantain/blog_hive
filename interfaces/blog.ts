
export interface Iblog {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface IBlogViewProps {
    blogs: Iblog[];
}

export interface IBlogItemProps {
    blog: Iblog;
}