import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() form;
  @Output() submit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submit.emit();
  }
}
