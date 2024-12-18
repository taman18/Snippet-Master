import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MyContext } from "@/context/context";

interface Props {
 data : {
  id: number;
  title: string;
  desc: string;
  lang: string;
  code: string;
  date: string;
  isFavorite: boolean;
 }
}
export default function DialogBox(props: Props) {
  const context = React.useContext(MyContext);
  console.log(props)
  const agreeBtn = () => {
    context?.setShowDeleteModal(false);
    context?.setAgreeToDelete(true);
    context?.setTrashData([...context?.trashData, props?.data]);
    context?.setCodeSnippet(context?.codeSnippet.filter((item) => item.id !== props?.data.id));
  }
  const handleClose = () => {
    context?.setShowDeleteModal(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={context?.showDeleteModal || false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={agreeBtn} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
