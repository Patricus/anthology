import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, TextField, Tooltip, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [pwd, setPwd] = useState("");
  const [project, setProject] = useState("");
  const [album, setAlbum] = useState("");
  const [dir, setDir] = useState("");

  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

  async function pwdFn() {
    setPwd(await invoke("pwd"));
    console.log("pwd", pwd);
  }

  async function newProject() {
    setDir(await invoke("new_project", { project}));
  }

  async function newAlbum() {
    setDir(await invoke("new_album", { project, album}));
  }

  return (
    <div>
      <Typography variant="h1">Anthology</Typography>

      <Tooltip title="Display present working directory">
      <Button
        onClick={(e) => {
          e.preventDefault();
          pwdFn();
        }}
      >PWD
      </Button>
      </Tooltip>

      <Typography variant="body1">{pwd}</Typography>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          newProject();
        }}
      >
        <TextField
          id="proj-input"
          onChange={(e) => setProject(e.currentTarget.value)}
          placeholder="Enter a name..."
          label="New Project Name"
        />
        <Button type="submit">Create Project</Button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          newAlbum();
        }}
      >
        <TextField
          id="album-input"
          onChange={(e) => setAlbum(e.currentTarget.value)}
          placeholder="Enter a name..."
          label="New Album Name"
        />
        <Button type="submit">Create Album</Button>
      </form>

      <Typography variant="body1">{dir}</Typography>

    </div>
  );
}

export default App;
