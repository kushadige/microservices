import {
    services,
    servicenames
} from '../deps.js';

export const testlist = async (req, res) => {
    
    try {
        const testservice = services.get(servicenames.testservice);
        const tests = JSON.parse(await testservice.getTests());
    
        res.status(200).json(tests);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Bad Request"});
    }

}