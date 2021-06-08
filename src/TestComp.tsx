import { useParams } from "react-router";

interface ParamTypes {
  godName: string;
}

const GodPage = () => {
  const { godName } = useParams<ParamTypes>();
  return (
    <div>
      {godName}
      <h1>test</h1>
    </div>
  );
};

export default GodPage;
