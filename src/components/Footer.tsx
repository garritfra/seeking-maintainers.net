import * as React from "react";

interface FooterProps {}

const Footer = (props: FooterProps) => {
    return (
        <footer>
            <p>
                Seeking Maintainers was created by{" "}
                <a href="https://garrit.xyz">Garrit Franke</a> and was inspired
                by <a href="https://up-for-grabs.net/">up-for-grabs.net</a> and{" "}
                <a href="https://512kb.club/">512kb.club</a>.
            </p>

            <p>
                Maintained with &hearts; by Garrit Franke for a thriving open
                source ecosystem.
            </p>

            <a href="#top">^ TOP ^</a>
        </footer>
    );
};

export default Footer;
