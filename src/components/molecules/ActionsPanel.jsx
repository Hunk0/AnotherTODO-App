import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

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

function ActionsPanel({selected, onChange, onClear}) {
    const classes = useStyles();

    if (selected) return (
        <div className={classes.root}>
            <div className={classes.panel}>
                <Fab size="small" color="primary" aria-label="left" disabled={selected.stage === 0} onClick={() => onChange(selected.stage - 1)}>
                    <ChevronLeftIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="right" disabled={selected.stage === 2} onClick={() => onChange(selected.stage + 1)}>
                    <ChevronRightIcon />
                </Fab>
                <Fab size="small" color="secondary" aria-label="edit" disabled={selected.stage === 2} onClick={() => onChange(selected.stage + 1)}>
                    <EditIcon />
                </Fab>
                <Fab size="small" color="secondary" style={{backgroundColor: "red"}} aria-label="remove" disabled={selected.stage === 2} onClick={() => onChange(selected.stage + 1)}>
                    <DeleteIcon />
                </Fab>
                <Fab size="small" aria-label="cancel" onClick={onClear}>
                    <ClearIcon />
                </Fab>
            </div>
        </div>
    )

    return null
}

export default ActionsPanel
