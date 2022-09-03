import {
  ScoreContainer,
  IconPlus,
  IconMinus,
  BtnScore,
  Score,
} from './comment-score.styles';

function CommentScore({ score, handleClickPlus, handleClickMinus }) {
  return (
    <ScoreContainer>
      <BtnScore onClick={handleClickPlus} aria-label="Like comment">
        <IconPlus />
      </BtnScore>

      <Score>{score}</Score>

      <BtnScore onClick={handleClickMinus} aria-label="Dislike comment">
        <IconMinus />
      </BtnScore>
    </ScoreContainer>
  );
}

export default CommentScore;
