import * as React from "react";
import { graphql } from "gatsby";
import "../styles/index.css";

export const query = graphql`
    {
        githubData {
            id
            data {
                repository {
                    issues {
                        edges {
                            node {
                                body
                                id
                                title
                            }
                        }
                    }
                }
            }
        }
    }
`;

interface Posting {
    id: string;
    title: string;
    body: string;
}

const IndexPage = ({ data }) => {
    const postings = data.githubData.data.repository.issues.edges.map(
        ({ node }) => node as Posting
    );

    const renderPosting = (posting: Posting) => {
        return <li>{posting.title}</li>;
    };

    const renderPostingList = (postings: Posting[]) => {
        return <ul>{postings.map(renderPosting)}</ul>;
    };
    return (
        <body>
            <a name="top"></a>

            <header>
                <nav>
                    <a href="/" className="current">
                        Home
                    </a>
                </nav>
                <h1>Seeking Maintainers</h1>
            </header>

            <main>{renderPostingList(postings)}</main>

            <footer>
                <p>
                    Seeking Maintainers was created by{" "}
                    <a href="https://garrit.xyz">Garrit Franke</a> and was
                    inspired by{" "}
                    <a href="https://up-for-grabs.net/">up-for-grabs.net</a>.
                </p>

                <p>
                    Maintained with &hearts; by Garrit Franke for a thriving
                    open source ecosystem.
                </p>

                <a href="#top">^ TOP ^</a>
            </footer>
        </body>
    );
};

export default IndexPage;
