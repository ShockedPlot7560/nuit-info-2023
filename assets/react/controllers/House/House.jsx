import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

const navigationButtonStyle = `bg-white opacity-50 hover:opacity-80 transition-opacity duration-500`
const navigation = [null, 'outdoor', 'kitchen', null]
const roomName = 'garage'

export default function (props) {
    return (
        <div className={`
            h-screen grid grid-cols-3
            ${roomName === 'garage' ? 'bg-garage' : ''}
        `}>
            <div className={'flex flex-col justify-center items-start'}>
                <PrimeReactProvider>
                    { navigation[3] !== null &&
                        <Button
                            icon="pi pi-chevron-left"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} ml-5`}
                        />
                    }
                </PrimeReactProvider>
            </div>
            <div className={'flex flex-col justify-between items-center'}>
                <PrimeReactProvider>
                    { navigation[0] !== null &&
                        <Button
                            icon="pi pi-chevron-up"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} mt-5`}
                        />
                    }
                    { navigation[2] !== null &&
                        <Button
                            icon="pi pi-chevron-down"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} mb-5`}
                        />
                    }
                </PrimeReactProvider>
            </div>
            <div className={'flex flex-col justify-center items-end'}>
                <PrimeReactProvider>
                    { navigation[1] !== null &&
                        <Button
                            icon="pi pi-chevron-right"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} mr-5`}
                        />
                    }
                </PrimeReactProvider>
            </div>
        </div>
    )
}
