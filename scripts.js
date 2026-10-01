const karty = ["a7","a8","a9","a10","asp","asv","ak","aa","b7","b8","b9","b10","bsp","bsv","bk","ba","c7","c8","c9","c10","csp","csv","ck","ca","d7","d8","d9","d10","dsp","dsv","dk","da"];
let kontrola = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let order = [];
let random = 0;
let i = 0;
function sort(){

    let i = 0;

    while(i<32){
        random = Math.floor(Math.random() * 32);
        if(kontrola[random]==0){
            order[random] = karty[random];
            kontrola[random] = 1;
            i = i + 1;
        }
        else[
            
        ]
    }


}
function out(){
    let i = 0
    while(i<32){
        console.print(order[i]);
        i = i+ 1;
    }
}
