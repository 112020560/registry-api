import { Injectable } from "@nestjs/common";
import { Services } from "./entities/service.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MemberServices {
    constructor(@InjectModel(Services.name) private MemberModel: Model<Services>){}

    saveService = async () => {
            
    }
}