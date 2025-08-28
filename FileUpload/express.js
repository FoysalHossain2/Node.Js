const express = require('express');
const multer = require("multer");

// file upload folder
const UPLOADS_FOLDER = "./uploads/";

// prepare multer upload object
let upload = multer({
    dest: UPLOADS_FOLDER,
    limits: {
        fileSize: 1000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
        if(file.filename === "avatar") {
            if (
                file.mimetype == "image/png" ||
                file.mimetype == "image/jpg" ||
                file.mimetype == "image/jpeg"
            ) {
                cb(null, true);
            } else {
                cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
            }
        } else if (file.fieldname === "doc") {
            if (file.mimetype === "application") {
                cb(null, true);
            } else {
                cb(new Error("Only .pdf format allowed!"));
            }
        }
    }
});

const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// application route
app.post("/upload", upload.array("avatar", 3), (req, res) => {
    console.log(req.file); // uploaded file info
    res.send("File uploaded successfully!");
});

app.use((err, req, res, next) => {
    if(err) {
        if (err instanceof multer.MulterError) {
            res.status (500).send("There was an error");
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send("success");
    }
});
  
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
