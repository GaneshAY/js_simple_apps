
let qButton = document.getElementById('qButton');
qButton.addEventListener("click", evt => {

    let quoteDiv = document.getElementById('quote');
    fetch('https://tronalddump.io/random/quote')
    .then(res => res.json())
    .then( quote => {
        quoteDiv.innerHTML+= `<p> ${quote.value}</p>`
        });
    });

qButton.addEventListener("mouseover", evt => {
    console.log("Mouse over");
    qButton.style.backgroundColor="blue";
    qButton.style.cursor="pointer";
});

qButton.addEventListener("mouseout", evt => {
    console.log("Mouse out");
    qButton.style.backgroundColor="white";
});
