// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
    const closeButton: Element = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li : HTMLElement | null = closeButton.parentElement;
        if (!!li)
            li.style.display = "none";
    });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
list?.addEventListener('click', function (ev) {
    const target: HTMLElement = <HTMLElement>ev.target;
    if (!target)
        return;
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(): void {
    const li: HTMLElement = document.createElement("li");
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    if (!inputElement)
        return;
    const inputValue: string = inputElement.value;

    const textNode : Text = document.createTextNode(inputValue);
    li.appendChild(textNode);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const ul = document.getElementById("myUL");
        if (ul)
            ul.appendChild(li);
    }
    inputElement.value = "";

    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener('click', () => {
        const il = span.parentElement;
        if (!!il)
            il.style.display = "none";
    });
}

const addButton: HTMLElement | null = document.querySelector(".addBtn");
addButton?.addEventListener("click", ()=> {
    newElement();
});