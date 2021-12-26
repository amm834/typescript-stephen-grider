import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const data = res.data as Todo;
    const userId = data.userId;
    const id = data.id;
    const title = data.title;
    const completed = data.completed;

    console.log(userId, id, title, completed)
})