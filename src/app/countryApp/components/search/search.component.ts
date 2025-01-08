import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl("", []);
  $inputObs = new BehaviorSubject<string>("");
  @Output() emitEventText: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
    this.$inputObs
      .pipe(debounceTime(1000))
      .subscribe((text: string) => {
        if (text.trim().length > 0) {
          this.emitEventText.emit(text);
        }
      })
  }

  getValue(eventText: any) {
    const text: string = eventText.target.value ?? "";
    this.$inputObs.next(text);
  }

}
