import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = process.env.PORT;
const DB = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(express.static('upload'))
app.use(fileUpload({}))
app.use('/api', router);

const startApp = async () => {
    try {
        await mongoose.connect(DB);

        app.listen(PORT, () => {
            console.log(`server has been started on ${PORT} port!`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp().catch(err => console.log(err));
