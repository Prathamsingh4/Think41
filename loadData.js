const fs = require("fs");
const csv = require("csv-parser");
const db = require("./models");

async function loadCSV() {
  const results = [];

  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      for (const row of results) {
        const [user] = await db.User.findOrCreate({
          where: { email: row.email },
          defaults: { username: row.username },
        });

        const conversation = await db.Conversation.create({ UserId: user.id });

        await db.Message.create({
          sender: row.sender,
          text: row.message,
          ConversationId: conversation.id,
        });
      }

      console.log("CSV import complete.");
    });
}

loadCSV();
