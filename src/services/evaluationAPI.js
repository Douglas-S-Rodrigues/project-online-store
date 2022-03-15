const EVALUATIONS_KEY = 'evaluations';

if (!JSON.parse(localStorage.getItem(EVALUATIONS_KEY))) {
  localStorage.setItem(EVALUATIONS_KEY, JSON.stringify([]));
}
const readEvalutions = () => JSON.parse(localStorage.getItem(EVALUATIONS_KEY));

const saveEvaluations = (evaluations) => localStorage
  .setItem(EVALUATIONS_KEY, JSON.stringify(evaluations));

export const getEvaluations = () => {
  const evaluations = readEvalutions();
  return evaluations;
};

export const addEvaluation = (evaluation) => {
  if (evaluation) {
    const evaluations = readEvalutions();
    saveEvaluations([...evaluations, evaluation]);
  }
};
