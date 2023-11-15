import { Button, Card, Container } from "react-bootstrap";

const Services = () => {
    return(
        <Container>
            <h4 className="Service-title my-3 p-2">Services</h4>

            <Card bg='warning' className="text-center my-2">
                <Card.Body>
                    <Card.Title>Behavioral Assessment</Card.Title>
                    <Card.Text>
                    Our Behavioral tests are designed to illuminate deeply ingrained habits and mindsets, offering profound insights into areas for improvement. By taking these tests, you gain a clear understanding of what needs adjustment for more effective communication, improved interpersonal relationships, efficient information processing, and an accurate understanding of urgency. This transformative tool empowers you to make positive changes, fostering a more fulfilling and successful personal and professional life.
                    </Card.Text>
                    <Button variant="dark">Attempt Test</Button>
                </Card.Body>
            </Card>

            <Card bg='warning' className="text-center my-2">
                <Card.Body>
                    <Card.Title>Academic and Learning activities measurement</Card.Title>
                    <Card.Text>
                    In recognizing the diverse ways students learn, we understand that the effectiveness of learning is optimized when teaching aligns with each student's natural abilities and interests. Varied patterns in information gathering, experimentation, comprehension, critical thinking, and reasoning skills exist among students. Objective tests are available to identify your unique preferences and abilities, providing precise insights into your optimal learning methods and areas that require focused attention. These tests empower you with a comprehensive understanding of your learning style, facilitating a targeted and successful educational journey.
                    </Card.Text>
                    <Button variant="dark">Attempt Test</Button>
                </Card.Body>
            </Card>

            <Card bg='warning' className="text-center my-2">
                <Card.Body>
                    <Card.Title>Organizational Effectiveness test</Card.Title>
                    <Card.Text>
                    Streamline your life to make room for joy, peace, and happiness. High school students grapple with stress from academics, sports, after-school commitments, and the pervasive influence of social media, leading to overwhelming distractions. Stress compounds with procrastination and subpar time management. Enter the CONCOURSE program, designed to elevate your organizational skills beyond daily tasks to encompass the next few crucial years. We guide you in planning not just for the day but for a future marked by direction and purpose. By participating in the program, you gain the tools to chart a clearer path for your life and career, alleviating stress and fostering a sense of control and fulfillment.
                    </Card.Text>
                    <Button variant="dark">Attempt Test</Button>
                </Card.Body>
            </Card>

            <Card bg='warning' className="text-center my-2">
                <Card.Body>
                    <Card.Title>Career Guidance</Card.Title>
                    <Card.Text>
                    In today's dynamic environment, students face the challenge of staying informed and making well-thought-out decisions about their academic paths. Our 4-year planning approach provides the time needed to identify strengths, address weaknesses, and align with career interests. This proactive strategy enables more informed choices in high school subjects and college majors, preventing the need for costly mid-program changes often faced by students who haven't given enough thought to their academic interests.
                    </Card.Text>
                    <Button variant="dark">Attempt Test</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Services;