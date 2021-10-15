import React from "react"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";

function TaskList({list, title, selected, onClick}) {
    return (
        <List 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={<Typography textAlign="center" gutterBottom>{title}</Typography>}
        >
            {list.map(task => (
                <div key={task.content}>
                    <Divider />
                    <ListItemButton
                        selected={task === selected}
                        onClick={() => onClick(task)}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cat" src="https://cataas.com/cat" />
                            </ListItemAvatar>
                            <ListItemText
                                secondary={task.content}
                            />
                        </ListItem>
                    </ListItemButton>
                </div>
            ))}
        </List>
    )
}

export default TaskList
