import React from "react"
import { useSelector } from "react-redux";
import { css } from "@emotion/react";
import ReactLoading from "react-loading";
import "../css/loader.css";

const override = css`
  display: block;
`;
const Loader = () => {
    const isLoading = useSelector((state) => state.system.loading);
    return isLoading ? (
        <div id={`loading`}>
            <div className="wave">
                <ReactLoading
                    type={"bubbles"}
                    css={override}
                    color={"#fce0dc"}
                />
            </div>
        </div>
    ) : (
        ""
    );
}

export default Loader;
