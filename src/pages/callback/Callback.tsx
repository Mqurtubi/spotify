import { useNavigate, useSearchParams } from "react-router-dom";
import { getTokenAuth } from "../../api";
import { useEffect } from "react";
export default function Callback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const code = params.get("code");

    if (!code) {
      navigate("/", { replace: true });
      window.location.reload();
      return;
    }
    const fetchData = async () => {
      try {
        await getTokenAuth(code);
        navigate("/", { replace: true });
        window.location.reload();
      } catch (error) {
        console.log(error);
        navigate("/", { replace: true });
        window.location.reload();
      }
    };
    fetchData();
  }, []);
  return <div></div>;
}
