const { sequelize: db } = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
      console.log(process.env.REACT_APP_API_URL);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

init();
