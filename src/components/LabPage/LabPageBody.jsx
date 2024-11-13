import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './HomePage.css'; // Ensure this is imported
import mongodbLogo from '../../assets/dbms.jpg'

function HomePage() {
  const navigate = useNavigate();
  const mysqlLogo = "https://media.licdn.com/dms/image/v2/C4E0DAQG7Nji17wbDUw/learning-public-crop_288_512/learning-public-crop_288_512/0/1654285678578?e=2147483647&v=beta&t=9xwUMMBxVG3rKdt8uGOD5osUvTO_OyRf0oOKbsLbScg";
  // const mongodbLogo = "../../assets/dbms.jpg";

  return (
    <div className="home-container px-5 py-5">
      <h1 className="title text-center">Welcome to the DBMS Virtual Lab</h1>
      <p className="intro-text text-center">Select an exercise to begin:</p>
      <div className="card-container row "> {/* Use card-container for layout */}
        <Col md={4}>
          <Card className="mb-4 shadow card-hover">
            <Card.Img variant="top" src={mysqlLogo} alt="MySQL Logo" className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Database Exercise</Card.Title>
              <Card.Text className="card-text">Test your knowledge on database.</Card.Text>
              <Button className="start-button" onClick={() => navigate('/dbms')}>Start Database Exercise</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow card-hover">
            <Card.Img variant="top" src={mongodbLogo} alt="MongoDB Logo" className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">Digital fundementals Exercise</Card.Title>
              <Card.Text className="card-text">Challenge yourself with digital fundementals concepts.</Card.Text>
              <Button className="start-button" onClick={() => navigate('/dfca')}>Start Digital Fundamentals Exercise</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default HomePage;
