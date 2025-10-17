import { Alternative } from "./util/AlternativeType"
import { AlternativeKanji } from "./AlternativeKanji"
import { AlternativeNumber } from "./AlternativeNumber"
import { AlternativeUnit } from "./AlternativeUnit"
import { AlternativeMark } from "./AlternativeMark"

export const Alternatives:Alternative[] = [
    ...AlternativeKanji,
    ...AlternativeUnit,
    ...AlternativeNumber,
    ...AlternativeMark,
]
