import React from 'react';

const ColorContext = React.createContext({
    // a bunch of key:value pairs based on [name]:entered color value
    one: '',
    two: '',
    three: '',
    four: '',
}); 

export default ColorContext;