sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Types "Hello World" → Clicks Save
    browser->>server: POST /exampleapp/new_note (content="Hello World")
    activate server
    server-->>browser: 302 Redirect to /notes
    deactivate server

    browser->>server: GET /exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, {"content": "Hello World", "date": "2025-03-25" }]
    deactivate server

    Note right of browser: Renders updated notes with "Hello World"
