interface Todo {
    title: string
    description: string
    completed?: boolean
}

// Partial = used to make all the attributes in our type(Todo) optional 

const updateTodo = (todo: Partial<Todo>) => { }

// makes the  properties read only only on myTodo
const myTodo: Readonly<Todo> = { title: "first todo", description: 'first todo description' }


// creates a recod of a particular type
const todos: Record<string, Todo> = {
    todo1:  { title: "first todo", description: 'first todo description' },
    todo2:  { title: "second todo", description: 'second todo description' },
    todo3:  { title: "third todo", description: 'third todo description' },
}
const todos2: Record<number, Todo> = {
    1:  { title: "first todo", description: 'first todo description' },
    2:  { title: "second todo", description: 'second todo description' },
    3:  { title: "third todo", description: 'third todo description' },
}


// takes all the properties listed(title and completed) from a given type (Todo) for another object
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: 'some title',
    completed: false
}
// or u can do the exact opposite with Omit
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: 'some title',
    completed: false
}