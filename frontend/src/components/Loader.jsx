import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            style={{
                width: '24px',
                height: '24px',
                margin: '0 12px',
                display: 'block'
            }}
        ></Spinner>
    );
}

export default Loader;
