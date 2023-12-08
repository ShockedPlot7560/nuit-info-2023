import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

const navigationButtonStyle = `bg-black opacity-50 hover:opacity-80 transition-opacity duration-500 z-10`

export default function (props) {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalText, setModalText] = React.useState('');
    const abort = () => {
        setModalText('Ici aurait dû se trouver une description d\'un objet de la pièce')
        setModalIsOpen(true);
    }

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
                            className={`${navigationButtonStyle} mt-20`}
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

            {/* Modal - 1. Add a black layer ; 2. Add the modal div */}
            { modalIsOpen === true &&
                <>
                    <div className={'absolute h-screen w-screen flex justify-center items-center bg-black opacity-50 z-20'}/>
                    <div className={'absolute h-screen w-screen flex justify-center items-center z-30'}>
                        <div className={'h-2/3 w-1/2 bg-white shadow-xl rounded-xl flex flex-col justify-center  items-center'}>
                           <p>{modalText}</p>
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

            <div className={'absolute h-screen w-screen flex justify-center items-center'}>
                <div className={'flex h-full w-full flex-row justify-evenly items-end pb-20'}>
                   <div className={'bg-white p-5 rounded-xl shadow-lg flex flex-col items-center cursor-pointer'} onClick={() => abort()}>
                       <img src={'/img/avatars/1.svg'} className={'w-20 h-20'} alt={'1'}/>
                        <p>Item</p>
                   </div>
                    <div className={'bg-white p-5 rounded-xl shadow-lg flex flex-col items-center cursor-pointer'} onClick={() => abort()}>
                        <img src={'/img/avatars/2.svg'} className={'w-20 h-20'} alt={'2'}/>
                        <p>Item</p>
                    </div>
                    <div className={'bg-white p-5 rounded-xl shadow-lg flex flex-col items-center cursor-pointer'} onClick={() => abort()}>
                        <img src={'/img/avatars/3.svg'} className={'w-20 h-20'} alt={'3'}/>
                        <p>Item</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
