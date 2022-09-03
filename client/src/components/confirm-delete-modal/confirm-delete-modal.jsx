import {
  DeleteModalBg,
  DeleteModalContainer,
  DeleteModalBtnContainer,
  DeleteSubmitYes,
  DeleteSubmitNo,
} from './confirm-delete-modal.styles';

function ConfirmDeleteModal({ returnResult }) {
  return (
    <DeleteModalBg>
      <DeleteModalContainer>
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove
          the comment and can&apos;t be undone.
        </p>
        <DeleteModalBtnContainer>
          <DeleteSubmitNo onClick={() => returnResult(false)}>No, cancel</DeleteSubmitNo>
          <DeleteSubmitYes onClick={() => returnResult(true)}>Yes, delete</DeleteSubmitYes>
        </DeleteModalBtnContainer>
      </DeleteModalContainer>
    </DeleteModalBg>
  );
}

export default ConfirmDeleteModal;
