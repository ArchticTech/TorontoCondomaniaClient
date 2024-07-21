import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  router.push('/rentals');
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
