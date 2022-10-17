import { servicenames, services } from './deps.js';

import {
    setTest,
    getTests
} from './src/test-service.js';

export const register = () => {
    services.set(servicenames.testservice, {
        setTest,
        getTests
    });
}