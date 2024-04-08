import { BsPostcard } from "react-icons/bs";
import NavButton from "../nav-button";
import { FiUsers } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

const NavBar = () => {
    return <nav>
        <ul className="flex flex-col gap-5">
            <li>
                <NavButton href="/" icon={<BsPostcard />}>
                    posts
                </NavButton>
                <NavButton href="following" icon={<FiUsers />}>
                    follwing
                </NavButton>
                <NavButton href="followers" icon={<FaUsers />}>
                    followers
                </NavButton>
            </li>
        </ul>
    </nav>;
}

export default NavBar;