import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusDto } from './create-status.dto';

export class UpdateStatusDto extends PartialType(CreateStatusDto) {
    readonly date?: Date;
    readonly previous_state?: Date;
    readonly actual_state?: Date;
    readonly id_participant?: number;
    readonly id_task?: number;
}
