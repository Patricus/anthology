import { Button, ButtonGroup } from "@mui/material";
import { appWindow } from "@tauri-apps/api/window";

export default function RightButtons() {
    const minimize = () => appWindow.minimize();
    const maximize = async () => await appWindow.isMaximized() ? appWindow.unmaximize() : appWindow.maximize();
    const close = () => appWindow.close();

    return (
        <ButtonGroup variant="contained" sx={{
            marginLeft: "auto",
            boxShadow: "none",
        }}>
            <Button id="titlebar-minimize" onClick={minimize}>
                <img
                    src="https://api.iconify.design/mdi:window-minimize.svg"
                    alt="minimize"
                />
            </Button>
            <Button id="titlebar-maximize" onClick={maximize}>
                <img
                    src="https://api.iconify.design/mdi:window-maximize.svg"
                    alt="maximize"
                />
            </Button>
            <Button id="titlebar-close" onClick={close}>
                <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
            </Button>
        </ButtonGroup>
    )
}
