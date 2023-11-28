import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
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
    <div className="container">
      <h1>Anthology</h1>

      <button
        className="row"
        onClick={(e) => {
          e.preventDefault();
          pwdFn();
        }}
      >PWD
      </button>

      <p>{pwd}</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          newProject();
        }}
      >
        <input
          id="proj-input"
          onChange={(e) => setProject(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Create Project</button>
      </form>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          newAlbum();
        }}
      >
        <input
          id="album-input"
          onChange={(e) => setAlbum(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Create Album</button>
      </form>

      <p>{dir}</p>

    </div>
  );
}

export default App;
