# no-mojibake
Mojibake Character to Normal Character
環境依存文字を代替文字に変換

髙 -> 高
① -> (1)
㎝ -> cm

# usage

```
import { NoMojibake } from "no-mojibake";

console.log(NoMojibake.encode("①")); // (1)

```

# build

```
npm install
npm build
```