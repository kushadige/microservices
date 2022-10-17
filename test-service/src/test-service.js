import {
    fs
} from '../deps.js';

const filename = "tests.json";
const path = process.cwd() + '/test-data/' + filename;

export const setTest = async (test, cb) => {
    try {
        const tests = JSON.parse(await getTests());
    
        tests.push(test);
    
        fs.writeFile(path, JSON.stringify(tests), { encoding: 'utf8' }, (err) => {
            if(err) {
                console.log(err);
            } else {
                cb({
                    status: 201,
                    message: "Test successfully added"
                });
            }
        });
    }
    catch (err) {
        console.log(err);

        return null;
    }
}

export const getTests = async () => {
    try {
        const data = fs.readFileSync(path, { encoding: 'utf8' });
    
        return data;
    }
    catch (err) {
        console.log(err);

        return null;
    }
}