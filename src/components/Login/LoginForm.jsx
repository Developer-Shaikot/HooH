import { useState } from "react";
import LoginNonePointer from "./LoginNonePointer";

function LoginForm() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        console.log("Closing the login form...");
        setIsVisible(false);
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-end z-50 pointer-events-none ${
                isVisible ? "" : "hidden"
            }`}
        >
            <LoginNonePointer onClose={handleClose} className="pointer-events-auto" />
        </div>
    );
}

export default LoginForm;
