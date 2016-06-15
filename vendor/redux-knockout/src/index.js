import * as fromConnect from './connect';

const dummyObject = {};


//Ensure these two functions share the same this object 
//as connectComponent uses it to get a reference to the store.
export const connectStore = fromConnect.connectStore.bind(dummyObject);
export const connectComponent = fromConnect.connect.bind(dummyObject);