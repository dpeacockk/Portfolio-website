import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="navbar-wrapper">
        <ul className="navbar">
          <li className="navbar_element">Home</li>
          <li className="navbar_element">Education</li>
          <li className="navbar_element">Experience</li>
          <li className="navbar_element">Projects</li>
          <li className="navbar_element">For Fun</li>
          <li className="navbar_element">Contact</li>
        </ul>
      </div>
      <div className="home-wrapper">
        HELLO WORLD
      </div>
      <div className="footer-wrapper">
        
      </div>
    </main>
  );
}
