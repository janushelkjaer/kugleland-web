// footer

import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 bg-gray-50/75 text-gray-500 mt-auto border-t border-gray-100 relative z-10">
            <ul className="list-none flex items-center justify-center gap-2">
                <li className="text-xs text-gray-500">© kugleland 2025</li>
                <li className="text-gray-100"> | </li>
                <li className="text-xs text-gray-500">CVR: DK 36373040</li>
            </ul>
        </footer>
    );
};

export default Footer;