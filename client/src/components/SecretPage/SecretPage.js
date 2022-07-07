import { Container, Image } from "react-bootstrap";
import "./SecretPage.css";

function SecretPage() {
  return (
    <div className="SecretPage p-3">
      <Container>
        <h4 className="display-4">Thank you professor Lightfoot!</h4>
        <Image
          src="https://engineering.tamu.edu/cse/_files/_images/_profile-images/Robert-Lightfoot-Web.jpg"
          fluid
          className="secret-page-img shadow-lg rounded p-2"
        />
        <br /> <br />
        <p>
          And James and Mufeng for an <b>amazing</b> semester!
        </p>
      </Container>
    </div>
  );
}
export default SecretPage;
