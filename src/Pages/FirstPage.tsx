import React from "react";
import Footer from "../components/Footer";


const FirstPage = () => {
    return (
        <>


            <body className="d-flex h-100 text-center text-white bg-dark" data-new-gr-c-s-check-loaded="14.1071.0"
                  data-gr-ext-installed="">

            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">Cover</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <a className="nav-link" aria-current="page" href="/Login">Login</a>
                            <a className="nav-link" href="/Register">Register</a>

                        </nav>
                    </div>
                </header>

                <main className="px-3">
                    <h1>Cover your page.</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-black">Learn more</a>
                    </p>
                </main>

               <Footer />
            </div>


            </body>


        </>
    );
}

export default FirstPage;