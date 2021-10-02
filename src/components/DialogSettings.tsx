import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles
} from "@material-ui/core";
import React from "react";
import {SettingsPage} from "./SettingPage";
const useStyles = makeStyles((theme)=>({
    root:{minWidth:300}
}))

export type DialogSettingsPropsType = {
    open:boolean,
    closeDialog:()=>void
}
export const DialogSettings:React.FC<DialogSettingsPropsType> = ({open,closeDialog}) => {
    const classes = useStyles()
    return <div>
        <Dialog open={open} onClose={closeDialog} fullWidth maxWidth='sm'>
            <DialogTitle id="dialog-title">Counter setting</DialogTitle>
            <DialogContent>
                <SettingsPage/>
            </DialogContent>
            <DialogActions>
                <Button>OK</Button>
                <Button onClick={closeDialog}>Close</Button>
            </DialogActions>
        </Dialog>
    </div>
}