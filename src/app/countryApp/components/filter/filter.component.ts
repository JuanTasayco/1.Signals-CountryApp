import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  regionSelectInput: FormControl = new FormControl("", []);

  regions: any[] = [
    {
      name: "Africa",
      value: "africa"
    }, {
      name: "America",
      value: "americas"
    }, {
      name: "Asia",
      value: "asia",
    },
    {
      name: "Europa",
      value: "europe"
    }, {
      name: "Oceania",
      value: "oceania"
    },
    {
      name: "Antartida",
      value: "antarctic"
    }
  ]

  @Output() emitRegionEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.regionSelectInput.valueChanges.subscribe((value) => {
      if (value.trim().length > 0) {
        this.emitRegionEvent.emit(value);
      }
    })
  }
}
