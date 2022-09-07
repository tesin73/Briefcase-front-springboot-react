import { Form, Button } from "react-bootstrap"
import './../styles/Admin.css'

export default function Admin() {

    const handleSubmit = async (event) => {
        const data = {
            "name": event.target.namedata.value,
            "url": event.target.urldata.value,
            "content": event.target.contentdata.value,
            "image": event.target.imagedata.value,
        }
        fetch("http://localhost:8080/knw/knowledge", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
    return (
        <>
            <div className="formDivStyles">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="namedata" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" placeholder="content" name="contentdata" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" placeholder="URL" name="urldata" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" placeholder="image" name="imagedata" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}