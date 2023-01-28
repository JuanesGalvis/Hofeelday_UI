import { Task as TaskType } from '../../../Types/Task';

export function Task ({ id, title, content, complete }: TaskType) {

    const handlerDelete = async () => {

        const response = await fetch(`http://localhost:3000/task/${id}`, {
            method: "DELETE"
        })
        const result = await response.json();
        console.log(result);
        
    }

    const handlerCheck = async () => {
        
        const response = await fetch(`http://localhost:3000/task/complete/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        console.log(result);
    }

    return (
        <section>
            <label htmlFor={id}>
                <h2>{title}</h2>
            </label>
            <p>{content}</p>
            { complete ? <h4>COMPLETADA</h4> : <button onClick={handlerCheck}>✅</button> }
            <button onClick={handlerDelete}>🗑️</button>
        </section>
    )
}