import { useSearchParams } from "react-router-dom";
import { getTokenAuth } from "../../api";
import { useEffect } from "react";
export default function Callback() {
  const [params] = useSearchParams();

  useEffect(() => {
    console.log("hello");
    const code = params.get("code");
    console.log(code);
    getTokenAuth(code).then((res) => console.log(res));
  }, []);
  return <p>logged in</p>;
}
