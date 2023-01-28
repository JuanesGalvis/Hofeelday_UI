import { createTask } from '../../Types/Task';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';

export function CreateNewTask() {

    const { register, handleSubmit } = useForm();

    const fetchData = async (task: createTask) => {
        const response = await fetch('http://localhost:3000/task', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })

        const result = await response.json();
        console.log(result);
    }

    const submitControl = (eventData: any) => {

        const task : createTask = eventData;
        fetchData({
            ...task,
            complete: false
        });

    }

  return (
    <div>
        <h2>Crear nueva tarea</h2>
        <form onSubmit={handleSubmit(submitControl)}>
            <input 
                type="text"
                id="Input__Title"
                placeholder="Título de la tarea"
                {...register("title", {
                    required: true
                })} />
            <input 
                type="text"
                id="Input__Content"
                placeholder="Descrpción de la tarea"
                {...register("content", {
                    required: true
                })} />
            <button type="submit">💾 Guardar</button>
        </form>
    </div>
  )
}
