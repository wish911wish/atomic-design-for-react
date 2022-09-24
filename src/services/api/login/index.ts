import { defaultHeaders } from "..";
import { fetcher } from "../fetcher";
import { LoginInputSchema } from "./schema";
import { LoginData, LoginInput } from "./type";

// https://designer.mocky.io/
// 200のレスポンス
export const path = () => `https://run.mocky.io/v3/2588d726-79a1-41ea-9f20-f84c7e0ecdd4`;
// 401のレスポンス
// export const path = () => `https://run.mocky.io/v3/5befdd3f-e1fe-4a67-883e-507a2d5bba88`;

export const postLogin = (data: LoginInput, throwErr = false) => {
  return fetcher<LoginData>(
    path(),
    {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(data),
    },
    LoginInputSchema,
    throwErr
  )
};
