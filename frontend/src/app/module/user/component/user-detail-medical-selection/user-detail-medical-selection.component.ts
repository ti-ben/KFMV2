import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {SelectConfig} from "@shared/model";
import {Site} from "@site/model";
import {Prestataire} from "@prestataire/model";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {SiteHelper} from "@site/helper";
import {PrestataireHelper} from "@prestataire/helper";
import {User} from "@user/model";
import {UserHelper} from "@user/helper";

@Component({
  selector: 'app-user-detail-medical-selection',
  templateUrl: './user-detail-medical-selection.component.html',
  styleUrls: ['./user-detail-medical-selection.component.scss']
})
export class UserDetailMedicalSelectionComponent implements OnInit {
  prestataireSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  prestataireList: Prestataire[] = [];
  formGroup!: FormGroup;
  @Input() detail: Prestataire = PrestataireHelper.getEmpty();

  constructor(public prestataireService: PrestataireService) { }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  ngOnInit(): void {
    this.setSelectConfig();
    this.formGroup = new FormGroup({

    })
  }

  savePeriod() {
    alert('envoi du form period');
  }

  saveAppointment() {
    alert('envoi du form appointment');
  }

  update(){
    alert('update')
  }

  private setSelectConfig(): void {

    this.prestataireService.list().subscribe((list: Prestataire[]) => {
      this.prestataireList = list;
      this.prestataireSelectConfig$.next({
        label: {label: 'form.prestataire.label.name'},
        placeholder: 'form.prestataire.placeholder.name',
        ctrl: this.getControl('name'),
        selected: this.detail.name,
        values: PrestataireHelper.toPrestataireOptionArray(list)
      });
    });
  }

}
