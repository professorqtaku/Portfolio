import Section from "../components/Section";
import Button from "../components/Button";
import { useNavigate } from "react-router";

function Home() {
   const navigate = useNavigate();
    return ( 
        <div className="content">
            <Section className = "bg-primary/10 [&>*]:pb-4">
            <>
                <h2 className="text-primary font-bold uppercase">Fullstack Developer</h2>
                <h1 className="text-5xl font-bold">Qiling Tan</h1>
                <h2 className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime assumenda nesciunt tempora ipsum quae incidunt officia itaque esse facilis maiores. Earum velit porro eligendi fuga quas? Ullam suscipit amet consequuntur.</h2>
                <div className="flex gap-4">
                    <Button buttonType="primary" onClick={() => {navigate("/contact")}}>Get in Touch</Button>
                    <Button buttonType="secondary"onClick={() => {navigate("/cv")}}>View CV</Button>
                </div>
            </>
            </Section>
        </div>
     );
}

export default Home;