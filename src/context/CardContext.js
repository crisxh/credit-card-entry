import {createContext} from 'react';

const CardContext = createContext({
    firstName:null,
    number:null,
    expiration: null,
    ccv:null,
})

export default CardContext;