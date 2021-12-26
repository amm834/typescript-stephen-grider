import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const data = res.data as Todo;
    const id = data.id;
    const title = data.title;
    const completed = data.completed;

    printTodo(id, title, completed);
})

function printTodo(id: number, title: string, completed: boolean) {
    console.log(`
    ID ${id}
    Has a title ${title}
    Is it completed? ${completed}
    `);
}