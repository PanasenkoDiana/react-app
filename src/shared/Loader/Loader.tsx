import React from 'react';
import { Oval } from 'react-loader-spinner';

export function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
}
