import React from 'react';

const QrCode = ({data}) => {

    return (
        <div>
            <img src={data} width="100" height="100"/>
        </div>
    );
};

export default QrCode;
