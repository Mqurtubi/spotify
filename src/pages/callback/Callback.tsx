import { useNavigate, useSearchParams } from "react-router-dom";
import { getTokenAuth } from "../../api";
import { useEffect } from "react";
export default function Callback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      navigate("/");
      return;
    }
    getTokenAuth(code).then((res) => {
      if (res?.access_token) {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        const expired = res.expires_in + Date.now() * 1000;
        localStorage.setItem("spotify_token_expire_auth", expired);
        navigate("/", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    });
  }, []);
  return <div></div>;
}
