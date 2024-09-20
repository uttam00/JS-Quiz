import { Box, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CommonButton from "../../components/button";
import MCQSelection from "../../components/mcqSelection";
import questionData from "../../data/questionsData.json";
import ResultPage from "../resultPage.tsx";
import "./style.css";

const TestMCQPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [updatedQuestionData, setUpdatedQuestionData] = useState<
    Array<{
      id: number;
      question: string;
      options: Array<string>;
      correctAnswer: number;
      answerIndex: number;
    }>
  >([]);
  const currentSelectedData = updatedQuestionData[currentIndex];

  useEffect(() => {
    onResetTest();
  }, []);

  const handleSelectOption = (val: string) => {
    const indexOfAnswer = currentSelectedData.options.findIndex(
      (e) => e === val
    );
    const updatedItems = [...updatedQuestionData];
    updatedItems[currentIndex] = {
      ...updatedItems[currentIndex],
      answerIndex: indexOfAnswer,
    };
    setUpdatedQuestionData(updatedItems);
  };

  const getScoreAndMessage = () => {
    const score = updatedQuestionData.reduce(
      (acc, { answerIndex, correctAnswer }) => {
        return acc + (answerIndex === correctAnswer ? 1 : 0);
      },
      0
    );
    const result = (score / updatedQuestionData.length) * 100;

    const messages = [
      "don't be discouraged! Every expert was once a beginner. Keep practicing!",
      "you might want to review the basics of JavaScript.",
      "good effort! Keep studying to improve your skills.",
      "great job! You have a solid understanding of JavaScript.",
      "excellent work! You're a JavaScript master!",
    ];

    return { score: result, message: messages[Math.floor(result / 25)] };
  };

  const onResetTest = () => {
    const modifiedQuestionData = questionData.flatMap((e) => {
      return {
        ...e,
        answerIndex: -1,
      };
    });
    setUpdatedQuestionData(modifiedQuestionData);
    setCurrentIndex(0);
    setIsSubmit(false);
  };

  const goToNextQuestion = () => {
    if (currentIndex < updatedQuestionData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const validateAndGoToNext = () => {
    if (currentSelectedData.answerIndex < 0) {
      toast.error("Please select any of one option");
    } else if (currentIndex === updatedQuestionData.length - 1) {
      setIsSubmit(true);
    } else {
      goToNextQuestion();
    }
  };

  return (
    <Box className="main_body">
      {!isSubmit ? (
        <Fragment>
          <Grid container spacing={2} className="question_box">
            <Grid
              size={{ xs: 12 }}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h6" gutterBottom>
                {currentIndex + 1} - {currentSelectedData?.question}
              </Typography>
              <Chip
                label={`${currentIndex + 1} / ${updatedQuestionData?.length}`}
                color="primary"
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <MCQSelection
                key={currentSelectedData?.id}
                optionArray={currentSelectedData?.options}
                handleSelectOption={handleSelectOption}
                selectedAnswer={
                  currentSelectedData?.answerIndex !== -1
                    ? currentSelectedData?.options[
                        currentSelectedData?.answerIndex
                      ]
                    : ""
                }
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "10px",
            }}
          >
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <CommonButton
                onClick={goToPreviousQuestion}
                text="Previous"
                showBackIcon
                disabled={!currentIndex}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              {currentIndex + 1 === updatedQuestionData.length ? (
                <CommonButton
                  onClick={validateAndGoToNext}
                  color="success"
                  text="Submit"
                />
              ) : (
                <CommonButton
                  onClick={validateAndGoToNext}
                  text="Next"
                  showNextIcon={currentIndex + 1 !== updatedQuestionData.length}
                />
              )}
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <ResultPage
          onResetTest={onResetTest}
          score={getScoreAndMessage().score}
          message={getScoreAndMessage().message}
        />
      )}
    </Box>
  );
};

export default TestMCQPage;
