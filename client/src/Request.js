export const getExercises = () => {
  fetch("/api/exercises")
    .then((res) => res.json())
    .then((res) => {
      const exerciseList = res.map((ex) => ex.title);
      setExercises(exerciseList);
      //   console.log(exerciseList);
    });
};
