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

interface Issue {
    id: string;
    title: string;
    body: string;
}

interface Posting {
    id: string;
    title: string;
    externalIssueUrl: string;
    shortDesciption: string;
}

const getValueForKey = (codeBlock: string, key: string): string | undefined =>
    codeBlock
        ?.split("\n")
        .find((line) => line.startsWith(`${key}:`))
        ?.replace(`${key}:`, "")
        .trim();

const parsePosting = (issue: Issue): Posting => {
    const codeBlock =
        /(\`{3}[\w|\W]+?\`{3})/.exec(issue.body)?.find(() => true) || "";

    const externalIssueUrl =
        getValueForKey(codeBlock, "externalIssueUrl") || "";
    const shortDesciption =
        getValueForKey(codeBlock, "shortDescription")?.replaceAll('"', "") ||
        "";

    return {
        id: issue.id,
        title: issue.title,
        externalIssueUrl,
        shortDesciption,
    };
};

const IndexPage = ({ data }) => {
    const postings = data.githubData.data.repository.issues.edges.map(
        ({ node }) => parsePosting(node)
    );

    const renderPosting = (posting: Posting) => {
        return (
            <li key={posting.id}>
                <a target="_blank" href={posting.externalIssueUrl}>
                    {posting.title}
                </a>
                <p>{posting.shortDesciption}</p>
            </li>
        );
    };

    const renderPostingList = (postings: Posting[]) => {
        return <ul>{postings.map(renderPosting)}</ul>;
    };
    return (
        <>
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
        </>
    );
};

export default IndexPage;
