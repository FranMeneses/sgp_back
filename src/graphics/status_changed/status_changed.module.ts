import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusChangedService } from "./status_changed.service";
import { StatusChanged } from "./status_changed.entity";
import { StatusChangedResolver } from "./status_changed.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([StatusChanged])],
  providers: [StatusChangedService, StatusChangedResolver],
})
export class StatusChangedModule {}