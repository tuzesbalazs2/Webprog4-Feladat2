import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row mx-auto">
          <div className="col s12 center-align">
            <h4>
              <b>Üdvözöllek portfolió oldalunkon!</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
                    Ezen a weboldalon szöveges bejegyzéseket hozhatsz létre. <br />
                    A <Link to="/posts/list">Bejegyzések</Link> gombra kattintva megnézheted az összes eddig készített bejegyzést. <br />
                    A <Link to="/login">Bejelentkezés</Link> gombra kattintva be tudsz jelentkezni az oldalra. <br />
                    Amennyiben még nem regisztráltál a weboldalunkra a <Link to="/register">Regisztráció</Link> gombra kattintás után tudod megtenni azt. <br />
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 align-middle"
              >
                <div className="mt-2 text-white">Regisztrálás</div>
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text align-middle"
              >
                <div className="mt-2">Bejelentkezés</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;