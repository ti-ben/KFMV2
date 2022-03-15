import { Appointment } from '@appointment/model/business';
import { AppointmentDto } from '@appointment/model';

export class AppointmentHelper {
  public static fromDto(dto: AppointmentDto): Appointment {
    return {
      appointment_id: dto.appointment_id,
      start_date: dto.start_date,
      end_date: dto.end_date,
      price: dto.price,
      theme: dto.theme,
      comment: dto.comment,
      type: dto.type,
      category: dto.category
    }
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

  static getEmpty():Appointment {
    return {
      appointment_id: '',
      start_date: new Date(),
      end_date: new Date(),
      price: '',
      theme: '',
      comment: '',
      type: '',
      category: ''
    };
  }
}
