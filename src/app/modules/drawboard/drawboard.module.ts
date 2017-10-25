import { Module } from '@nestjs/common';
import { DrawboardGateway } from './gateways/drawboard/drawboard.gateway';

@Module({
    components: [
        DrawboardGateway
    ]
})
export class DrawboardModule { }
