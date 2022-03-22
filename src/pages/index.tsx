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
                                url
                            }
                        }
                    }
                }
                topic {
                    repositories {
                        edges {
                            node {
                                id
                                url
                                name
                                description
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
    url: string;
}

interface Posting {
    id: string;
    title: string;
    url: string;
    description: string;
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

    const description =
        getValueForKey(codeBlock, "description")?.replaceAll('"', "") || "";

    return {
        id: issue.id,
        title: issue.title,
        url: issue.url,
        description,
    };
};

const IndexPage = ({ data }: any) => {
    const postings = data.githubData.data.repository.issues.edges
        .map(({ node }: any) => parsePosting(node))
        .sort((i1: Posting, i2: Posting) => (i1.title < i2.title ? 1 : -1));

    const githubTopicPostings = data.githubData.data.topic.repositories.edges
        .map(({ node }: any) => node)
        .map(
            ({ id, url, name, description }: any): Posting => ({
                id,
                url,
                title: name,
                description,
            })
        );

    const renderPosting = (posting: Posting) => {
        return (
            <li key={posting.id} className="posting">
                <a className="posting__link" target="_blank" href={posting.url}>
                    {posting.title}
                </a>
                <p>{posting.description}</p>
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
                <p>
                    <br />
                </p>
                <h1>Other projects seeking maintainers</h1>
                <p>
                    This list shows even more projects looking for maintainers.
                    It is generated from projects in the{" "}
                    <a href="https://github.com/topics/maintainer-wanted">
                        maintainer-wanted
                    </a>{" "}
                    topic on GitHub. Unlike the projects above, we cannot verify
                    if these projects are still actively looking for new
                    maintainers.
                </p>
                {renderPostingList(githubTopicPostings)}
            </main>

            <Footer />
        </>
    );
};

export default IndexPage;
