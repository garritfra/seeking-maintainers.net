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
                <details id="submission">
                    <summary>How do I submit my project?</summary>
                    <p>
                        If you're interested in getting your site added to the{" "}
                        <b>Seeking Maintainers</b> index, all you need to do is
                        to{" "}
                        <a href="https://github.com/garritfra/seeking-maintainers/issues">
                            file an issue
                        </a>{" "}
                        in our GitHub repository using the "Add a new project"
                        template and follow the instructions.
                    </p>
                    <p>
                        Please bear with us while a moderator reviews your
                        submission. After your submission is approved, the
                        "seeking-maintainer" label is assigned to the issue,
                        which causes the project to show on the index.
                    </p>
                </details>
                <details id="eligibility">
                    <summary>
                        Is my project eligable to be added to the list?
                    </summary>
                    <p>
                        Please understand that the goal of this list is to find{" "}
                        <b className="underlined">maintainers</b> for a project,
                        not to spread the word and find some first contributers
                        for your newly created side project. If you're feeling
                        stressed out and need someone who helps out keeping the
                        project healthy, you're welcome to submit it. If there's
                        no proof that some people are dependent on your project,
                        it probably shouldn't be on this list.
                    </p>
                    <p>
                        Of course there's no definitive way for the moderators
                        to tell if your project is being used by other people.
                        Some indicators for this are the amount of stars, and
                        the frequency of issues and pull requests.
                    </p>
                </details>
                <details id="why">
                    <summary>Why does this list exist?</summary>
                    <p>
                        The idea for this list came from{" "}
                        <a href="https://fosstodon.org/@kev/107936886442867053">
                            this
                        </a>{" "}
                        thread. <a href="https://kevq.uk/">Kev</a> was feeling
                        burned out about his project and was looking for someone
                        to help him review submissions for the{" "}
                        <a href="https://512kb.club">512kb.club</a>.
                    </p>
                    <p>
                        And it's not just Kev. There are many projects out there
                        struggling to stay alive. The goal of this list is to
                        help these projects find people willing to do the "dirty
                        work", so that the maintainers can finally get some
                        rest.
                    </p>
                </details>
            </main>

            <Footer />
        </>
    );
};

export default FAQPage;
