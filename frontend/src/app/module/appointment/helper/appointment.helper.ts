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
      appointment_id: '',
      start_date: '',
      end_date: '',
      price: '',
      theme: '',
      comment: '',
      type: '',
      category: ''
    };
  }
}
