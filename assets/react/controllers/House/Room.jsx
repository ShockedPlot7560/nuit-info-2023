import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

const navigationButtonStyle = `bg-white opacity-50 hover:opacity-80 transition-opacity duration-500`

export default function (props) {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    return (
        <div className={`
            h-screen w-screen grid grid-cols-3
        `}>
            <div className={'flex flex-col justify-center items-start'}>
                <PrimeReactProvider>
                    { props.navigation[3] !== null &&
                        <Button
                            icon="pi pi-chevron-left"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} ml-5`}
                            onClick={() => props.navigateTo(props.navigation[3])}
                        />
                    }
                </PrimeReactProvider>
            </div>
            <div className={'flex flex-col justify-between items-center'}>
                <PrimeReactProvider>
                    { props.navigation[0] !== null ?
                        <Button
                            icon="pi pi-chevron-up"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} mt-5`}
                            onClick={() => props.navigateTo(props.navigation[0])}
                        />
                    :
                        <div></div>
                    }
                    { props.navigation[2] !== null ?
                        <Button
                            icon="pi pi-chevron-down"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} mb-5`}
                            onClick={() => props.navigateTo(props.navigation[2])}
                        />
                    :
                        <div></div>
                    }
                </PrimeReactProvider>
            </div>
            <div className={'flex flex-col justify-center items-end'}>
                <PrimeReactProvider>
                    { props.navigation[1] !== null &&
                        <Button
                            icon="pi pi-chevron-right"
                            rounded text raised
                            aria-label="Filter"
                            className={`${navigationButtonStyle} mr-5`}
                            onClick={() => props.navigateTo(props.navigation[1])}
                        />
                    }
                </PrimeReactProvider>
            </div>

            {/* Objects */}
            <div className={'absolute'}>
                { props.objectList.map((object, index) => {
                    return (
                        <div
                            key={index}
                            className={'absolute w-5 h-5 bg-white cursor-pointer z-0'}
                            style={{
                                top: `${object.positionY}px`,
                                left: `${object.positionX}px`,
                            }}
                            onClick={() => setModalIsOpen(true)}
                        >

                        </div>
                    )
                })}
            </div>

            {/* Modal - 1. Add a black layer ; 2. Add the modal div */}
            { modalIsOpen === true &&
                <>
                    <div className={'absolute h-screen w-screen flex justify-center items-center bg-black opacity-50'}/>
                    <div className={'absolute h-screen w-screen flex justify-center items-center'}>
                        <div className={'h-2/3 w-1/2 bg-white shadow-xl rounded-xl flex justify-center items-end'}>
                            <PrimeReactProvider>
                                <Button
                                    className={'mb-5'}
                                    label="Je comprends"
                                    onClick={() => setModalIsOpen(false)}
                                />
                            </PrimeReactProvider>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
