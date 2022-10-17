import express from 'express';

import { register as register_test_service } from './test-service/index.js';
import { appendroutes as appendroutes_test_api } from './test-api/index.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

register_test_service();
appendroutes_test_api(app);


app.listen(3001, () => {
    console.log('Server is running on port 3001');
})