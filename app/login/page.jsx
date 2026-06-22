import GoogleAuthBtn from "@/components/modules/login/GoogleAuthBtn";
import LoginModule from "@/components/modules/login/LoginModule";
export default function page() {
    return (
        <div id="signin" className="page loginpage">
            <div className="signin-card">
                <div className="signin-logo">
                    <div className="signin-logo-icon">✦</div>Nudge
                </div>
                <h2>Welcome back</h2>
                <p className="signin-sub">
                    Sign in to save your suggestions and access your history
                </p>
                {/* <GoogleAuthBtn /> */}
                {/* <div className="divider-or">or</div> */}
                <LoginModule />
            </div>
        </div>
    );
}
