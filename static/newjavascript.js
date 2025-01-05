var parts = document.getElementsByClassName('part');
const image_src1='../static/circle.png';
const image_src2='../static/cross.png';
const inImage='../static/images.jpeg';
let select=0;
let array=[1,2,3,4,5,6,7,8,9];
let winner;
var frst=document.getElementsByClassName('first');
frst[0].classList.add('turn');
var scnd= document.getElementsByClassName('second');
for (let i = 0; i < parts.length; i++) {

    parts[i].addEventListener('click', function() {
        if(array[i]!='A' && array[i]!='B'){
        var img = this.querySelector('img');
        console.log(i);
        if(select%2==1){
            img.src = image_src1;
            array[i]= 'B';
            select++;
            frst[0].classList.add('turn');
            scnd[0].classList.remove('turn');
            
        }
        else{
            array[i]='A';
            img.src=image_src2;
            select++;
            frst[0].classList.remove('turn');
            scnd[0].classList.add('turn');
        }
        this.classList.add('open');
    }
        if(select>4){
            winner=mainLogic(array);
            console.log(winner)
            var result='This game is '+winner[3];
            console.log(winner[3],winner[3].endsWith('.'))
            if (winner[3].endsWith('.') ){
            }
            else{
                var banner=document.getElementById('banner');
                banner.style.top='90px';
                banner.textContent=result;
                if (winner[0] != -1){
                parts[winner[0]].classList.add('winner');
                parts[winner[1]].classList.add('winner');
                parts[winner[2]].classList.add('winner');}
                frst[0].classList.remove('turn');
                scnd[0].classList.remove('turn');
            }
            
        }

    });
}



var reset=document.getElementById('restart');
reset.addEventListener('click',function (){
    var banner=document.getElementById('banner');
    array=[1,2,3,4,5,6,7,8,9];
    banner.style.top='-1200px';
    for(let i=0;i<parts.length;i++){
        var img=parts[i].querySelector('img');
        img.src=inImage;
        parts[i].classList.remove('open','winner');

    }
    console.log(array);
    select=0;
    winner=undefined;
    frst[0].classList.add('turn');
    scnd[0].classList.remove('turn');

});

//Need to change the logic for dynamic size 
function  mainLogic(list){
    var p1='Player1';
    var p2='Player2';
    p1= document.getElementById('player1').value;
    p2= document.getElementById('player2').value;
    // console.log(p1);
    if (p1=== ""){
        p1='Player1';
    }
    if (p2=== ''){
        p2='Player2';
    }
    // console.log(p1,p2)
    if(list[0]==list[1] && list[1]==list[2]){
        if (list[0]=='A'){
            return ([0,1,2,'won by ' + p1]);
        }
        else{
            return ([0,1,2,'won by ' + p2]);
        }

    }
    else if (list[0]==list[3] && list[6]==list[0]){
        if (list[0]=='A'){
            return ([0,3,6,'won by ' + p1]);
        }
        else{
            return ([0,3,6,'won by ' + p2]);
        }
    }
 
    else if (list[4]==list[2] && list[4]==list[6]){
        if (list[4]=='A'){
            return ([2,4,6,'won by ' + p1]);
        }
        else{
            return ([2,4,6,'won by ' + p2]);
        }
    }
    else if (list[4]==list[0] && list[4]==list[8]){
        if (list[4]=='A'){
            return ([0,4,8,'won by ' + p1]);
        }
        else{
            return ([0,4,8,'won by ' + p2]);
        }
    }
    else if (list[3]==list[4] && list[4]==list[5]){
        if (list[4]=='A'){
            return ([3,4,5,'won by ' + p1]);
        }
        else{
            return ([3,4,5,'won by ' + p2]);
        }
    }
    else if (list[1]==list[4] && list[4]==list[7]){
        if (list[4]=='A'){
            return ([1,4,7,'won by ' + p1]);
        }
        else{
            return ([1,4,7,'won by ' + p2]);
        }
    }
    else if (list[2]==list[5] && list[5]==list[8]){
        if (list[2]=='A'){
            return ([2,5,8,'won by ' + p1]);
        }
        else{
            return ([2,5,8,'won by ' + p2]);
        }
    }
    else if (list[6]==list[7] && list[7]==list[8]){
        if (list[6]=='A'){
            return ([6,7,8,'won by ' + p1]);
        }
        else{
            return ([6,7,8,'won by ' + p2]);
        }
    }
    else if( select==9){
        return ([-1,-1,-1,'a draw for both. Lets play next Game']);
    }
    else{
        return ([-1,-1,-1,'yet to be finished....']);
    }
}
