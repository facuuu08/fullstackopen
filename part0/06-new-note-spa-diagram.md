```mermaid
sequenceDiagram
     participant browser
     participant server

     Note over browser: The user writes a note and clicks the 'Save' button
     Note right of browser: The JavaScript code adds the new note to the list and rerenders it locally

     browser->> server: Get https://studies.cs.helsinki.fi/exampleapp/new-note-spa
     activate server
     Note left of server: The server saves the note to the database
     server->> browser: HTTP status code 201 created (JSON: {"message":"note created"})
     deactivate server
