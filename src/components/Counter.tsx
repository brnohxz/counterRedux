import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton, makeStyles,
    Typography
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import {useState} from "react";
import {DialogSettings} from "./DialogSettings";

const useStyles = makeStyles((theme)=>({
    media : {
        height: 0,
        paddingTop: '56.25%',
        position:'relative'
    },
    mainCard:{
        maxWidth:400
    },
    rootContainer:{
        justifyContent:'center',
        paddingTop:theme.spacing(3)
    },
    counter:{
        position:'absolute',
        left:'40%',
        top:'40%',
        fontWeight:400,
    }
}))


export const Counter = () => {
    const classes = useStyles()
    const [dialogOpened,setDialogOpened] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(0)
    const openDialog = () =>{
        setDialogOpened(true)
    }
    const closeDialog = () =>{
        setDialogOpened(false)
    }
    const increment = () =>{
        setCounter(counter + 1)
    }
    const decrement = () =>{
        setCounter(counter - 1)
    }

    return <Grid container className={classes.rootContainer}>
        <Grid item xs={12} className={classes.mainCard}>
            <Card>
                <CardActionArea>
                    <CardMedia className={classes.media} image="https://miro.medium.com/max/1400/1*meCFnZ5MK_7Fu1ogYfBvNQ.png"
                               title="ReactRedux"/>
                    <Typography variant='h1' className={classes.counter}>{counter}</Typography>
                </CardActionArea>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        What is Redux ?
                    </Typography>
                    <Typography variant="body2" component="p">
                        Redux is an open-source JavaScript library for managing and centralizing application state. It
                        is most commonly used with libraries such as React or Angular for building user interfaces.
                        Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={increment}>Increment</Button>
                    <Button onClick={decrement}>Decrement</Button>
                    <IconButton style={{marginLeft:"auto"}} onClick={openDialog}>
                        <SettingsIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
        <DialogSettings open={dialogOpened} closeDialog={closeDialog}/>
    </Grid>
}