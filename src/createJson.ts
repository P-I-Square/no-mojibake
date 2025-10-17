import { Alternatives } from "./Alternative/Alternatives";
import { AlternativeNumber } from "./Alternative/AlternativeNumber";
import { AlternativeKanji } from "./Alternative/AlternativeKanji";
import { AlternativeUnit } from "./Alternative/AlternativeUnit";

import fs from "fs";
import { exit } from "process";
import { Alternative } from "./Alternative/util/AlternativeType";

function createJson(min:boolean, dict:boolean, _data:Alternative[], name:string) {
    const space = min ? undefined : '\t';
    let filename = "dist/"+ name +(dict ? "Dict" : "") + (min ? ".min.json" : ".json");
    let data:any = _data
    if(dict) {
        data = Object.fromEntries(
            _data.map(item => [item.before, item.after])
        );
    }

    fs.writeFileSync(filename, JSON.stringify(data, null, space))

}

function createAllType(min:boolean, dict:boolean){
    createJson(min, dict, Alternatives, "Alternatives")
    createJson(min, dict, AlternativeKanji, "AlternativeKanjis")
    createJson(min, dict, AlternativeNumber, "AlternativeNumbers")
    createJson(min, dict, AlternativeUnit, "AlternativeUnits")
}

createAllType(true,true)
createAllType(true,false)
createAllType(false,true)
createAllType(false,false)
