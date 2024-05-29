import React from "react";
import { projectLinks } from "./../../portfolio";
import { ProjectCard } from "./../Cards/ProjectCard";
import styles from "./Projects.module.css";
import { darkTheme } from "./../../theme";
import { Heading } from "./../CategoryHeading/Heading";

export const Projects = () => {
    const theme = darkTheme;
    return (
        <div className={styles.projects_div_main} style={{ color: theme.text }}>
            <Heading title="Projects" />
            <div className={styles.projects_div}>
                {projectLinks.map((item) => (
                    <ProjectCard item={item} />
                ))}
            </div>
            <div className={styles.github_div}>
                <div className={styles.hideme}>
                    <img
                        align="center"
                        src="https://github-readme-stats.vercel.app/api?username=Shanoor24&show_icons=true&locale=en"
                        alt="Shanoor24"
                    />
                </div>

                {/* <div>
                    <img
                        align="center"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shanoor24&layout=compact&langs_count=8&hide_border=true&title_color=000000&icon_color=000000&text_color=000000&bg_color=ffffff"
                        alt="Shanoor24"
                    />
                </div> */}
            </div>
            <br />
        </div>
    );
};
