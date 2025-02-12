import { diskStorage } from "multer";
import { editFileName } from "./Imagerelates";
import { ImagefileFilter } from "./imagefilter.utils";
import { put } from '@vercel/blob';


export const Storage = ({
    storage:diskStorage({
        destination:'./uploads',
        filename:editFileName
    }),
    fileFilter:ImagefileFilter
})