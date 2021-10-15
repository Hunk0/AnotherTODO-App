import React, { useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

function FormModal({Launcher, children, title, onAdd}) {
    const [show, setShow] = useState(false);

    function handleOpen(){
        setShow(true);
    }

    function handleClose(){
        setShow(false);
    }

    function handleAdd(tasks){
        onAdd(tasks); 
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
                    {React.cloneElement(children, {onAdd: handleAdd})}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default FormModal
