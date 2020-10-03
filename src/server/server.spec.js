import { addNewTask, updateTask } from "./server.js";

(async function myFunc() {
  await addNewTask({ name: "My Task", id: "12346" });
  await updateTask({ id: "12346", name: "My Task - Updated!" });
})();
