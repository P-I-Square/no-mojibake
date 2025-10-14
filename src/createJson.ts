import { Alternatives } from "./Alternative/Alternatives";
import { AlternativeNumber } from "./Alternative/AlternativeNumber";
import { AlternativeKanji } from "./Alternative/AlternativeKanji";
import { AlternativeUnit } from "./Alternative/AlternativeUnit";
import { separateList } from "./Alternative/AlternativeType";

import fs from "fs";
import { exit } from "process";

function createJson(min:boolean, dict:boolean, type:string) {
    const space = min ? undefined : '\t';
    let filename = (dict ? "Dict" : "") + (min ? ".min.json" : ".json");
    let data;
    switch(type){
        case "all":
            filename = "dist/Alternatives" + filename;
            data = Alternatives
            break;
        case "kanji":
            filename = "dist/AlternativeKanjis" + filename;
            data = AlternativeKanji
            break;
        case "number":
            filename = "dist/AlternativeNumbers" + filename;
            data = separateList(AlternativeNumber)
            break;
        case "unit":
            filename = "dist/AlternativeUnits" + filename;
            data = AlternativeUnit
            break;
        default:
            console.error("type error")
            exit(-1)
    }

    if(dict) {
        data = Object.fromEntries(
        data.map(item => [item.before, item.after])
        );
    }

    fs.writeFileSync(filename, JSON.stringify(data, null, space))

}

function createAllType(min:boolean, dict:boolean){
    createJson(min, dict, "all")
    createJson(min, dict, "number")
    createJson(min, dict, "unit")
    createJson(min, dict, "kanji")
}

createAllType(true,true)
createAllType(true,false)
createAllType(false,true)
createAllType(false,false)
