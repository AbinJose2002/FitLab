import "./About.css";
import img1 from "../../assets/pexels-anastasiya-gepp-654466-1462630.jpg";

const About = () => {
    return (
        <div className="about-sec row">
            <div className="about-gallery col-sm-12 col-lg-6 order-sm-2 order-lg-1">
                <img src={img1} alt="Image 1" />
            </div>
            <div className="about-para col-sm-12 col-lg-6 order-sm-1 order-lg-2">
                <h1 className="about-head">FIT-Lab: A Virtual Learning Environment</h1>
                <p className="about-para">
                    By providing a simulated environment, students can experiment with
                    various software, databases, and network configurations without
                    affecting the physical lab. Key components include virtual machines,
                    DBMS, programming tools, network simulation, and collaboration tools.
                    Factors to consider when creating the lab include target audience,
                    curriculum alignment, learning objectives, and platform choice. By
                    carefully planning and implementing the lab, FISAT can enhance student
                    learning and practical experience.
                </p>
            </div>
        </div>
    );
};

export default About;
