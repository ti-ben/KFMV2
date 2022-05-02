import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelWithParam } from '@shared/model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

    @Input() label!: LabelWithParam;
    @Input() placeholder!: string;
    @Input() ctrl!: FormControl;
    @Output() onBlur = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
      //console.log('ca init input text');
    }

    ngOnChange() {
        //console.log('ca change');
    }

}
