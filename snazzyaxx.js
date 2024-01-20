// dynamic list testing
var listItemCounter = 1;
window.onload = function() {
	loadListFromLocalStorage();
};

function getList() {
	
	var textInput = document.getElementById("textInput");
	var text = textInput.value + " ";
	if (text.trim() !== "") {
		var liId = "listtItem" + listItemCounter;
		var li = document.createElement("li");
		li.setAttribute("id", liId);
		var node = document.createTextNode(text);
		li.appendChild(node);
		var deleteButton = document.createElement("button");
		deleteButton.textContent= "Del";
		deleteButton.onclick = function() {
			console.log(liId);
			removeListItem(liId);
		};
		li.appendChild(deleteButton);
		document.getElementById("gcList").appendChild(li);
		saveListToLocalStorage();
		listItemCounter++;
		textInput.value = "";
	}
}

function removeListItem(id) {
	var element = document.getElementById(id);
	if (element) {
		element.parentNode.removeChild(element);
		saveListToLocalStorage();
	}
}

function saveListToLocalStorage() {
	var listItems = document.getElementById("gcList").innerHTML;
	localStorage.setItem("myList", listItems);
}

function loadListFromLocalStorage() {
	var savedList = localStorage.getItem("myList");
	
	if (savedList) {
		document.getElementById("gcList").innerHTML = savedList;
	var listItems = document.querySelectorAll("#gcList li[id^=listItem]");
	console.log(listItems,listItems.length);
	listItemCounter = listItems.length + 1;
	}
}