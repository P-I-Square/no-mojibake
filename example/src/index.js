import { NoMojibake } from "no-mojibake";

function encode() {
    const selector = document.querySelectorAll(".no-mojibake");
    selector?.forEach(element => {
        if(element){
            element.addEventListener("change", ()=>{
                const result = NoMojibake.encode(element.value);
                const out = document.querySelector(element.dataset.out)
                if(out) out.value = result
                if(element.dataset.result) element.dataset.result = result
            });
        }
    });
}

encode()

