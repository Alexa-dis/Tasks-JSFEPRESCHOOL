const area = document.querySelector('.area');
const boxes = document.querySelectorAll('.box');
let result = '';
let move = 0;

area.addEventListener('click', event => {
    if(event.target.className = 'box') {
        move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
        move++;
        check();
    }
})

const check = () => {
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (i = 0 ; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X'
        ) {
            result = "CROSSES WIN!";
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O' && boxes[arr[i][2]].innerHTML === 'O'
        ) {
            result = "ZEROS WIN!";
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    console.log(winner)
}