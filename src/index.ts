import { config } from 'dotenv';
import { createApp } from "./utils/createApp";
import './database';
config();

const port = process.env.PORT || 3000;

async function main() {
    try {
        const app = createApp();
        app.listen(port, () => console.log(`Running on port: ${port}`));
    } catch (err) {
        console.log(err);
    }
}

main();