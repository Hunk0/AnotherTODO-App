import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function RandomTaskForm({onAdd}) {
    function onSubmit(e){
        e.preventDefault();

        const limit = Number(e.target[0].value);
        if(limit && limit > 0 && limit <= 1000)
            fetch(`https://catfact.ninja/facts?limit=${limit}`)
            .then(res => {
                res.json().then(data => {
                    const tasks = data.data.map(data => {return {content: data.fact, stage: 0}});
                    onAdd(tasks)
                })
            })
            

        //onAdd({content: e.target[0].value, stage: 0});
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
            <Typography component="div" style={{display: 'flex', alignItems: 'center'}} variant="body1" gutterBottom>
                Generar 
                <TextField 
                    style={{maxWidth: 75, marginLeft: 10, marginRight: 10}} 
                    defaultValue={5} 
                    type="number"
                /> 
                tareas aleatorias
            </Typography>
            
            <Button variant="contained" type="submit">Generar</Button>
        </Box>
    )
}

export default RandomTaskForm
