import Banner from "../../Common/Banner";
import {
  LoginWrapper,
  LoginFormWrapper,
} from "./styled";

const Login = (): JSX.Element => {
  const bannerData = {
    title: 'Login',
    description: 'Admin',
  }
  return (
    <LoginWrapper className="login">
      <Banner data={bannerData} />
      <LoginFormWrapper>
        <div className="content">
          <div className="yform">
            <form action="" encType="application/x-www-form-urlencoded">
              <div className="form">
                <div className="col">
                  <div className="group">
                    <div className="entry-box">
                      <div className="form-group">
                        <input type="email" placeholder="E-Mail" />
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="entry-box">
                      <div className="form-group">
                        <input type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit">
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </LoginFormWrapper>
    </LoginWrapper>
  );
}

export default Login;