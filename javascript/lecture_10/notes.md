# Lecture 10 - DOM Manipulation and Browser Events
## DOM Manipulations



## Browser Events
- events and event listeners
- usr interactions
**Three major categories:**
- user actions
  - clicking
  - hovering
  - typing
- browser actions
  - page loading
  - resizing
- other process in env (environmental event)
  - some OS action

- pay attention to element vs elemnts

```javascript
// immediatly calls the function, regardless if the button has been pressed
myBtn.addEventListener("click", doSomething());

// calls function on btn click
myBtn.addEventListener("click", doSomething);
```

### defer
### Form Submission
```javascript
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event){
    event.preventDefault();
})
```

```javascript
let myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", () => {
    alert("AHHHH!!")
});//can replace anonymous function w/ a named function
```

## Dynamic Content
```javascript
const container = document.getElementById("container");
const addButton = document.getElementById("addButton");
function addNewParagraph(){
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "New Paragraph made with JS";
    container.appendChild(newParagraph);
}
```


## Document Fragments
```javascript
let fragment = document.createDocumentFragment();
let child = document.createElement('div');
child.innerText = 'Hello, World!';
fragment.appendChild(child);
document.body.appendChild(fragment);
```
- post in a fragment
- comments in a fragment

## Dynamic Form 

 