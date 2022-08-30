import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import userService from '../../api/user-service';
import { UserContext } from "../../context/user.context";
import { initializeComments } from "../../reducers/comment-reducer";

import CreateUserModal from "../../components/create-user-modal/create-user-modal";
import UserCommentInput from "../../components/user-comment-input/user-comment-input";
import CommentWrapper from "../../components/comment-wrapper/comment-wrapper";

import { Container, Main, SectionComments } from "./home.styles";

const Home = () => {
  const dispatch = useDispatch();

  const comments = useSelector(state => state.comments);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  useEffect(() => {
    dispatch(initializeComments());
  }, []);


  const createUser = async (event, username) => {
    event.preventDefault();
    const { token, user } = await userService.createUser(username);
    
    const newUser = {
      id: user._id,
      username: user.username,
      image: user.image.png,
      token
    }

    setCurrentUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  if (!comments) return null;

  return (
    <>
    { !currentUser && <CreateUserModal handleCreateUser={createUser} /> }
    <Container>
      <Main>
        <SectionComments>
          {
            comments &&
            comments.map(comment => (
              <CommentWrapper 
                key={comment._id}
                comment={comment}
                layer={0}
              />
            ))
          }
        </SectionComments>

      <section>
        { currentUser && 
          <UserCommentInput image={currentUser.image} /> 
        }
      </section>
      </Main>
    </Container>
  </>
  )
}

export default Home;