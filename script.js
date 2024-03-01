function del(event)
{
    event.target.parentElement.remove()
}
var outer=document.getElementById("outeralert")
var inner=document.getElementById("alertmessage")
function newaddbook()
{
    outer.style.display="block"
    inner.style.display="block"
}
var container=document.querySelector(".container")
var bname=document.getElementById("bookname")
var aname=document.getElementById("authorname")
var description=document.getElementById("description")
function add(event)
{
    var listitem=document.createElement("div")
    listitem.setAttribute("class","box")
    listitem.innerHTML=`<h3>${bname.value}</h3> <h5>${aname.value}</h5> <p>${description.value}</p> <button id="deletebutton" onclick="del(event)">Delete</button>`
    container.append(listitem)
    outer.style.display="none"
    inner.style.display="none"
}

function cancel(event)
{
    console.log("cghsjbJBKCfdgrfcyjsgbdSHNCUJSHNCFUKDHNV")
    event.preventDefault()
    outer.style.display="none"
    inner.style.display="none"
}