import { testlist } from './src/testlist.js';
import { addtest } from './src/addtest.js';

const prefix = "/api/test";

export const appendroutes = (router) => {
    router.post(`${prefix}`, addtest);
    router.get(`${prefix}s`, testlist);
}