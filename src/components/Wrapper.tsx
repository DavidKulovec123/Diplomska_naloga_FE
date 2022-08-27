import React from "react";
import Header from "./Header";


type Props = {
    children: JSX.Element,
};
const Wrapper = ({ children }: Props) => {
    return (
        <>

            <main>
                {children}
            </main>

        </>
    )
}

export default Wrapper;