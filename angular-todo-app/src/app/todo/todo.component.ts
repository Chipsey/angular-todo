import { Component, Input, OnInit, inject } from '@angular/core';
// import { ToDoService } from '../services/todo.service';
import { todo } from '../model/todo.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export type todoType = 'OPEN' | 'DONE';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  imports: [HttpClientModule, ReactiveFormsModule],
  standalone: true,
})
export class TodoComponent implements OnInit {
  todos: any[] = [];

  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.getAllToDos();
  }

  getAllToDos() {
    this.httpClient
      .get<any[]>('http://localhost:3000/todos/')
      .subscribe((data: any) => {
        console.log(data);
        // Assuming data is an array of todos, you may want to assign it to this.todosx
        this.todos = data;
      });
  }

  profileForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  handleSubmit() {
    const data = {
      title: this.profileForm.value.title,
      description: this.profileForm.value.description,
    };
    this.httpClient
      .post('http://localhost:3000/todos/', data)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  handleRemove(id: number) {
    this.httpClient.delete(`http://localhost:3000/todos/${id}`).subscribe(
      () => {
        console.log(`Todo with ID ${id} deleted successfully.`);
      },
      (error) => {
        console.error(`Error deleting todo with ID ${id}:`, error);
      }
    );
  }

  @Input() type: todoType = 'OPEN';
  @Input() todo!: todo;
}
