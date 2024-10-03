import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class TrainModelResponse {
    @IsString()
    status: string;

    @Expose({ name: 'namespace_id' })
    @IsString()
    namespaceId: string;
}
