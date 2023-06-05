import { style } from "@vanilla-extract/css";
import { framework } from "../layers.css";

export const test = style({
    "@layer": {
        [framework]: {
            color: "blue",
        },
    },
});
