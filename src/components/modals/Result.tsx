import styled from "styled-components";
import ModalLayout from "./ModalLayout";

const ResultWrapper = styled.div`
  width: 1280px;
  height: 850px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
`

type ResultProps = {
  opened: boolean,
  onClose: () => void,
}

const Result = ({ opened, onClose }: ResultProps): JSX.Element => {
  return (
    <ModalLayout opened={opened} onClose={onClose}>
      <ResultWrapper></ResultWrapper>
    </ModalLayout>
  );
}

export default Result;