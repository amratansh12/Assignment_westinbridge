import { Card, Container } from "react-bootstrap";
import { Chrono } from "react-chrono";
import './Home.css'

const Home = () => {
    const items = [
        {title:'1' ,cardTitle: 'Signup for BLOC'}, 
        {title:'2' ,cardTitle: 'Recieve your login details'}, 
        {title:'3' ,cardTitle: 'Take the test online'}, 
        {title:'4' ,cardTitle: 'Schedule your individual sessions with your coach'}, 
        {title:'5' ,cardTitle: 'Set personal goals'}, 
        {title:'6' ,cardTitle: 'Schedule your next session'}, 
        {title:'7' ,cardTitle: 'Follow up on goals'}, 
        {title:'8' ,cardTitle: 'Get back to coach'}, 
        {title:'9' ,cardTitle: 'Stay the course-concourse program'}, 
        {title:'10' ,cardTitle: 'Continuous feedback and support from your coach till college'}
    ]

    return(
        <Container className="mt-3 p-3">
            <h5 className="About-title p-2 mb-3"><strong>About Us</strong></h5>

            <Card className="my-2 card-about-section">
                <Card.Header style={{backgroundColor: '#0096FF'}}>Transition phase</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Navigating the transition from middle school to secondary school and onward to college can be a daunting task. Faced with social pressures, the demands of extracurricular activities, academic challenges, evolving worldviews, and the intense competition, the journey can seem overwhelming. However, with the Mindmines BLOC Program, you're not alone on this path. We are here to support you every step of the way, providing guidance and resources to navigate the complexities of this transformative journey.{' '}
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="my-2 card-about-section">
                <Card.Header style={{backgroundColor: '#0096FF'}}>One-on-One Support</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        In the crucial transitional phases of middle and senior school, what students truly need is consistent one-on-one support throughout their academic journey, not just reactive interventions. Through our personalized one-on-one interactions and comprehensive scientific assessments, we gain insights into each student's unique needs. We then establish a robust emotional and academic support system that extends throughout the academic years, empowering students to reach their highest ambitions and aspirations. This bond endures even as the student transitions from school to college, ensuring sustained guidance and encouragement beyond the classroom.{' '}
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="my-2 card-about-section">
                <Card.Header style={{backgroundColor: '#0096FF'}}>BLOC Program</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Embark on a journey of self-discovery as we guide you in identifying and addressing your Behavioral, Learning, Organizational, and Career-related issues, commonly known as BLOCs. Leveraging globally recognized assessments, we unveil insights that empower you to construct a concrete plan tailored to navigate your school and college years seamlessly.
                        At the heart of our mission is the commitment to assist you in overcoming potential barriers to learning, communication, and self-development. We are dedicated to helping every student carve out a unique path that not only aligns with their goals but also resonates with their individuality. Join us on this transformative path to personalized success!{' '}
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>

            <Container className="d-flex justify-content-center mt-5" style={{gap: '15px'}}>
                <Card border="warning" style={{width: '18rem', borderWidth: '2px'}}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/social-change-abstract-concept-vector-illustration-human-relationships-social-justice-behavior-public-demonstration-collective-protest-shout-megaphone-change-innovation-abstract-metaphor_335657-1424.jpg" width={'auto'} height={'200px'}/>
                    <Card.Body>
                    <Card.Title>Behaviour</Card.Title>
                    </Card.Body>
                </Card>

                <Card border="warning" style={{width: '18rem', borderWidth: '2px'}}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699920000&semt=ais" width={'auto'} height={'200px'}/>
                    <Card.Body>
                    <Card.Title>Learning</Card.Title>
                    </Card.Body>
                </Card>

                <Card border="warning" style={{width: '18rem',borderWidth: '2px'}}>
                <Card.Img variant="top" src="https://img.freepik.com/premium-vector/team-business-persons-arranging-geometric-shapes-together-cartoon-people-solving-abstract-puzzle-chaos-flat-vector-illustration-collaboration-organization-concept-banner-landing-web-page_74855-20936.jpg" width={'auto'} height={'200px'}/>
                    <Card.Body>
                    <Card.Title>Organization</Card.Title>
                    </Card.Body>
                </Card>

                <Card border="warning" style={{width: '18rem',borderWidth: '2px'}}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/career-orientation-concept-illustration_114360-16151.jpg" width={'auto'} height={'200px'}/>
                    <Card.Body>
                    <Card.Title>Career</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="mt-5">
                <h5 className="Roadmap-title p-2 mb-3"><strong>Roadmap</strong></h5>
                <Chrono items={items} mode="HORIZONTAL" />
            </Container>
        </Container>
    )
}

export default Home;