import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import {
  CircularProgress,
  makeStyles,
  Backdrop,
  CheckIcon,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { green } from "@material-ui/core/colors";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://grene-prod-shop-media.azureedge.net/zqjmjb34/2020-crochet-inspiration-1-v1.jpg?format=jpg&width=1600&height=848&quality=75&mode=crop&center=0.5248733389487447,0.43166666666666664")
      center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;

  &:focus {
    outline-color: #0e606b;
  }

  &:focus::placeholder {
    color: transparent;
    transition: all 0.2s ease;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #f47068;
  }
`;

const Button = styled.button`
  position: relative;
  width: 40%;
  border: 1px solid;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  background: linear-gradient(to left, #fff4f1 50%, #0e606b 50%);
  background-size: 200%;
  background-position: left bottom;
  transition: 0.5s ease-out;

  &:hover {
    background-color: #fff4f1;
    color: black;
    background-position: right;
    border: 1px solid #0e606b;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: 105,
    marginLeft: -12,
  },
  alert: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: 40,
  },
}));

const Login = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LinkWrapper>
            <Link>Don't remember your password?</Link>
            <Link>Don't have an account?</Link>
          </LinkWrapper>
          <ButtonsWrapper>
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {isFetching && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
            {!currentUser && error ? (
              <Snackbar
                className={classes.alert}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="error">
                  Wrong credentials!
                </Alert>
              </Snackbar>
            ) : (
              currentUser && (
                <Snackbar
                  className={classes.alert}
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    You're in!
                  </Alert>
                </Snackbar>
              )
            )}
          </ButtonsWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
