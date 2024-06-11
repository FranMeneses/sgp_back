

export class CreateStatusDto {
    readonly date: Date;
    readonly previous_state: Date;
    readonly actual_state: Date;
    readonly id_participant: number;
    readonly id_task: number;
  }
  