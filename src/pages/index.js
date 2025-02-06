import { useRouter } from "next/router";
import Home from "../components/Home";
import Contacto from "../components/Contacto";

export default function Index() {
  const router = useRouter();

  if (router.pathname === "/") {
    return <Home />;
  } else if (router.pathname === "/contacto") {
    return <Contacto />;
  } else {
    return <div>No encontrado</div>;
  }
}
