import { test } from "./test.css";

export const Test: React.FC<{ children?: React.ReactNode }> = (props) => (
    <p {...props} className={test} />
);
