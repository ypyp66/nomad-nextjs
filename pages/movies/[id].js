import { useRouter } from "next/router";
import { getServerSideProps } from "..";

export default function Detail({ query }) {
  const router = useRouter();

  return (
    <div>
      <h2>{router.query.title || "...Loading"}</h2>
    </div>
  );
}
