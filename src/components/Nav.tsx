import * as React from "react";

interface NavProps {
    currentTab: string;
}

const Nav = (props: NavProps) => {
    return (
        <header>
            <a id="top"></a>
            <nav>
                <a
                    href="/"
                    className={props.currentTab === "home" ? "current" : ""}
                >
                    Home
                </a>
                <a
                    href="/faq"
                    className={props.currentTab === "faq" ? "current" : ""}
                >
                    FAQ
                </a>
                <a href="https://github.com/garritfra/seeking-maintainers">
                    GitHub
                </a>
            </nav>
            <h1>Seeking Maintainers</h1>
        </header>
    );
};

export default Nav;
