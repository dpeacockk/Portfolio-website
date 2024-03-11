import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="navbar-wrapper">
        <ul className="navbar">
          <li className="navbar-element">Home</li>
          <li className="navbar-element">Education</li>
          <li className="navbar-element">Experience</li>
          <li className="navbar-element">Projects</li>
          <li className="navbar-element">For Fun</li>
          <li className="navbar-element">Contact</li>
        </ul>
      </div>
      <div className="home-wrapper">
        HELLO WORLD
      </div>
      <div className="footer-wrapper">
        cocks
      </div>
    </main>
  );
}
