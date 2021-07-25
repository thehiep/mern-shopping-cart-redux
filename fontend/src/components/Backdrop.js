import './Backdrop.css';

const Backdrop = ({ shown, click }) => {
    return shown && (
        <div className="backdrop" onClick={click}></div>
    )
}

export default Backdrop;