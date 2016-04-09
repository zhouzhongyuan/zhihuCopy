var listener = false;
if(!listener){
    document.addEventListener("copy",copy,false);
}
function copy(e){
    listener = true;
    if(typeof e.clipboardData === "object"){
        var m = window.getSelection().toString();
        e.clipboardData.setData("text/plain",m);
        e.preventDefault();
        return;
    }
}