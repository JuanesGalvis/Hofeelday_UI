import { Task as TaskType } from '../../Types/Task';
import { Task } from './Task';

import { useQuery } from 'react-query';

export function Tasks () {

    const { data, error, isLoading } = useQuery('Get all tasks', async () => {

        const response = await fetch('http://localhost:3000/task');
        const result = await response.json();
        return result.tasks;

    })

    if (error) { return ( <h2>Error con el BackEnd</h2> ) }
    if (isLoading) { return ( <h2>⌛ Loading... ⏳</h2> ) }

    return (
        <div>
            {
                data.map((item: TaskType) => {
                    return (
                        <Task key={item.id} {...item}></Task>
                    )
                })
            }
        </div>
    )

}