import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Greeting } from "../Components/Greeting/Greeting";
import { Qualifications } from "../Components/Qualifications/Qualifications";
import { Experiences } from "../Components/Experiences/Experiences"
import { Skills } from "./../Components/Skills/Skills";
import { Projects } from "./../Components/Projects/Projects";
import { Blogs } from "./../Components/Blogs/Blogs";
import ContactMe from "./../Components/Contact/ContactMe"

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Greeting />
                </Route>
                <Route path="/home">
                    <Greeting />
                </Route>

                <Route path="/experiences">
                    <Experiences />
                </Route>

                <Route path="/qualifications">
                    <Qualifications />
                </Route>

                <Route path="/skills">
                    <Skills />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/contact">
                    <ContactMe />
                </Route>
            </Switch>
        </div>
    );
};
