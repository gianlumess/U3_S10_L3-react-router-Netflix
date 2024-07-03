/* import "../assets/dist/css/Profile.min.css";
 */
const ProfileEditSection = () => (
  <>
    <div className="row d-flex flex-column flex-md-row">
      <div className="col-12 col-md-4">
        <img src="avatar.png" className="w-100" />
      </div>
      <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
        <h3 className="bg-secondary p-3">Strive Student</h3>
        <div id="languageBtnSection">
          <span>Language:</span>
          <div className="dropdown mb-4 mt-2">
            <button
              className="btn btn-primary btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Italian
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Spanish
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  French
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="d-none d-md-block col-md-4"></div>
      <div className="col-12 col-md-8">
        <h3 className="text-secondary">Maturity Settings:</h3>
        <h3 className="bg-secondary d-inline-block p-2">ALL MATURITY RATINGS</h3>
        <p>Show titles of all maturity ratings for this profile.</p>
        <button type="button" className="btn btn-info btn-outline-secondary mb-4">
          EDIT
        </button>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="d-none d-md-block col-md-4"></div>
      <div className="col-12 col-md-8 mb-4">
        <h3 className="text-secondary">Autoplay controls</h3>
        <p>Show titles of all maturity ratings for this profile.</p>
        <input type="checkbox" />
        <span>Autoplay next episode in a series on all devices.</span>
        <br />
        <input type="checkbox" />
        <span>Autoplay previews while browsing on all devices.</span>
      </div>
      <hr />
    </div>

    <div className="row justify-content-center">
      <div className="col-auto">
        <button type="button" className="btn btn-info btn-outline-secondary">
          SAVE
        </button>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-info btn-outline-secondary">
          CANCEL
        </button>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-info btn-outline-secondary">
          DELETE PROFILE
        </button>
      </div>
    </div>
  </>
);

export default ProfileEditSection;
