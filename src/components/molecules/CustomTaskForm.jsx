import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function CustomTaskForm({onAdd}) {
    function onSubmit(e){
        e.preventDefault();
        onAdd({content: e.target[0].value, stage: 0});
    }

    return (
        <Box
            component="form"
            sx={{
                margin: 1,
                '& .MuiTextField-root': { marginBottom: 1 }
            }}
            autoComplete="off"
            onSubmit={onSubmit}
            noValidate
        >
            <TextField
                name="new-task"
                label="Describe your task..."
                rows={4}
                multiline
                fullWidth
            />
            
            <Button variant="contained" type="submit">Guardar</Button>
        </Box>
    )
}

export default CustomTaskForm
