import { extname } from "path";


export const editFileName = (req: any, file: { originalname: string; }, callback: (arg0: null, arg1: string) => void) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    console.log(file)
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
}