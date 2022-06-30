import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });
  return res.json(user);
});

app.post("/car", async (req: express.Request, res: express.Response) => {
  const { model, year, userID } = req.body;
  const car = await prisma.car.create({
    data: {
      model: model,
      year: year,
      userID: userID,
    },
  });
  return res.json(car);
});

app.get("/", async (req: express.Request, res: express.Response) => {
  const users = await prisma.user.findMany({
    include: { cars: true },
  });
  return res.json(users);
});

app.put("/", async (req: express.Request, res: express.Response) => {
  const { id, email } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      email: email,
    },
  });
  return res.json(updatedUser);
});

app.delete("/:id", async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  return res.json(deletedUser);
});

app.listen(3001, () => {
  console.log("Server is running on 3001");
});
