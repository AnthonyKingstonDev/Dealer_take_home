import "./Header.scss";
import { projectStrings } from "../components/cardStrings.js";

export default function Header() {
    return (
        <header className="header">
            <div className="overlay"></div>

            <div className="headerContent">
                <h1 className="header_title">{projectStrings.titleText}</h1>
                <p>{projectStrings.bannerText}</p>

                <button className="headerButton">Contact Us</button>
            </div>
        </header>
    );
}

