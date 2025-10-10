import { Alternatives } from "./Alternative/Alternatives";

export class NoMojibake {
  static encode(str: string): string {
    console.debug(`Hello ${str}`)
    let ret = str
    Alternatives.forEach(alt => {
      ret = ret.replaceAll(alt.before, alt.after)
    })
    console.debug(`Bye ${ret}`)
    return ret;
  }
}

export interface NoMojibakeDataset {
  out: string;
  result: string;
}