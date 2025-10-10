export interface Alternative {
    before: string,
    after: string
}
export interface AlternativeList {
    before: string | string[],
    after: string | string[]
}

export function separate(list: AlternativeList) : Alternative[]{
    let bef :string[] = []
    if(Array.isArray(list.before)) {
        bef = list.before
    }else {
        bef = list.before.split("")
    }
    let aft :string[] = []
    if(Array.isArray(list.after)) {
        aft = list.after
    }else {
        aft = list.after.split("")
    }
    
    const ret :Alternative[] = []
    for (let index = 0; index < bef.length; index++) {
        const alt: Alternative = {before: bef[index]!, after: aft[index]!}
        ret.push(alt)
    }
    return ret
}

export function separateList(list: AlternativeList[]): Alternative[]{
    return list.map(item => {
        return separate(item)
    }).flat()
}
