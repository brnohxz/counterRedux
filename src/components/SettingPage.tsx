import {makeStyles, Typography} from "@material-ui/core";
import {SettingsPicker} from "./SettingsPicker";
const useStyles = makeStyles((theme)=>({

}))
export const SettingsPage = ()=>{
    const classes = useStyles()
    return <div>
        <SettingsPicker/>
    </div>
}