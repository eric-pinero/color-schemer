import React from 'react';

const Footer = () =>{

    return(
        <footer className="bg-red padding-20 flex default-margin bold justify-center shadow">
            <nav className="w-80percent flex space-around white">
                <a href="https://www.thearmypainter.com/" className="f-20">The Army Painter</a>
                <a href="https://github.com/eric-pinero" className=" f-20">Github</a>
                <a href="https://www.ericpcodes.com/" className="f-20 margin-l-7percent">Portfolio</a>
            </nav>
        </footer>
    )
};

export default Footer;