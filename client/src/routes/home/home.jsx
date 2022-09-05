import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserContext } from '../../context/user.context';
import { initializeComments } from '../../reducers/comment-reducer';

import CreateUserModal from '../../components/create-user-modal/create-user-modal';
import UserCommentInput from '../../components/user-comment-input/user-comment-input';

import { Container, Main } from './home.styles';
import Comments from '../../components/comments/comments';

function Home() {
  const dispatch = useDispatch();

  const comments = useSelector(
    (state) => state.comments.filter(
      (comment) => comment.replyingTo === null,
    ),
  );

  const { currentUser, createUser } = useContext(UserContext);

  useEffect(() => {
    dispatch(initializeComments());
  }, []);

  const handleCreateUser = async (event, username) => {
    event.preventDefault();
    createUser(username);
  };

  if (!comments)
    return null;

  return (
    <Container>
      <Main>
        { !currentUser && <CreateUserModal handleCreateUser={handleCreateUser} /> }
        <Comments comments={comments} />
        <section>
          { currentUser && <UserCommentInput />}
        </section>
      </Main>
    </Container>
  );
}

export default Home;
