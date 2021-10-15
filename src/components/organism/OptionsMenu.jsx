import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CachedIcon from '@mui/icons-material/Cached';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FormModal from './FormModal';
import RandomTaskForm from '../molecules/RandomTaskForm';
import CustomTaskForm from '../molecules/CustomTaskForm';

const actions = [
    { icon: <CachedIcon />, name: 'Generate random tasks', form: <RandomTaskForm/> },
    { icon: <PlaylistAddIcon />, name: 'Add Task', form: <CustomTaskForm/>},
];

const useStyles = makeStyles(() => ({
    staticTooltipLabel: {
      width: "max-content !important"
    }
}));

function OptionsMenu({...props}) {
    const classes = useStyles();
    const [showOptions, setShowOptions] = useState(false);

    function handleOpen(){
        setShowOptions(true);
    }

    function handleClose(){
        setShowOptions(false);
    }

    return (
        <Box>
            <Backdrop open={showOptions} />

            <SpeedDial
                ariaLabel="Options"
                className={classes.speedDial}
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={showOptions}
            >
                {actions.map((action) => (
                    <FormModal
                        key={action.name}
                        title={action.name}
                        Launcher={
                            <SpeedDialAction                                
                                icon={action.icon}
                                tooltipTitle={action.name}
                                open={showOptions}
                                classes={classes}
                                TooltipClasses={classes}
                                tooltipOpen
                            />
                        }
                        {...props}
                    >
                        {action.form}
                    </FormModal>
                ))}
            </SpeedDial>
        </Box>
    )
}

export default OptionsMenu
