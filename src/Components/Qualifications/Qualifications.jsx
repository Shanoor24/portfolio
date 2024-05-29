import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { List } from "antd";
import { QualificationsCard } from "../Cards/QualificationsCard";
// import { ProjectCard } from "./../Cards/ProjectCard";
import { Heading } from "./../CategoryHeading/Heading";
import styles from "./Qualifications.module.css";

const data = [
    {
        logo: "/Images/mern4.png",
        title: "Full-Stack Web Developer",
        organization: "Masai School",
        duration: "January 2021 - August 2021 | Remote",
        // navigate_to: "github.com/SumanChakraborty1998",
    },
    {
        logo: "/Images/rcu.png",
        title: "Bachelor of commerce",
        organization: "Rani Channamma University, Belagavi, Karnataka. 591156.",
        duration: "June 2015 - September 2018 | Belgaum, Karnataka",
        // navigate_to:
        //     "drive.google.com/drive/folders/1UMMC91ssrU46gTE6-sBCpWGkDxob0tDU?usp=sharing",
    },
    {
        logo: "/Images/puc.png",
        title: "Higher Secondary Examination",
        organization: "Karnataka P.U Board",
        duration: "June 2013 - May - 2015 | Karnataka",
        // navigate_to:
        //     "drive.google.com/file/d/1z2ko3Do7TA2i35gK-C9S1seaQpEBeABk/view?usp=sharing",
    },
];

export const Qualifications = () => {
    return (
        <div className={styles.cards_container}>
            <Heading title="Qualifications" />
            <List
                style={{ marginTop: "2%", gap: "20%" }}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
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
