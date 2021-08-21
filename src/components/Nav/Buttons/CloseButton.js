import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import "./style.css";

const CloseButton = ({ handleClose }) => {
  return (
    <div className="buttonContainer">
      <Button
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          margin: "5px 5px 0px 0px",
          color: "#e84393",
        }}
        className="button"
        onClick={handleClose}
      >
        <CloseIcon />
      </Button>
    </div>
  );
};

export default CloseButton;
