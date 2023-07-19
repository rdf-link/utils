import { HTTP } from "../const/http.js";

export async function fetchTurtle(url) {
  return (await fetch(
    url,
    {
      cache: "no-store",
      headers: {
        [HTTP.header.accept]: HTTP.mediaType.turtle
      },
      method: HTTP.method.get
    })).text()
}
