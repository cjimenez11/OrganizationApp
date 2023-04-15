const {Router} = require("express")

const {getToDo, saveToDo, deleteToDo, updateToDo} = require("../controllers/ToDoController");

const router = Router()

// To test locally, remove the api in the first parameter
// Ex. "/", "/save", "/update", "/delete"
router.get("/api", getToDo);

router.post("/api/save", saveToDo);

router.post("/api/update", updateToDo);

router.post("/api/delete", deleteToDo);

module.exports = router;
