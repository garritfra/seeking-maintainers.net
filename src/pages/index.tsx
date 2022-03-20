import * as React from "react";
import { graphql } from "gatsby";
import "../styles/index.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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

const IndexPage = ({ data }: any) => {
    const postings = data.githubData.data.repository.issues.edges.map(
        ({ node }: any) => parsePosting(node)
    );

    const renderPosting = (posting: Posting) => {
        return (
            <li key={posting.id} className="posting">
                <a
                    className="posting__link"
                    target="_blank"
                    href={posting.externalIssueUrl}
                >
                    {posting.title}
                </a>
                <p>{posting.shortDesciption}</p>
            </li>
        );
    };

    const renderPostingList = (postings: Posting[]) => {
        return <ul className="posting-list">{postings.map(renderPosting)}</ul>;
    };
    return (
        <>
            <Nav currentTab="home" />

            <main>
                <p>
                    Maintaining a project that is used by hundreds, thousands or
                    even millions of people can be stressful. Replying to
                    issues, merging pull requests and answering questions in
                    forums is a vital part of every open source project, but it
                    takes a lot of time and energy, especially if you also work
                    full-time in your day job.
                </p>
                <p>
                    This list is an index of open source projects seeking new
                    maintainers. If you find a project that sounds interesting
                    and you're looking for a way to help out, feel free to take
                    a look at their posting and apply as a maintainer. If you
                    maintain a project yourself and feel stressed out, you're
                    more than welcome to add it to this list.
                </p>
                <p>
                    <br />
                </p>
                <p className="centre">
                    <a href="/faq" className="button">
                        Visit FAQ for more details
                    </a>
                </p>
                <p>
                    <br />
                </p>
                {renderPostingList(postings)}
            </main>

            <Footer />
        </>
    );
};

export default IndexPage;
