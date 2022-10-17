import {
    services,
    servicenames,
    uuidv4
} from '../deps.js';

export const addtest = async (req, res) => {

    try {
        const testservice = services.get(servicenames.testservice);

        if(req.body && req.body.message && req.body.author) {

            if(Object.keys(req.body).length !== 2) {
                res.status(400).json({message: "Cannot send more than two fields"});
            } else {
                
                const test = {
                    id: uuidv4(),
                    ...req.body
                }

                await testservice.setTest(test, (response) => {
                    res.status(200).json(response);
                });
            }

        } else {
            res.status(400).json({message: "Message & Author fields required"});
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Bad Request"});
    }
    
}