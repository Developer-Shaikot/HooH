import LoginNonePointer from "./LoginNonePointer";

function LoginForm() {
    return (
        <div className="fixed inset-0 flex items-center justify-end z-50 pointer-events-none">
            <LoginNonePointer className="pointer-events-auto" />
        </div>
    );
}

export default LoginForm;
