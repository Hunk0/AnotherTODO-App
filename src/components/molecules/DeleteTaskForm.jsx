import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function DeleteTaskForm({onSubmit}) {
    function handleSubmit(e){
        e.preventDefault();
        onSubmit(true);
    }

    function handleCancel(){
        onSubmit(false);
    }

    return (
        <Box
            component="form"
            sx={{
                margin: 1,
                '& .MuiTextField-root': { marginBottom: 1 }
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
            noValidate
        >
            <Typography gutterBottom>
                Are you sure about deleting this task
            </Typography>
            
            <div style={{
                justifyContent: 'flex-end',
                display: 'flex',
                marginTop: 20
            }}>
                <Button color="inherit" onClick={handleCancel}>No, cancel</Button>
                <Button color="error" type="submit">Yes</Button>
            </div>
        </Box>
    )
}

export default DeleteTaskForm
