import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserContext } from '../../context/user.context';
import { initializeComments } from '../../reducers/comment-reducer';

import CreateUserModal from '../../components/create-user-modal/create-user-modal';
import UserCommentInput from '../../components/user-comment-input/user-comment-input';
import CommentWrapper from '../../components/comment-wrapper/comment-wrapper';

import { Container, Main, SectionComments } from './home.styles';

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
    <>
      { !currentUser && <CreateUserModal handleCreateUser={handleCreateUser} /> }
      <Container>
        <Main>
          <SectionComments>
            {
            comments
            && comments.map((comment) => (
              <CommentWrapper
                key={comment._id}
                comment={comment}
                layer={0}
              />
            ))
          }
          </SectionComments>

          <section>
            { currentUser
          && <UserCommentInput />}
          </section>
        </Main>
      </Container>
    </>
  );
}

export default Home;
