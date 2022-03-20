import React from "react";
export function onRenderBody({ setHeadComponents }) {
    setHeadComponents([
        <script
            key="plausible"
            defer
            data-domain="seeking-maintainers.net"
            src="https://analytics.slashdev.space/js/plausible.js"
        ></script>,
        <title key="title">Seeking Maintainers</title>,
        <meta
            name="description"
            content="A list of open source projects looking for new maintainers"
            key="description"
        />,
    ]);
}
