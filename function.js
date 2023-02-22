// Addition Function
function add(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+'|| b=='-' || b=='*'|| b=='/')
    {
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='+';
    }else{
        f.ddd.value+='+';
    }
}

// Subtraction Function

function sub(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+'|| b=='-' || b=='*'|| b=='/')
    {
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='-';
    }else{
        f.ddd.value+='-';
    }
}

// Multiplication function

function mul(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+'|| b=='-' || b=='*'|| b=='/')
    {
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='*';
    }else{
        f.ddd.value+='*';
    }
}

//  Division Function

function div(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+'|| b=='-' || b=='*'|| b=='/')
    {
        f.ddd.value = act.substring(0,act.length-1);
        f.ddd.value+='/';
    }else{
        f.ddd.value+='/';
    }
}