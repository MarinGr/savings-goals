import styled from "styled-components";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <Container onClick={props.onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3 className="modal-title">{props.title}</h3>
        </Header>
        <Body>{props.children}</Body>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--primary-text-color);
  z-index: 10;
`;

const Content = styled.div`
  min-width: 320px;
  padding: 16px 24px;
  background-color: #fff;
  border-radius: 10px;
`;

const Header = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

const Body = styled.div`
  padding: 16px 0;
  border-top: 1px solid var(--secondary-color);
`;
