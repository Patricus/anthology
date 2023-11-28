// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
use std::env;

// Create error type
#[derive(Debug, thiserror::Error)]
enum Error {
    #[error(transparent)]
    Io(#[from] std::io::Error),
}

impl serde::Serialize for Error {
    // Serialize error implementation
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

// Create project
#[tauri::command]
fn new_project(project: &str) -> Result<String, Error> {
    let path = format!("./{}", project);
    fs::create_dir(&path).map_err(Error::from)?;
    
    Ok(path)
}

// Create album
#[tauri::command]
fn new_album(project: &str, album: &str) -> Result<String, Error> {
    // TODO create a album folder with album title
    let path = format!("./{}/{}", project, album);
    fs::create_dir(&path).map_err(Error::from)?;
    
    Ok(path)
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn pwd() -> Result<String, String>{
    if let Ok(current_dir) = env::current_dir() {
        if let Some(path) = current_dir.to_str() {
            return Ok(path.to_string());
        }
    }
    Err("Failed to get the current directory".to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![pwd, new_album, new_project])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
