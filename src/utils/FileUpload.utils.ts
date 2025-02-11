import { diskStorage } from "multer";
import { editFileName } from "./Imagerelates";
import { ImagefileFilter } from "./imagefilter.utils";


export const Storage = ({
    storage:diskStorage({
        destination:'./uploads',
        filename:editFileName
    }),
    fileFilter:ImagefileFilter
})