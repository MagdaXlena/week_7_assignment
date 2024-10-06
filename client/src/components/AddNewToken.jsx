import { useState } from "react";
import './AddNewToken.css'
import TokenForm from "./TokenForm";

const AddNewToken = () => {
    const [show, setShow] = useState(false);
    const onShowClick = () => {
        if (show == false) {
            setShow(true);
        } else setShow(false);
    }

    return (
        <div>
            <button className="addNewToken" onClick={onShowClick}>Add New Token</button>
            {show && <TokenForm />}
        </div>
    )
};

export default AddNewToken;