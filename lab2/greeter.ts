interface Person{
    firstNmae: string;
    lastName: string;
}



function greeter(person){
    return "Hello," + person.firstNmae + "" + person.lastName;
}

let user = {firstNmae:"Jane", lastName: "User"};

document.body.textContent = greeter(user);