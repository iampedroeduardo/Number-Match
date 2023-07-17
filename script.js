function Comeca(){
    jogo=document.querySelector(".jogo");
    for(var c=0;c<20;c++){
        v.push([]);
        for(var i=0;i<9;i++){
            v[c].push("");
            div=document.createElement("div");
            div.setAttribute("id",""+c+i);
            jogo.appendChild(div);
        }
    }
}
var v=[];
Comeca();