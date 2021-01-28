const gradings = {
  /* 
== GRADING SYTEM POINTS FOR NTA LEVEL-7 AND BACHELOR DEGREE NTA LEVEL 8 ==
*/
  degree: {
    A: {
      definition: "Excellent",
      point: 5,
      scoreRange: 70 >= 100 || 70 <= 100,
    },
    BPLUS: {
      definition: "Very Good",
      point: 4,
      scoreRange: 60 >= 69 || 60 <= 69,
    },
    B: {
      definition: "Good",
      point: 3,
      scoreRange: 50 >= 59 || 50 <= 59,
    },
    C: {
      definition: "Average",
      point: 2,
      scoreRange: 40 >= 49 || 40 <= 49,
    },
    D: {
      definition: "Poor",
      point: 1,
      scoreRange: 35 >= 39 || 35 <= 39,
    },
    F: {
      definition: "Failure",
      point: 0,
      scoreRange: 0 >= 34 || 0 <= 34,
    },
  },
  /* O-LEVEL GRADING */
  olevel: {
    A: {
      definition: "Excellent",
      point: 1,
      scoreRange: 75 >= 100 || 75 <= 100,
    },
    B: {
      definition: "Very Good",
      point: 2,
      scoreRange: 65 >= 74 || 65 <= 74,
    },
    C: {
      definition: "Good",
      point: 3,
      scoreRange: 45 >= 64 || 45 <= 64,
    },
    D: {
      definition: "Satisfactory",
      point: 4,
      scoreRange: 30 >= 44 || 30 <= 44,
    },
    F: {
      definition: "Fail",
      point: 5,
      scoreRange: 0 >= 29 || 0 <= 29,
    },
  },

  /* A-LEVEL GRADING */
  alevel: {
    A: {
      definition: "Excelent",
      point: 1,
      scoreRange: 80 >= 100 || 80 <= 100,
    },
    B: {
      definition: "Very Good",
      point: 2,
      scoreRange: 70 >= 79 || 70 <= 79,
    },
    C: {
      definition: "Good",
      point: 3,
      scoreRange: 60 >= 69 || 60 <= 69,
    },
    D: {
      definition: "Average",
      point: 4,
      scoreRange: 50 >= 59 || 50 <= 59,
    },
    E: {
      definition: "Satisfactory",
      point: 5,
      scoreRange: 40 >= 49 || 40 <= 49,
    },
    S: {
      definition: "Subsidiary",
      point: 6,
      scoreRange: 35 >= 39 || 35 <= 39,
    },
    F: {
      definition: "Fall",
      point: 7,
      scoreRange: 0 >= 34 || 0 <= 34,
    },
  },

  /* DIPLOMA GRADING */
  diploma5: {
    A: {
      definition: "Excellent",
      point: 4,
      scoreRange: 80 >= 100 || 80 <= 100,
    },
    B: {
      definition: "Good",
      point: 3,
      scoreRange: 65 >= 79 || 65 <= 79,
    },
    C: {
      definition: "Average",
      point: 2,
      scoreRange: 50 >= 69 || 50 <= 69,
    },
    D: {
      definition: "Poor",
      point: 1,
      scoreRange: 40 >= 49 || 40 <= 49,
    },
    F: {
      definition: "Failure",
      point: 0,
      scoreRange: 0 >= 39 || 0 <= 39,
    },
  },
  diploma6: {
    A: {
      definition: "Excellent",
      point: 5,
      scoreRange: 75 >= 100 || 75 <= 100,
    },
    BPLUS: {
      definition: "Very Good",
      point: 4,
      scoreRange: 65 >= 74 || 65 <= 74,
    },
    B: {
      definition: "Good",
      point: 3,
      scoreRange: 55 >= 64 || 55 <= 64,
    },
    C: {
      definition: "Average",
      point: 2,
      scoreRange: 45 >= 54 || 45 <= 54,
    },
    D: {
      definition: "Poor",
      point: 1,
      scoreRange: 35 >= 44 || 35 <= 44,
    },
    F: {
      definition: "Failure",
      point: 0,
      scoreRange: 0 >= 34 || 0 <= 34,
    },
  },

  /* CERTIFICATE GRADING */
  certificate: {
    A: {
      definition: "Excellent",
      point: 4,
      scoreRange: 80 >= 100 || 80 <= 100,
    },
    B: {
      definition: "Good",
      point: 3,
      scoreRange: 65 >= 79 || 65 <= 79,
    },
    C: {
      definition: "Average",
      point: 2,
      scoreRange: 50 >= 64 || 50 <= 64,
    },
    D: {
      definition: "Poor",
      point: 1,
      scoreRange: 40 >= 49 || 40 <= 49,
    },
    F: {
      definition: "Failure",
      point: 0,
      scoreRange: 0 >= 39 || 0 <= 39,
    },
  },
};
module.exports = gradings;
