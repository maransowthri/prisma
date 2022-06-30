-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
