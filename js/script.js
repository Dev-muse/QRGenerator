let qrCode = new QRCode('outputbox');
 let hide = document.querySelector('#outputbox img');
function makeCode(){
    let input = document.getElementById('data');
    qrCode.makeCode(input.value);
}
$("#data").on("blur",makeCode).on("keydown",function(e){
    if(e.keyCode===13){
       makeCode();
    }
})