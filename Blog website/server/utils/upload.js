import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://<username>:<password>@ac-2wflqvp-shard-00-00.vmvvvs1.mongodb.net:27017,ac-2wflqvp-shard-00-01.vmvvvs1.mongodb.net:27017,ac-2wflqvp-shard-00-02.vmvvvs1.mongodb.net:27017/?ssl=true&replicaSet=atlas-xts6lc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "fs",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 