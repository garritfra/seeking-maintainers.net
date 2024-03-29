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
                    about joining or maintaining this list. If you still have
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
                        burnt out about his project and was looking for someone
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
                <details id="removing">
                    <summary>
                        I found a new maintainer. How should I proceed?
                    </summary>
                    <p>
                        Awesome! We just made the open source ecosystem a bit
                        better! 🎉🎊
                    </p>
                    <p>
                        To remove the listing on this page, simply{" "}
                        <a href="https://github.com/garritfra/seeking-maintainers.net/issues">
                            close your issue
                        </a>{" "}
                        in our GitHub repository. Our robot will then take care
                        of cleaning up the confetti (I promise, he's getting
                        paid well!).
                    </p>
                </details>
                <details id="tracking">
                    <summary>Does this site track me?</summary>
                    <p>
                        We use a self-hosted instance of{" "}
                        <a href="https://plausible.io/">Plausible</a> to track
                        basic metrics for this site. Plausible is free and open
                        source software, and all data lives on our own servers.
                    </p>
                    <p>
                        If you're interested, you can also take a look at our{" "}
                        <a href="https://analytics.slashdev.space/seeking-maintainers.net">
                            public dashboard
                        </a>
                        !
                    </p>
                </details>
                <details id="issues">
                    <summary>I see a problem. How do I get in touch?</summary>
                    <p>
                        If you see a problem with this site that we should
                        address, we encourage you to{" "}
                        <a href="https://github.com/garritfra/seeking-maintainers/issues">
                            open an issue on GitHub
                        </a>
                        . If you prefer to talk in private or want to leave some
                        feedback, I'm happy to hear from you via{" "}
                        <a href="mailto:garrit@slashdev.space?subject=Seeking Maintainers">
                            e-mail
                        </a>
                        .
                    </p>
                </details>
            </main>

            <Footer />
        </>
    );
};

export default FAQPage;
