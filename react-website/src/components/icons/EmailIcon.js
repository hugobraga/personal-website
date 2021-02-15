// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailIcon = () => {
    return (
        // <FontAwesomeIcon icon class="fas fa-envelope-square" />
        <FontAwesomeIcon icon={['fas', 'fa-envelope-square']} />
    );
}

export default EmailIcon;