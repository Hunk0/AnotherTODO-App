import { makeStyles } from '@mui/styles';
import TasksList from "../molecules/TaskList";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const stages = ['To Do', 'Ongoing', 'Done'];

const useStyles = makeStyles(() => ({
    board: {
        display: 'flex',
        overflowY: 'auto',
    }
}));

function TasksBoard({list, selectedTask, ...props}) {
    const classes = useStyles();

    return (
        <Box
            component="div"
            sx={{
                margin: 1,
                justifyContent: 'center',
                display: 'flex'
            }}
        >
            <div className={classes.board}>
                {stages.map((stage, i) =>  (
                    <Paper key={i} sx={{
                        margin: 2,                        
                        minWidth: 320,
                        minHeight: '70vh',
                        maxHeight: '70vh',
                        overflowX: 'auto'
                    }}>
                        <TasksList                                 
                            title={stage} 
                            list={list.filter(task => task.stage === i)} 
                            {...props}
                        />
                    </Paper>    
                ))}
            </div>
        </Box>
    )
}

export default TasksBoard
