import React from 'react';
import { Image } from 'antd';

import dog1 from '../../assets/imgs/sad-dog-1.png';

const Error = () => (
    <div className="request-page-error">
        <Image width={'50vh'} src={dog1} />
        <span>Ops!!! Temos um problema, tente novamente mais tarde.</span>
    </div>
)

export default Error;