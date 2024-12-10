import { Container } from "react-bootstrap";
import { useGetTrialQuery } from "../../api/demoApi";
import { Trial } from "../../models/trials";
import TrialCard from "./trialCard";

export const Trials = () => {
  const { data: trialsResponse, isLoading } = useGetTrialQuery();
  if (isLoading) return <p>Loading...</p>;
  if (!trialsResponse?.trials?.length) return <p>There are no trials</p>;
  return (
    <Container>
      <h1>Trials</h1>
      {trialsResponse.trials?.map((trial: Trial) => (
        <TrialCard trial={trial} key={`trial-${trial.id}`} />
      ))}
    </Container>
  );
};
