import { separateList } from "./util/AlternativeFunctions";
import { Alternative, AlternativeList } from "./util/AlternativeType";

export const AlternativeUnit1: Alternative[] = [
    { before: "㎜", after: "mm" },
    { before: "㎝", after: "cm" },
    { before: "㎞", after: "km" },
    { before: "㎎", after: "mg" },
    { before: "㎏", after: "kg" },
    { before: "㍍", after: "メートル" },
    { before: "㌘", after: "グラム" },
    { before: "㌧", after: "トン" },
    { before: "㌃", after: "アール" },
    { before: "㌶", after: "ヘクタール" },
    { before: "㍑", after: "リットル" },
    { before: "㍗", after: "ワット" },
    { before: "㌍", after: "カロリー" },
    { before: "㌦", after: "ドル" },
    { before: "㌣", after: "セント" },
    { before: "㌫", after: "パーセント" },
    { before: "㍊", after: "ミリバール" },
    { before: "㌻", after: "ページ" },
]

export const AlternativeUnit2: AlternativeList[] = [
    { before: "㍉㌢㌔", after:["ミリ", "センチ", "キロ"]},
    { before: "㎡㎥㎠㎤㎟㎣㎢㎦", after:["m^2", "m^3", "cm^2", "cm^3", "mm^2", "mm^3", "km^2", "km^3"]},
]

export const AlternativeUnit: Alternative[] = [
    ...AlternativeUnit1,
    ...separateList(AlternativeUnit2)
]
