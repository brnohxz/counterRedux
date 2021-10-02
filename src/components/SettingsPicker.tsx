import {makeStyles, Slider, Typography} from "@material-ui/core";
import {useState} from "react";
const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:250
    }
}))
export const SettingsPicker = () => {
    const classes = useStyles()
    const [range, setRange] = useState<number[]>([20, 34])
    const rangeHandler = (event: any, newValue: number | number []) => {
        setRange(newValue as number[])
    }
    return <div className={classes.root}>
        <Typography gutterBottom>Counter range</Typography>
        <Slider valueLabelDisplay="auto"
                value={range}
                onChange={rangeHandler}/>
    </div>
}