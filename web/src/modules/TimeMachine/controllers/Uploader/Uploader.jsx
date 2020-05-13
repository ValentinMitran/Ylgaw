import React, { useEffect, useContext } from "react";
import ActionContext from "../../ActionContext";
import { toast } from "react-toastify";
import "./Uploader.scss";
import Button from "@material-ui/core/Button";

function Uploader(props) {
  const [action, setAction] = useContext(ActionContext);
  const notify = () => toast.success("Image uploaded successfully!");

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("username", props.username);
    formData.append("date", props.date);
    formData.append("month", props.month);
    formData.append("year", props.year);

    formData.append("daily", files[0]);
    await fetch("/api/timeMachine/upload", {
      method: "POST",
      headers: {
        authToken: localStorage.authToken,
      },
      body: formData,
    }).catch((err) => {
      alert(err);
    });
    notify();
    setAction(!action);
  };

  useEffect(() => {}, [props.date]);

  return (
    <div id="uploader">
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        name="daily"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="outlined"
          color="primary"
          component="span"
          style={{ display: "flex" }}
        >
          Upload
        </Button>
      </label>
    </div>
  );
}

export default Uploader;
