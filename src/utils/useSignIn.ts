import { signInEmail, signInPhone, signInAccount } from "@/api/login";
import { ElNotification } from "element-plus";
function signIn(type: "phone" | "email" | "account", payload: any) {
  if (type === "phone") return signInPhone(payload.phone, payload.code);
  if (type === "email") return signInEmail(payload.emai, payload.password);
  return signInAccount(payload.account, payload.password);
}

export async function useSignIn(
  type: "phone" | "email" | "account",
  payload: any
): Promise<any> {
  try {
    const data = await signIn(type, payload);
    ElNotification({
      title: "登录成功",
      type: "success",
    });
    return data;
  } catch (errr) {
    ElNotification({
      title: "登录失败",
      message: "请检查账号或密码",
      type: "error",
    });
    return Promise.reject("出错了");
  }
}
