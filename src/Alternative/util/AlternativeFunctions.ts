import { AlternativeList, Alternative, AlternativeBlock } from "./AlternativeType"

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
    var l: Alternative[] = []
    list.forEach(item => {
        l = l.concat(separate(item))
    })
    return l
}

export function separateBlock<T>(list: AlternativeBlock<T>[]): AlternativeList[]{
    return list.flatMap(item => {
        let bef :string[] = []
        for( let index = 0; index < item.after.length; index++) {
            bef.push(String.fromCharCode(item.before.charCodeAt(0)+index))
        }
        return {before: bef, after: item.after}
    })
}
