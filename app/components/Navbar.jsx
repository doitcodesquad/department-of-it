import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <div className="title">{`CODESQUAD`}</div>
        </Link>
        <div className="nav-list">
          <Link className="nav-item" href="/events">
            Events
          </Link>
          <Link className="nav-item" href="/members">
            Members
          </Link>
          <Link className="nav-item" href="/clubs">
            Clubs
          </Link>
          <Link className="nav-item" href="/contact-us">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
