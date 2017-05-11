// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function (req, res) {
    res.render("index")
  });

  app.get("/student", function (req, res) {
    res.render("student")
  });

  app.get("/tutor", function (req, res) {
    res.render("tutor")
  });

  app.get("/admin", function (req, res) {
    res.render("admin")
  });
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // Names subject to change!
  // May need to add reservations route, admin route etc

  // index route loads index.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // students route loads student-manager.html
  // app.get("/students", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/student-manager.html"));
  // });

  // tutors route loads tutor-manager.html
  // app.get("/tutors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tutor-manager.html"));
  // });

};
