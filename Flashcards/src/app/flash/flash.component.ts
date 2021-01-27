import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFlash } from '../i-flash';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss'],
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash = {
    question: '',
    answer: '',
    id: 0,
    show: false,
  };
  @Output() toggleCard = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() rememberedChange = new EventEmitter();

  onToggleCard() {
    this.toggleCard.emit(this.flash.id);
  }

  deleteFlash() {
    this.delete.emit(this.flash.id);
  }

  editFlash() {
    this.edit.emit(this.flash.id);
  }

  markCorrect() {
    this.rememberedChange.emit({
      id: this.flash.id,
      flag: 'correct'
    });
  }

  markIncorrect() {
    this.rememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect'
    });
  }

  ngOnInit(): void {}
}
