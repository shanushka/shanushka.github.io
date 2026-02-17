import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.css";

function Button(props) {

    return (
        <button className={`btn ${props.type==="primary" ? "btn-primary": "btn-secondary"}`} onClick={props.handleClick}>
            <FontAwesomeIcon icon={props.iconType} size="1xl" style={{ color: "#ffffff" }} />

           <span class="btn-title">{props.title}</span>
        </button>
    )

}

export default Button