function taoID(){
    var id='';
    //sinh ID
     id = Math.random().toString().substr(2,10) + "_" + String(new Date().getTime());
    return id; 
    }