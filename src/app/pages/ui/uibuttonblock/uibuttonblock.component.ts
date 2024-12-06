import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-uibuttonblock',
  standalone: true,
  imports: [],
  templateUrl: './uibuttonblock.component.html',
  styleUrl: './uibuttonblock.component.css'
})
export class UibuttonblockComponent {
  @Input() object: Object = {}

  @Output() createEvent = new EventEmitter<Object>();
  @Output() updateEvent = new EventEmitter<Object>();
  @Output() deleteEvent = new EventEmitter<Object>();
  @Output() readEvent = new EventEmitter<Object>();

  createData(item: Object) {
   this.updateEvent.emit(item);
  }
  updateData(item: Object) {
   this.updateEvent.emit(item);
  }

  deleteData(item: Object) {
    this.deleteEvent.emit(item);
  }

  readData(item: Object) {
    this.readEvent.emit(item)
  }
}
