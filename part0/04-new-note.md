sequenceDiagram
     participant browser
     participant server

     Note over browser: user writes a note and clicks the 'Save' button

     browser->> server: Post https://studies.cs.helsinki.fi/exampleapp/new_note
     activate server
     Note left of server: The server saves a new note
     server->> browser: HTTP status code 302 (URL redirect to /notes)
     deactivate server

     browser->> server: Get https://studies.cs.helsinki.fi/exampleapp/notes
     activate server
     server->> browser: HTML document
     deactivate server

     browser->> server: Get https://studies.cs.helsinki.fi/exampleapp/main.css
     activate server
     server->> browser: the css file
     deactivate server

     browser->> server: Get https://studies.cs.helsinki.fi/exampleapp/main.js
     activate server
     server->> browser: the JavaScript file
     deactivate server

     Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

     browser->> server: Get https://studies.cs.helsinki.fi/exampleapp/data.json
     activate server
     server->> browser: [{ "content": "My New Note", "date": "2026-02-09"}, ...]
     deactivate server

     Note right of browser: The browser executes the callback function that renders the notes
