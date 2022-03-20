import React from "react";
export function onRenderBody({ setHeadComponents }) {
    setHeadComponents([
        <script
            key="plausible"
            defer
            data-domain="seeking-maintainers.net"
            src="https://analytics.slashdev.space/js/plausible.js"
        ></script>,
    ]);
}
