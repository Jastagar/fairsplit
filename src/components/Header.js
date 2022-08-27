export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-light">
            <div className="navbar-brand px-5">
                FairSplit
            </div>
            <button className="navbar-brand btn px-5 d-flex align-items-center btn btn-success">
                <div className="profile-icon d-inline-block me-2"></div>Your Profile
            </button>
        </nav>
    </div>
  );
}
