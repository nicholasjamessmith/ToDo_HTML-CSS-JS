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
  createTodo: (newTodo) => {
    Todo.todos.push(newTodo)
    Todo.saveTodos()
  },
  //Remove todo
  deleteTodo: (index) => {
    Todo.todos.splice(index, 1)
    Todo.saveTodos()
  },
  // Save Todos to localstorage
  
  saveTodos: () => {
    const arrayString = JSON.stringify(Todo.todos)
    // save array string in localstorage
    localStorage.setItem("todos", arrayString)
  },
  //Load Todos from Localstorage
  loadTodos: () => {
    // get the string from localStorage
    const arrayString = localStorage.getItem("todos")
    if (arrayString) {
      // turn the string back into an array
      const todos = JSON.parse(arrayString)
      //update the list of todos
      Todo.todos = todos
    }
  }
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
    
    div.addEventListener("click", () => {
      // delete the todo
      Todo.deleteTodo(index)
      //update the DOM
      render()
    })
  })
}
Todo.loadTodos()
render()

// Handle the form submission
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  //Prevents page refresh when form submission button clicked
  event.preventDefault()
  
  //generate a formData object
  const formData = new FormData(form)
  
  //console.log(formData.get("todo"))
  
  //create a new todo object
  const newTodo = { text: formData.get("todo") }
  
  //add the todo to array
  Todo.createTodo(newTodo)
  
  //update the DOM
  render()
})