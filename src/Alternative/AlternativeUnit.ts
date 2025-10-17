import { separateList } from "./util/AlternativeFunctions";
import { Alternative, AlternativeList } from "./util/AlternativeType";

export const AlternativeUnit1: Alternative[] = [
    { before: "㎜", after: "mm" },
    { before: "㎝", after: "cm" },
    { before: "㎞", after: "km" },
    { before: "㎎", after: "mg" },
    { before: "㎏", after: "kg" },
    { before: "㍍", after: "メートル" },
]

export const AlternativeUnit2: AlternativeList[] = [
    { before: "㍉㌢㌔", after:["ミリ", "センチ", "キロ"]},
]

export const AlternativeUnit: Alternative[] = [
    ...AlternativeUnit1,
    ...separateList(AlternativeUnit2)
]

