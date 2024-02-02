var viccek=[
    {
        "Szöveg":"Csak szép nőt szabad feleségül venni. A csúnya a nyakunkon marad.",
        "kep":"szepno.jpg"
    },
    {
        "Szöveg":"Az orvosok azért beszélnek latinul, hogy a betegek szokják a holt nyelvet.",
        "kep":"orvos.jpg"
    },
    {
        "Szöveg":"Az alkohol nem oldja meg a problémákat - bár a tej sem.",
        "kep":"alkohol.jpg"
    },
    {
        "Szöveg":"Az orvostudomány abból áll, hogy szórakoztatják a beteget, mialatt a természet meggyógyítja.",
        "kep":"termeszet.jpg"
    },
    {
        "Szöveg":"A kamaszfiúk fejét már a suliban azzal tömik: használjatok gumit! Pedig higgyétek el, nővel sokkal jobb.",
        "kep":"koton.jpg"
    },
    {
        "Szöveg":"A valóság azoknak való akik nem bírják a kábítószert.",
        "kep":"kabszer.jpg"
    }
    

]



console.log(viccek)
var veletlen=-1
sorsolas()
console.log("Globális változó"+veletlen)
function sorsolas()
{
    document.getElementById("kesleltetes").innerHTML=""
    do
    {
        var ujveletlen = Math.floor(Math.random()*viccek.length);
        console.log("Újbóli kisorsolta!"+ujveletlen)
    }
    while(veletlen==ujveletlen)
    veletlen=ujveletlen
    veletlen = Math.floor(Math.random()*viccek.length);
    console.log(veletlen)
    document.getElementById("szöveghely").innerHTML=viccek[veletlen].Szöveg
    document.getElementById("kephely").innerHTML= `<img src="${viccek[veletlen].kep}" alt="" title="">`
}
function kattint()
{
    document.getElementById("szöveghely").innerHTML=""
    document.getElementById("kephely").innerHTML=""
    document.getElementById("kesleltetes").innerHTML=`<img src="toltes.gif" alt="">`
    setTimeout(sorsolas, 5000);
}