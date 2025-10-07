document.addEventListener("DOMContentLoaded", () =>{
    // let myName = document.getElementById("name");
    // let myEmail = document.getElementById("email");
    // let myAge = document.getElementById("age");

    // let myForm = document.getElementById("myForm");
    // myForm.addEventListener("submit", function(event){
    //     event.preventDefault();
    //
    //     //console.log(myName.value);
    //     //console.log(typeof myName.value)
    //
    //     // for(item in myName.value){
    //     //    console.log(item);
    //     //    console.log(typeof item);
    //     //    console.log(myName.value[item]);
    //     // }
    //
    //
    //     for(item of myName.value){
    //         console.log(item);
    //         console.log(typeof item);
    //     }
    // })

    // const container = document.getElementById("container");
    // const addButton = document.getElementById("myBtn");
    //
    // let yes = 0;
    // function addNewParagraph(){
    //     const newParagraph = document.createElement('p');
    //     newParagraph.textContent = `${yes++}: New Paragraph made with JS`;
    //     newParagraph.style.color = "blue";
    //     newParagraph.style.fontSize = "72px"
    //     container.appendChild(newParagraph);
    //     // console.log(document);
    //     const newLink = document.createElement("a");
    //     newLink.textContent = "Click Me";
    //     newLink.setAttribute("href", "https://google.com")
    //     container.appendChild(newLink);
    // }
    // addButton.addEventListener("click", addNewParagraph)
    //---------------------------------------------------------
    const people1 = [
        {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            age: 28
        },
        {
            name: "Brian Smith",
            email: "brian.smith@example.com",
            age: 34
        },
        {
            name: "Carla Martinez",
            email: "carla.martinez@example.com",
            age: 22
        },
        {
            name: "David Lee",
            email: "david.lee@example.com",
            age: 41
        },
        {
            name: "Emma Brown",
            email: "emma.brown@example.com",
            age: 30
        }
    ];
    const people2 = [
        {
            name: "Liam Carter",
            email: "liam.carter@example.com",
            age: 26
        },
        {
            name: "Sophia Kim",
            email: "sophia.kim@example.com",
            age: 31
        },
        {
            name: "Noah Patel",
            email: "noah.patel@example.com",
            age: 29
        },
        {
            name: "Olivia Green",
            email: "olivia.green@example.com",
            age: 24
        },
        {
            name: "Ethan Wilson",
            email: "ethan.wilson@example.com",
            age: 37
        }
    ];


    const myContainer = document.getElementById("container");
    people1.forEach(element => {
        const name = document.createElement("h3");
        const email = document.createElement("p");
        const age = document.createElement("h4");
        const subContainer = document.createElement("article")

        name.textContent = element.name;
        email.textContent = element.email;
        age.textContent = element.age;

        subContainer.style.border = "1px solid black";

        subContainer.appendChild(name);
        subContainer.appendChild(email);
        subContainer.appendChild(age);
        myContainer.appendChild(subContainer);
    })


    const fragment = document.createDocumentFragment(); //not-rendered appending
    const spacer = document.createElement("P")
    fragment.appendChild(spacer);
    people2.forEach(element => {
        const name = document.createElement("h3");
        const email = document.createElement("p");
        const age = document.createElement("h4");
        const subContainer = document.createElement("article")

        name.textContent = element.name;
        email.textContent = element.email;
        age.textContent = element.age;

        subContainer.style.border = "1px solid black";

        subContainer.appendChild(name);
        subContainer.appendChild(email);
        subContainer.appendChild(age);

        fragment.appendChild(subContainer);
    })
    myContainer.appendChild(fragment);

});




