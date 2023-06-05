import { globalStyle } from "@vanilla-extract/css";
import { reset } from "./layers.css";

globalStyle("*, ::before, ::after", {
    "@layer": {
        [reset]: { boxSizing: "border-box", color: "red" },
    },
});
