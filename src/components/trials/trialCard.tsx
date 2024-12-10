import { FC, useState } from "react";
import { Trial } from "../../models/trials";
import { Button, Card } from "react-bootstrap";
import { isDateInPast } from "./utils";
import { StyledBadge, StyledCard } from "./styled";

type Props = {
  trial: Trial;
};
const TrialCard: FC<Props> = ({ trial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const trialDataExists = trial.description || trial.first_enrollment_at;
  const isEnrollmentOpen = isDateInPast(trial.first_enrollment_at);
  return (
   <>
    <StyledCard className="mb-4">
    {
        isEnrollmentOpen && <StyledBadge>
        Enrollment Open
        </StyledBadge>
      }
      <Card.Header>{trial.name}</Card.Header>
      {trialDataExists && isExpanded && (
        <Card.Body>
          {trial.description && (
            <>
              <h4>Description</h4>
              <p>{trial.description}</p>
            </>
          )}
          {trial.first_enrollment_at && (
            <>
              <h4>First enrollment</h4>
              <p>{trial.first_enrollment_at}</p>
            </>
          )}
        </Card.Body>
      )}
      {trialDataExists && (
        <Card.Footer>
          <Button
            onClick={() => {
              setIsExpanded((prevState) => !prevState);
            }}
            variant="link"
          >
            {isExpanded ? "Hide Details" : "Show Details"}
          </Button>
        </Card.Footer>
      )}
    </StyledCard>
   </>
  );
};

export default TrialCard;
