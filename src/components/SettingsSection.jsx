import { Image } from "react-bootstrap";

const SettingsSection = () => (
  <>
    <div className="row">
      <div className="col-4">
        <h3 className="text-secondary">MEMBERSHIP & BILLING</h3>
        <button type="button" className="btn btn-greyButton px-4">
          Cancel Membership
        </button>
      </div>
      <div className="col">
        <div className="d-flex justify-content-between">
          <span>student@strive.school</span>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Change account email</span>
          </a>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-secondary">Password: ********</span>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Change password</span>
          </a>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-secondary">Phone: 321 044 1279</span>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Change phone number</span>
          </a>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-4"></div>
      <div className="col">
        <div className="d-flex justify-content-between">
          <span>
            <i className="bi bi-paypal px-1"></i>admin@strive.school
          </span>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Update payment info</span>
          </a>
        </div>
        <div className="d-flex justify-content-end">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Billing details</span>
          </a>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-4"></div>
      <div className="col">
        <div className="d-flex justify-content-end">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Redeem gift card or promo code</span>
          </a>
        </div>
        <div className="d-flex justify-content-end">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Where to buy gift cards</span>
          </a>
        </div>
      </div>
      <hr />
    </div>
    <div className="row">
      <div className="col-4">
        <h3 className="text-secondary">PLAN DETAILS</h3>
      </div>
      <div className="col">
        <div className="d-flex justify-content-between">
          <span>
            Premium <i className="bi bi-badge-hd-fill"></i>
          </span>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Change plan</span>
          </a>
        </div>
      </div>
      <hr />
    </div>
    <div className="row">
      <div className="col-4">
        <h3 className="text-secondary">SETTINGS</h3>
      </div>
      <div className="col">
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Parental controls</span>
          </a>
        </div>
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Test participation</span>
          </a>
        </div>
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Manage download devices</span>
          </a>
        </div>
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Activate a device</span>
          </a>
        </div>
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Recent device streaming activity</span>
          </a>
        </div>
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Sign out of all devices</span>
          </a>
        </div>
      </div>
      <hr />
    </div>
    <div className="row">
      <div className="col-4">
        <h3 className="text-secondary">MY PROFILE</h3>
      </div>
      <div className="col">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image className="img-fluid me-3" src="avatar.png" />
            <span>Strive student</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <a className="link-underline link-underline-opacity-0" href="#">
              <span className="text-success">Manage profiles</span>
            </a>
            <a className="link-underline link-underline-opacity-0" href="#">
              <span className="text-success">Add profile email</span>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between w-50">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Language</span>
          </a>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Viewing activity</span>
          </a>
        </div>
        <div className="d-flex justify-content-between w-50">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Payblack settings</span>
          </a>
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Ratings</span>
          </a>
        </div>
        <div className="d-flex">
          <a className="link-underline link-underline-opacity-0" href="#">
            <span className="text-success">Subtitle appaerance</span>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default SettingsSection;
