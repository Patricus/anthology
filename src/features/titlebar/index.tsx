import { AppBar } from "@mui/material";
import { appWindow } from "@tauri-apps/api/window";
import RightButtons from "./RightButtons";

export default function Titlebar() {
    const drag = () => appWindow.startDragging();
    return (
        <div onMouseDown={drag}>
            <AppBar data-tauri-drag-region position="static" sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "slategrey",
            }}>
                <RightButtons />
            </AppBar>
        </div>
    )
}
