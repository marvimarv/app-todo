function addItemFunction(){ 
    const newItem = document.getElementById("newItem");
    if (newItem.value === '') {
        window.alert('Please enter an item');
        return;
    }
    console.log(newItem.value);
    const ul = document.getElementById("myToDo");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newItem.value));
    ul.appendChild(li);
    //this adds multiple classes from bootstrap
    li.classList.add("list-group-item", "list-group-item-dark", "list-group-item-action"); 

    //clear value of input field newItem
    newItem.value ="";

    // add event listener to the li element to listen for a click event and remove the li element when clicked
    li.addEventListener('click', function() {
        ul.removeChild(li);
    });
}

const newItem = document.getElementById("newItem");
newItem.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItemFunction();
    }
});