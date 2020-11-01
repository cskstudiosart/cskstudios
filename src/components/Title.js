import React from 'react';

function Title(title) {
    var siteName = ' - Cs.K. Studios';
    return (
        document.title = title + siteName
    );
};

export default Title;