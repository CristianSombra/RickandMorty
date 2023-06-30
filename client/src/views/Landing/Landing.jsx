import Form from "../../components/forms/Forms.jsx";

import "./Landing.css";

function LandingPage ({login}) {
    return (
        <div className="landing-container">
            <Form login={login}/>
        </div>
    )
};



export default LandingPage;