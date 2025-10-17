import { separateList, separateBlock } from "./util/AlternativeFunctions"
import { AlternativeBlock, AlternativeList, Alternative } from "./util/AlternativeType"

const NUMBER10 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const NUMBER9 = "123456789"

const AlternativeNumber1: AlternativeList[] = [
    { before: ["1⃣","2⃣","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣"], after: ["[1]","[2]","[3]","[4]","[5]","[6]","[7]","[8]","[9]"] },
    { before: "¹²³⁴⁵⁶⁷⁸⁹", after: NUMBER9 },
    { before: "₁₂₃₄₅₆₇₈₉", after: NUMBER9 },
]

const AlternativeNumber2: AlternativeBlock<10>[] = [
    { before: "①", after: ["(1)","(2)","(3)","(4)","(5)","(6)","(7)","(8)","(9)","(10)"] },
    { before: "⑪", after: ["(11)","(12)","(13)","(14)","(15)","(16)","(17)","(18)","(19)","(20)"] },
    { before: "Ⅰ", after: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"] },
    { before: "ⅰ", after: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"] },
    { before: "⒈", after: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."] },
    { before: "㊀", after: ["(一)","(二)","(三)","(四)","(五)","(六)","(七)","(八)","(九)","(十)"] },
    { before: "㈠", after: ["(一)","(二)","(三)","(四)","(五)","(六)","(七)","(八)","(九)","(十)"] },
]

export const AlternativeNumber: Alternative[] = [
    ...separateList(AlternativeNumber1),
    ...separateList(separateBlock(AlternativeNumber2))
]