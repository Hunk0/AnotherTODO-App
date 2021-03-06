import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import FormModal from '../organism/FormModal';
import CustomTaskForm from './CustomTaskForm';
import DeleteTaskForm from './DeleteTaskForm';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },

    panel: {
        width: 260,
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}));

function ActionsPanel({selected, onChange, onClear, onEdit, onDelete}) {
    const classes = useStyles();

    function handleEdit(task){
        onEdit(task.content)
    }

    function handleDelete(consent){
        if(consent) onDelete();
    }

    if (selected) return (
        <div className={classes.root}>
            <div className={classes.panel}>
                <Fab size="small" color="primary" aria-label="left" disabled={selected.stage === 0} onClick={() => onChange(selected.stage - 1)}>
                    <Tooltip title="To left">
                        <ChevronLeftIcon />
                    </Tooltip>
                </Fab>

                <Fab size="small" color="primary" aria-label="right" disabled={selected.stage === 2} onClick={() => onChange(selected.stage + 1)}>
                    <Tooltip title="To right">
                        <ChevronRightIcon />
                    </Tooltip>
                </Fab>

                <FormModal
                    title="Edit task"
                    onSubmit={handleEdit}
                    Launcher={
                        <Fab size="small" color="secondary" aria-label="edit">
                            <Tooltip title="Edit">
                                <EditIcon />
                            </Tooltip>
                        </Fab>
                    }
                >
                    <CustomTaskForm defaulValue={selected.content}/>
                </FormModal>

                <FormModal
                    title="Edit task"
                    onSubmit={handleDelete}
                    Launcher={
                        <Fab size="small" color="secondary" style={{backgroundColor: "red"}} aria-label="remove">
                            <Tooltip title="Delete">
                                <DeleteIcon />
                            </Tooltip>
                        </Fab>
                    }
                >
                    <DeleteTaskForm />
                </FormModal>                

                <Fab size="small" aria-label="cancel" onClick={onClear}>
                    <Tooltip title="Cancel">
                        <ClearIcon />
                    </Tooltip>
                </Fab>
            </div>
        </div>
    )

    return null
}

export default ActionsPanel
