import React, {useEffect, useState} from "react";
import FlagIcon from "./FlagIcon";
import i18n from "../../utils/i18n";
import Cookies from 'js-cookie';

const languages = i18n.languages;
const LANGUAGE_SELECTOR_ID = "language-selector";

export default function ChooseLang() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLanguageChange = async (language) => {
        await i18n.changeLanguage(language.key);
        Cookies.set('lang', language.key);
        setIsOpen(false);
        document.location.reload();
    };
    const languages = {
        fr: {
            key: "fr",
            icon: "fr"
        },
        en: {
            key: "en",
            icon: "gb"
        },
        it: {
            key: "it",
            icon: "it"
        },
        sr: {
            key: "sr",
            icon: "rs"
        },
        es: {
            key: "es",
            icon: "es"
        }
    };
    const selectedLanguage = languages[i18n.language];

    useEffect(() => {
        const handleWindowClick = (event) => {
            const target = event.target.closest('button');
            if (target && target.id === LANGUAGE_SELECTOR_ID) {
                return;
            }
            setIsOpen(false);
        }
        window.addEventListener('click', handleWindowClick)
        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, []);

    return (
        <div style={{zIndex: 110, position: "absolute", top: 0, left: 0, margin: "1rem"}}>

            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=""
                id={LANGUAGE_SELECTOR_ID}
                aria-expanded={isOpen}
            >
                <FlagIcon countryCode={selectedLanguage.icon}/>
            </button>

            {isOpen && <div
                className="origin-top-left absolute left-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby={LANGUAGE_SELECTOR_ID}
            >
                <div className="py-1 grid grid-cols-1 gap-2" role="none">
                    {Object.values(languages).map((language, index) => {
                        i18n.changeLanguage(language.key);
                        return (
                            <button
                                key={language.key}
                                onClick={() => handleLanguageChange(language)}
                                className={`${
                                    selectedLanguage.key === language.key
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                } block px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                                role="menuitem"
                            >
                                <FlagIcon countryCode={language.icon}/>
                                <span className={"mx-2"}>{i18n.t("name")}</span>
                            </button>
                        );
                    })}
                </div>
            </div>}
        </div>
    )
}