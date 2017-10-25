import { Module } from '@nestjs/common';
import { DrawboardModule } from './modules/drawboard/drawboard.module';

@Module({
    modules: [
        DrawboardModule
    ]
})
export class ApplicationModule { }
