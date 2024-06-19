// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::fs;

#[tauri::command]
async fn saving_file(path: String, content: String) {
    fs::write(path, content).expect("Can`t save file(");
}

#[tauri::command]
async fn reading_file(path: String) -> String {
    fs::read_to_string(path).expect("Can`t read file(")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![saving_file, reading_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
