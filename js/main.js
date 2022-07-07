let num = 1; 
let theme1 = document.querySelector( '.main.theme1' );
let theme2 = document.querySelector( '.main.theme2' );
let theme3 = document.querySelector( '.main.theme3' );
function changeTheme(){

    if ( num === 1 )
    {
        theme1.style.display = "flex";
        theme2.style.display = "none";
        theme3.style.display = "none";
    } else if ( num === 2 )
    {
        theme1.style.display = "none";
        theme2.style.display = "flex";
        theme3.style.display = "none";
    } else if ( num === 3 )
    {
        theme1.style.display = "none";
        theme2.style.display = "none";
        theme3.style.display = "flex";
    }
        if ( num === 3 )
    {
        num = 0;
    }
            num++;
}
/// clac 
let lastValue = 0;
let ans = 0;
let sum = 0;
let ans1 = 1;
let input = document.querySelectorAll( '.input' );
let lastoperation = 0;
function reset()
{
    input[0].textContent = "";
    input[1].textContent = "";
    input[2].textContent = "";
}
function del() {
    input[ 0 ].textContent= input[ 0 ].textContent.slice(0,-1);
    input[ 1 ].textContent= input[1].textContent.slice(0,-1);
    input[ 2 ].textContent= input[ 2 ].textContent.slice( 0, -1 );
}
function main( event ){
    input[0].textContent += event.target.textContent;
    input[1].textContent += event.target.textContent;
    input[ 2 ].textContent += event.target.textContent;
}


function add()
{
    if ( input[ 0 ].textContent === "" )
    {
        
    } else
    {   
        
        ans = parseFloat( input[ 0 ].textContent );
        sum += ans;
        lastoperation = 1; 
        reset();
    }
}

function minus()
{
    if ( input[ 0 ].textContent === "" )
    {
        
    } else
    {
        ans = parseFloat( input[ 0 ].textContent );
        sum += ans;
        lastoperation = 2; 
        reset();
    }
}
function mult()
{
    if ( input[ 0 ].textContent === "" )
    {
        
    } else
    {
        ans1 = parseFloat( input[ 0 ].textContent );
        sum += ans1;
        lastoperation = 3; 
        reset();
    }
}
function divtion()
{
    if ( input[ 0 ].textContent === "" )
    {
        
    } else
    {
        ans1 = parseFloat( input[ 0 ].textContent );
        sum += ans1;
        lastoperation = 4; 
        reset();
    }
}
function equal()
{  
    if ( lastoperation === 1 )
    {   
        sum += parseFloat( input[ 0 ].textContent );
        reset();
        display( sum )
        sum = 0;
    }
    else if ( lastoperation === 2 )
    { 
        sum  -= parseFloat( input[ 0 ].textContent );
        reset();
        display( sum )
        sum = 0;
    }
    else if ( lastoperation === 3 )
    {   
        sum *= parseFloat( input[ 0 ].textContent );
        reset();
        display( sum )
        sum = 0;
    }
    else if ( lastoperation === 4)
    {   
        sum /= parseFloat( input[ 0 ].textContent );
        reset();
        display( sum );
        sum = 0;
    }
}
function display(num){
    input[0].textContent = num;
    input[1].textContent = num;
    input[2].textContent = num;
}
function removeShadow( event )
{
    event.target.style.boxShadow  = "0px 0px 0px";
}
function setShadow(event){
    event.target.style.boxShadow  = "0px 4px 1px";
}
function main( event ){
    input[0].textContent += event.target.textContent;
    input[1].textContent += event.target.textContent;
    input[2].textContent += event.target.textContent;
}