import { getUserByAuthToken } from "~/server/app/userService";
import { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const authToken = getCookie(event, "authToken");
  if (!authToken) return null;
  return await getUserByAuthToken(authToken);
});
