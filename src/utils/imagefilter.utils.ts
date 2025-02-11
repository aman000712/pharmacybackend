import { BadRequestException } from "@nestjs/common";


export const ImagefileFilter = (req: any, file: { originalname: string }, callback: (arg0: Error | null, arg1: boolean) => void) => {

    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4|mov)$/)) {
        return callback(new BadRequestException('Only image files are allowed!'), false);
    }
    callback(null, true);

};