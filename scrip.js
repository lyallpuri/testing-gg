
// concatenate
document.getElementById("concatenateSomeStrings").onclick = function()
{
    let name =  prompt("first name")
    let name2 = prompt("2nd name")
    document.getElementById("output").innerHTML=name+" "+name2
}

// name
document.getElementById("askname").onclick = function()
{
    let name = prompt("what is your name?")
    document.getElementById("output").innerHTML = name
}

// comparison operator
document.getElementById("comparision").onclick = function()
{

    let name1 = +prompt("enter 1st number")
    let name2 = +prompt("enter 2st number")
    document.getElementById("statement").innerHTML = name1 + "=" + name2 

    if(name1 == name2)
    {
        document.getElementById("output").innerHTML = "true"
    }
    else{
        document.getElementById("output").innerHTML = "false"
    }

}

// if else
document.getElementById("if&els").onclick = function()
{
let name1 = +prompt("your numbers")

if(name1 >= 90)
{
    document.getElementById("output").innerHTML =  "You Got A+" 
}
else if(name1 >= 70)
{
    document.getElementById("output").innerHTML =  "You Got B" 
}
else if(name1 >= 60)
{
    document.getElementById("output").innerHTML =  "You Got C" 
}
else if(name1 >= 34)
{
    document.getElementById("output").innerHTML =  "You Got D"
}
else{
    document.getElementById("output").innerHTML =  "You Failed"
}

}




    




//clear buttons
document.getElementById("clearOP").onclick = function()
{
    document.getElementById("output").innerHTML = null
}

document.getElementById("clearST").onclick = function()
{
    document.getElementById("statement").innerHTML = null
}
