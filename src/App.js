import "./App.css";
import phone from "./Assets/img.png";
import logo from "./Assets/logo.png";
import { AiFillCrown, AiFillStar } from "react-icons/ai";
import pelangi from "./Assets/Group 34.png";

function App() {
    return (
        <div className="App">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg ">
                {/* Container wrapper */}
                <div className="container">
                    {/* Navbar brand */}
                    <a
                        className="navbar-brand me-2"
                        href="https://mdbgo.com/"
                    >
                        <img
                            src={logo}
                            height={16}
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
                        />
                    </a>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div
                        className="collapse navbar-collapse t"
                        id="navbarButtonsExample"
                    >
                        {/* Left links */}
                        <ul
                            className="text-light navbar-nav me-auto mt-1
                       mb-lg-0"
                        >
                            <li className="text-light nav-item">
                                <a
                                    className="text-light nav-link"
                                    href="#"
                                    style={{ fontSize: "12px" }}
                                >
                                    Our Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-light nav-link"
                                    href="#"
                                    style={{ fontSize: "12px" }}
                                >
                                    Tokens
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-light nav-link"
                                    href="#"
                                    style={{ fontSize: "12px" }}
                                >
                                    Connect Wallet
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-light nav-link"
                                    href="#"
                                    style={{ fontSize: "12px" }}
                                >
                                    Light Paper
                                </a>
                            </li>
                        </ul>
                        {/* Left links */}
                        <div className="d-flex align-items-center">
                            <button
                                type="button"
                                className="btn  text-light px-3 me-2"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary me-3"
                            >
                                Sign up for free
                            </button>
                        </div>
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
            <div className="heading">
                <div className="text-heading">
                    <h1>
                        Rasakan semua kemudahan dalam satu genggaman
                    </h1>
                    <p
                        style={{
                            color: "grey",
                            fontWeight: "lighter",
                            fontSize: "12px",
                        }}
                    >
                        We are creating social media 3.0 with
                        influencers, celebrities and creators being
                        able to launch their own digital currency by
                        simply creating a profile with media content
                        posted as Non fungible Tokens that can be
                        owned and traded on the Tknrs network
                    </p>
                    <div className="container">
                        <center>
                            <h2 className="h3 py-4">Available on</h2>
                            {/* App Store button */}
                            <a
                                href="https://www.kobinet.com.tr/"
                                target="_blank"
                                className="market-btn apple-btn me-5 rounded"
                                role="button"
                                rel="noreferrer"
                            >
                                <span className="market-button-subtitle">
                                    Download on the
                                </span>
                                <span className="market-button-title">
                                    App Store
                                </span>
                            </a>
                            {/* Google Play button */}
                            <a
                                href="https://www.kobinet.com.tr/"
                                target="_blank"
                                className="rounded market-btn google-btn"
                                role="button"
                                rel="noreferrer"
                            >
                                <span className="market-button-subtitle">
                                    Download on the
                                </span>
                                <span className="market-button-title">
                                    Google Play
                                </span>
                            </a>
                        </center>
                    </div>
                </div>
                <div className="img-heading">
                    <img src={phone} alt="" />
                </div>
            </div>
            <div className="card-heading">
                <div className="card-heading1">
                    <div
                        className="logo-creator"
                        style={{
                            backgroundColor: "#22A75D",
                            boxShadow:
                                "0px 15px 25px rgba(34, 167, 93, 0.25)",
                        }}
                    >
                        <AiFillCrown
                            style={{
                                fontSize: "32px",
                            }}
                        />
                    </div>
                    <h1 className="d-inline">For </h1>
                    <h1
                        className="d-inline"
                        style={{ color: "#22A75D" }}
                    >
                        Creator
                    </h1>

                    <p
                        style={{
                            color: "grey",
                            fontWeight: "lighter",
                            marginTop: "24px",
                        }}
                    >
                        Creators can gain independence through a
                        decentralised digital currency system that is
                        dependent on growing and engaging with the
                        community and also their star power.
                    </p>
                    <p>Read More </p>
                </div>
                <div className="card-heading2">
                    <div
                        className="logo-creator"
                        style={{
                            backgroundColor: "#2278D4",
                            boxShadow:
                                "0px 15px 25px rgba(34, 120, 212, 0.25);",
                        }}
                    >
                        <AiFillStar
                            style={{
                                fontSize: "32px",
                            }}
                        />
                    </div>
                    <h1 className="d-inline">For </h1>
                    <h1
                        className="d-inline"
                        style={{ color: "#2278D4" }}
                    >
                        Holders
                    </h1>
                    <p
                        style={{
                            color: "grey",
                            fontWeight: "lighter",
                            marginTop: "24px",
                        }}
                    >
                        Creators can gain independence through a
                        decentralised digital currency system that is
                        dependent on growing and engaging with the
                        community and also their star power.
                    </p>
                    <p>Read More </p>
                </div>
            </div>
            <div className="content">
                <div className="img-content">
                    <img src={pelangi} />
                </div>
                <div className="text-content">
                    <h3>What Makes us Different</h3>
                    <p
                        style={{
                            fontSize: "12px",
                            fontWeight: "lighter",
                            color:'grey' 
                        }}
                    >
                        There are several thousand celebrities and
                        creators on twitter, tiktok, Instagram and
                        YouTube with followings in the millions who we
                        would be actively engaging before we go viral.
                        We would get them on our platform and they
                        would see the opportunity to create a fan
                        driven digital economy where their digital
                        content can be traded as NFTs and their most
                        loyal fans can have the monetary value of
                        their creator's currency increase
                        significantly as they promote their digital
                        currency across their channels while our
                        native token holders benefit from the Weentar
                        popularity.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
