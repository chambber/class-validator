import {IsContain, IsInt, IsLength, IsEmail, IsFQDN, IsDate} from "../../src/decorators";

export class Tag {

    @IsLength(10, 20, {
        message: "Tag is too short or long"
    })
    name: string;

}