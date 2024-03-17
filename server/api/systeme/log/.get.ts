import { definePrivateEventHandler } from "../../..";

import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(
  async (event, user) => {
    return { name: "hello" };
  },
  { auth: false }
);
