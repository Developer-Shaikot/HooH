import { Link } from "react-router-dom";

export default function NavBrand() {
    return (
        <Link to="/">
            <img className="w-auto xs:h-auto" src="/images/hooh.png" alt="hooh" />
        </Link>
    );
}
