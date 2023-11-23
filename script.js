function drop(){
 let inp = document.getElementById("input").value;
    if(inp == 'JJK') {

    document.getElementById('JJK').style.boxShadow = '5px 5px 5px ';
    document.getElementById('JJK1').style.boxShadow = '5px 5px 5px ';
    document.getElementById('JJK2').style.boxShadow = '5px 5px 5px ';
    document.getElementById('JJK3').style.boxShadow = '5px 5px 5px ';

    document.getElementById('hidden').style.display = 'block';
}
if(inp == 'bleach'){
    document.getElementById('bleach').style.boxShadow = '5px 5px 5px ';
    document.getElementById('bleach1').style.boxShadow = '5px 5px 5px ';
    document.getElementById('hidden').style.display = 'block';

}


}
 function drop1(){
    let inp = document.getElementById("input").value; 


if(inp == 'bleach'){
    
    document.getElementById('bleach').style.display = 'none';
    document.getElementById('bleach1').style.display = 'none';
    document.getElementById('bleach2').style.display = "block"
    document.getElementById('bleach3').style.display = "block"
}
if(inp == 'JJK'){
    document.getElementById('JJK').style.display  = 'none';
    document.getElementById('JJK1').style.display = 'none';
    document.getElementById('JJK2').style.display = 'none';
    document.getElementById('JJK3').style.display = 'none';
    document.getElementById('JJK4').style.display = "block"
    document.getElementById('JJK5').style.display = "block"
    document.getElementById('JJK6').style.display = "block"
    document.getElementById('JJK7').style.display = "block"
}


}

   

 
 










