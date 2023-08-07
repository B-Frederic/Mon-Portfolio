import { useEffect } from "react";

const Error = () => {

    useEffect(() => {
        setTimeout(() => window.location.href = "https://frederic-betaouaf-portfolio.netlify.app/", 5000)
    }, [])

    return (
        <div>
            <div className="container-error">
                <p><span className="container-error--span">Oups !!</span> cette page n'existe pas.<br/> Ne vous inquiétez pas, vous êtes redirigé vers l'accueil du portfolio.</p>
            </div>
        </div>
    );
};

export default Error;