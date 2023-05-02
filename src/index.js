// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";
// import ButtonOpenModal from "./button/ButtonOpenModal";
import ModalMessage from "./lib/modal";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <ModalMessage />
    </React.Fragment>
);
