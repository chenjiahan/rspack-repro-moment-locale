import React from 'react';
import ReactDOM from 'react-dom';

console.log(React, ReactDOM);

import('./render').then(exports => {
    exports.render()
})
