var home1 = document.getElementById('homebtn');
home1.onclick = function(){ 
    var home2 = document.getElementById('home').innerHTML;
    document.getElementById('default').innerHTML=home2;
}


var about1 = document.getElementById('aboutbtn');
about1.onclick = function(){
    var about2 =  document.getElementById('about').innerHTML;
    document.getElementById('default').innerHTML=about2;
}

var contact1 = document.getElementById('contactbtn');
contact1.onclick = function(){
    var contact2 =  document.getElementById('contact').innerHTML;
    document.getElementById('default').innerHTML=contact2;
}

var divup = document.getElementById('up');
        divup.onclick = function(){
            document.getElementById("div-one").className='divTwo';
            

        }

        var divdown = document.getElementById('down');
        divdown.onclick = function(){
        document.getElementById("div-one").className='divOne';
            

        }

