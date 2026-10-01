const karty = ["a7","a8","a9","a10","asp","asv","ak","aa","b7","b8","b9","b10","bsp","bsv","bk","ba","c7","c8","c9","c10","csp","csv","ck","ca","d7","d8","d9","d10","dsp","dsv","dk","da"];
let kontrola = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let order = [];
let random = 0;
let i = 0;
function sort(){
    kontrola.fill(0);
    order = [];
    let i = 0;

    while(i<32){
        random = Math.floor(Math.random() * 32);
        if(kontrola[random]==0){
            order[i] = karty[random];
            kontrola[random] = 1;
            window.alert(order[i]);
            i++;
            
        }
    }


}
function out(){
    sort;
    let i = 0
    while(i<32){
        window.alert(order[i]);
        i++;
        
    }
}

function test(){
    sort;
    out;

}