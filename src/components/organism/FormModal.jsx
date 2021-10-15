import React, { useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

function FormModal({Launcher, children, title, onSubmit}) {
    const [show, setShow] = useState(false);

    function handleOpen(){
        setShow(true);
    }

    function handleClose(){
        setShow(false);
    }

    function handleSubmit(tasks){
        onSubmit(tasks); 
        handleClose();
    }

    return (
        <React.Fragment>
            {React.cloneElement(Launcher, { onClick: handleOpen })}

            <Dialog
                open={show}
                onClose={handleClose}
            >
                <DialogTitle>
                    {title}
                </DialogTitle>

                <DialogContent>
                    {React.cloneElement(children, {onSubmit: handleSubmit})}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default FormModal
