import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function ProgressBar({ progress }) {
  return (
    <ProgressBarStyled
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        textSize: "14px",
        pathColor: "var(--primary-color)",
        textColor: "var(--primary-color)",
        trailColor: "var(--progress-bar-trail-color)",
      })}
    />
  );
}

const ProgressBarStyled = styled(CircularProgressbar)`
  width: 100px;
  height: 100px;
`;
