import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { List } from "antd";
import { QualificationsCard } from "../Cards/QualificationsCard";
// import { ProjectCard } from "./../Cards/ProjectCard";
import { Heading } from "./../CategoryHeading/Heading";
import styles from "./Experiences.module.css";

const data = [
    {
        logo: "/Images/callhubLogo.png",
        title: "Gaglers software private Ltd.",
        organization: "Software Engineer",
        duration: "September 2021 - April 2023",
        navigate_to: "callhub.io/",
        button_name: "Website"
    },
];

export const Experiences = () => {
    return (
        <div className={styles.cards_container}>
            <Heading title="Experience" />
            <List
                style={{ marginTop: "2%", gap: "20%" }}
                // grid={{
                //     gutter: 16,
                //     xs: 1,
                //     sm: 2,
                //     md: 3,
                //     lg: 3,
                //     xl: 3,
                //     xxl: 3,
                // }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <QualificationsCard item={item}>
                            Card content
                        </QualificationsCard>
                    </List.Item>
                )}
            />
        </div>
    );
};
