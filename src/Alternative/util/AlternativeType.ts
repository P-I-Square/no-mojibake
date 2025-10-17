export interface Alternative {
    before: string,
    after: string
}
export interface AlternativeList {
    before: string | string[],
    after: string | string[]
}

export interface AlternativeBlock<T> {
    before: string,
    after: string | string[]
}
