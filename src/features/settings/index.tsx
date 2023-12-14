import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import { useTheme } from "../../components/themeContext";

export default function Settings() {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <>
            <Typography variant="h1">Settings</Typography>
            <FormGroup>
                <FormControlLabel 
                    control={
                        <Switch
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />}
                    label="Dark Mode"
                />
            </FormGroup>
        </>
    )
}
