var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
var width= 640;
var height = 640;
var blocksize = width/8;
var white= 0;
var black= 1;
var board= [
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,white,black,-1,-1,-1],
    [-1,-1,-1,black,white,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1]
];
var turn = 0;
var totalBlack=2;
var totalWhite= 2;

function init (){
    document.getElementById("btnStart").innerHTML="RESTART";
    c.style.display="block";
    ctx.fillStyle="lightblue"
    ctx.fillRect(0,0,width,height);
    board=[
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,white,black,-1,-1,-1],
        [-1,-1,-1,black,white,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1]
    ];
    turn =0;
    totalBlack= 2;
    totalWhite= 2;
    gameSet();
}

function gameSet(){
    noMove(turn);
    display();
    status();
    Info();
    listener();
}

function drawSquare(row,col){
    c.style.display = "block";
    ctx.fillRect(col*blocksize,now*blocksize,blocksize,blocksize);
    ctx.strokeStyle="blank";
    ctx.strokeRect(col* blocksize,row*blocksize,blocksize,blocksize);
}

function drawCircle(row,col,fillcolor){
    ctx.beginPath();
    ctx.arc(col * blocksize + blocksize/2, row * blocksize + blocksize/2, blocksize/2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = fillcolor;
    ctx.fill();
}

function drawSmallCircle(row,col,fillcolor){
    ctx.beginPath();
    ctx.arc(col*blocksize+blocksize/2, row*blocksize+blocksize/2,blocksize/8,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle=fillcolor;
    ctx.fill();
}

function display(){
    var row,col;
    for (row = 0; row < 8; row++){
        for (col = 0; col < 8; col++){
        drawSquare(row,col);
        if(board[row][col]===0) drawCircle(row,col,"white");
        if(board[row][col]===1) drawCircle(row,col,"black");
    }
}
}