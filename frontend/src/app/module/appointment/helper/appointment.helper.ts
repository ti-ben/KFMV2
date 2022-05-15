import {Appointment} from '@appointment/model/business';
import {AppointmentDto} from '@appointment/model';
import {FormControl, FormGroup} from "@angular/forms";
import {isNil} from "lodash";

export class AppointmentHelper {
  public static fromDto(dto: AppointmentDto): Appointment {
    if (isNil(dto)) {
      return AppointmentHelper.getEmpty();
    }
    return {
      appointment_id: dto.appointment_id,
      start_date: dto.start_date,
      end_date: dto.end_date,
      price: dto.price,
      theme: dto.theme,
      comment: dto.comment,
      type: dto.type,
      category: dto.category,

    }
  }

  public static toFormGroup(appointment: Appointment = AppointmentHelper.getEmpty()): FormGroup {
    return new FormGroup({
      start_date: new FormControl(appointment.start_date),
      end_date: new FormControl(appointment.end_date),
      price: new FormControl(appointment.price),
      theme: new FormControl(appointment.theme),
      comment: new FormControl(appointment.comment),
      type: new FormControl(appointment.type),
      category: new FormControl(appointment.category),

    });
  }

  public toDto(appointment: Appointment): AppointmentDto {
    return {
      appointment_id: appointment.appointment_id,
      start_date: new Date(),
      end_date: new Date(),
      price: appointment.price,
      theme: appointment.theme,
      comment: appointment.comment,
      type: appointment.type,
      category: appointment.category

    };
  }

  static getEmpty(): Appointment {
    return {
      appointment_id: '',
      start_date: new Date(),
      end_date: new Date(),
      price: '',
      theme: '',
      comment: '',
      type: '',
      category: '',

    };
  }

  static fromDtoArray(data: AppointmentDto[]): Appointment[] {
    return data.map((dto: AppointmentDto) => AppointmentHelper.fromDto(dto));
  }
}
