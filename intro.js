
//variable to update list element number
var i = 8;

//add HTML for another element to the list's innerHTML property
var addLi = function(){    
    var list = document.getElementById('thelist');
    list.innerHTML += "<li> item " + i + " </li>";
    i++;
}

//adds an element when button is clicked
var b = document.getElementById('b');
b.addEventListener('click', addLi);

//changes head to whatever list element is being hovered over
var changeHead = function() {
    var head = document.getElementById('h');
    var text = this.innerText;
    head.innerText = text;
}

//changes head back to "Hello World!"
var changeHeadBack = function() {
    document.getElementById('h').innerText = "Hello World!";
}

//removes li element from the list
var remove = function() {
    this.remove();
}

//goes through list of li elements and adds events to each
var li = document.getElementsByTagName('li')
for(i = 0; i < li.length; i++){
    li[i].addEventListener("mouseover", changeHead);
    li[i].addEventListener("mouseout", changeHeadBack);
    li[i].addEventListener("click", remove);
}
