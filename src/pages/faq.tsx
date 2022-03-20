import * as React from "react";
import { graphql } from "gatsby";
import "../styles/index.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const FAQPage = () => {
    return (
        <>
            <Nav currentTab="faq" />

            <main>
                <h1>Frequently Asked Questions</h1>
                <p>
                    This page is intended to answer any questions you may have
                    about joining or maintaining this project. If you still have
                    unanswered questions after reading this page, please{" "}
                    <a href="https://github.com/garritfra/seeking-maintainers/issues">
                        submit an issue on GitHub
                    </a>{" "}
                    and we will endeavour to answer your question.
                </p>
                <h2>How do I submit my project?</h2>
                <p>
                    If you're interested in getting your site added to the{" "}
                    <b>Seeking Maintainers</b> index, all you need to do is to{" "}
                    <a href="https://github.com/garritfra/seeking-maintainers/issues">
                        file an issue
                    </a>{" "}
                    in our GitHub repository using the "Add a new project"
                    template and follow the instructions.
                </p>

                <p>
                    Please bear with us while a moderator reviews your
                    submission. This is done to mitigate spam. After the
                    submission is approved, the "seeking-maintainer" label is
                    assigned to your issue, which causes the project to show up
                    on the website.
                </p>
            </main>

            <Footer />
        </>
    );
};

export default FAQPage;
