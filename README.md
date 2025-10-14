# no-mojibake
Mojibake Character to Normal Character
環境依存文字を代替文字に変換

```
髙 -> 高
① -> (1)
㎝ -> cm
```

# usage

## node.js

```
import { NoMojibake } from "no-mojibake";

console.log(NoMojibake.encode("①")); // (1)

```

## simple web

### data-result

- Make `.no-mojibake` DOM with `data-result`.
- Put `example/dist/main.js` under the DOM.

```
        <textarea class="no-mojibake" data-result="">①②⑪ⅠⅩⅨ㎏髙</textarea>
        <script src="./dist/main.js"></script>
```
- `value` encode to `data-result` on change event

```
        <textarea class="no-mojibake" data-result="(1)(2)⑪1109kg高">①②⑪ⅠⅩⅨ㎏髙</textarea>
        <script src="./dist/main.js"></script>
```

### data-out

- Make `.no-mojibake` DOM with `data-out` what is selector of output DOM.
- Put `example/dist/main.js` under the DOM

```
        <textarea class="no-mojibake" data-out="#out">①②⑪ⅠⅩⅨ㎏髙</textarea>
        <textarea id="out"></textarea>
        <script src="./dist/main.js"></script>
```
- `value` encode to output DOM on change event

```
        <textarea class="no-mojibake" data-out="#out">①②⑪ⅠⅩⅨ㎏髙</textarea>
        <textarea id="out">(1)(2)⑪1109kg高</textarea>
        <script src="./dist/main.js"></script>
```


# build

```
npm install
npm run build
```