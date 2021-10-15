import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


function SideBar({Launcher, ...props}) {
    const [open, setOpen] = useState(false);
    
    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    return (
        <React.Fragment>
            {React.cloneElement(Launcher, { onClick:handleOpen })}

            <Drawer
                anchor='right'
                open={open}
                onClose={handleClose}
            >
                <Button variant="contained">Contained</Button>
            </Drawer>
        </React.Fragment>
    )
}

export default SideBar
