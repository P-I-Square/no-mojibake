import { AlternativeKanji } from "./AlternativeKanji"
import { AlternativeNumber } from "./AlternativeNumber"
import { Alternative } from "./util/AlternativeType"
import { AlternativeUnit } from "./AlternativeUnit"

export const Alternatives:Alternative[] = [
    ...AlternativeKanji,
    ...AlternativeUnit,
    ...AlternativeNumber,
]
