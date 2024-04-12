import { Injectable } from '@angular/core';
import { Task } from '../interfaces/tasks.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TaskService {

  //Array de objetos con información de tareas
  public tasksList: Task[] = [
    {
      id: uuid(),
      nombre: 'Tarea de prueba',
      completado: false,
    },
    {
      id: uuid(),
      nombre: 'Tarea de prueba',
      completado: false,
    },
    {
      id: uuid(),
      nombre: 'Tarea de prueba',
      completado: false,
    },
  ];
  
  //Función para agregar una nueva tarea
  addTask(task: Task): void {
    const newTask: Task = {
      ...task,
      id: uuid(),
    };
    this.tasksList.push(newTask);
  }

  //Función para eliminar una tarea por ID
  removeTaskById(id: string) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
  }

  //Función para marcar o desmarcar como completada una tarea por ID
  completeTask(id: string) {
    this.tasksList = this.tasksList.map((task) => {
      if (task.id === id && !task.completado) {
   
        return { ...task, completado: true };
        
      } else if (task.id === id && task.completado){

         return { ...task, completado: false }
      }

      return task;
    });
  }
}
