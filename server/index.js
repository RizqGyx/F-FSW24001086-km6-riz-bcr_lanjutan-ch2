const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Mengatur folder statis untuk menyajikan file CSS, gambar, dan skrip
app.use(express.static(path.join(__dirname, "../public")));

// Mengatur tipe MIME untuk file CSS
app.get("/bootstrap-5.3.3-dist/css/bootstrap.min.css", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../bootstrap-5.3.3-dist/css/bootstrap.min.css"),
    {
      headers: {
        "Content-Type": "text/css",
      },
    }
  );
});

app.get("/bootstrap-5.3.3-dist/js/bootstrap.min.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../bootstrap-5.3.3-dist/js/bootstrap.min.js"),
    {
      headers: {
        "Content-Type": "text/javascript",
      },
    },
    (err) => {
      if (err) {
        console.error(err);
        res.status(404).end();
      }
    }
  );
});

// Mengatur mesin template EJS dan folder views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

// Menangani permintaan untuk halaman Landing Page
app.get("/", (req, res) => {
  res.render("landingPage");
});

// Menangani permintaan untuk halaman Pencarian Mobil
app.get("/cars", (req, res) => {
  res.render("cariMobil");
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
