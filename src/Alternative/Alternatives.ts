import { AlternativeKanji } from "./AlternativeKanji"
import { AlternativeNumber } from "./AlternativeNumber"
import { Alternative, separateList } from "./AlternativeType"
import { AlternativeUnit } from "./AlternativeUnit"

export const Alternatives:Alternative[] = [
    ...AlternativeKanji,
    ...AlternativeUnit,
    ...separateList(AlternativeNumber),
]
