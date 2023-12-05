//Create a Todo
//Write in the input box
//Then click the button
//Todo appears with the other todos

//Complete a Todo
//Click on a todo
//Todo should disappear

//Data model
const Todo = {
  //List of Todos
  todos: [{ text: "Breakfast" }, { text: "Lunch" }],
  //Retrieve our todos
  getTodos: () => { return Todo.todos },
  //Adds a new todo
  createTodo: () => { Todo.todos.push(newTodo) },
  //Remove todo
  deleteTodo: (index) => { Todo.todos.splice(index, 1) }
}

//Render function
const render = () => {
  const main = document.querySelector("main")

  //Empty the main div
  main.innerHTML = ""

  //Loop over todos, create a div or each todo
  Todo.getTodos().forEach((item, index) => {
    //Create a div
    const div = document.createElement("div")
    //Set the div's text to the todo
    div.innerText = item.text
    //add a class of "todo" to the div
    div.classList.add("todo")
    
    
    //Append the div to the main
    main.append(div)
  })
}

render()