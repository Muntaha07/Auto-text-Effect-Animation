var data = ["youtuber", "web Developer",
    "Freelancer","instruction"]

var conEl = document.querySelector
("#container")

var index =0
var characterindex =0


function updatetext() {
    characterindex++
    conEl.innerHTML =
`<h1> i am ${data[index].slice(0,1)
     ==="I" ? "an":"a"}
 ${data[index].slice(0,
characterindex)}</h1>`


if(characterindex===data[index].length){
 index++
 characterindex=0
}
if(index ===data.length){
    index=0;
}
setTimeout(updatetext, 600);
}




updatetext()