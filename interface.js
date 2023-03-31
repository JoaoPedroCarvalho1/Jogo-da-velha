document.addEventListener('DOMContentLoaded', () => {

    // adicionar o click

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    console.log(event.target)
    // selecionar a div q serra colocado os simbolos

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        updateSquares(position);

        setTimeout(()=>{
            alert("O Jogo Acacbou - O vencedor foi " + playerTime);

        },10);
        location.reload();
    }
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class=${symbols}></div>`
}

function restart(){
    location.reload();
}

// function updateSquares(){

//     // Adicionar o resultado(X ou O) ao  HTML

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbols = board[position];

//         if(symbols != ''){
//             square.innerHTML = `<div class=${symbols}></div>`
//         }
//     })

