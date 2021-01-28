const gradding = {
  olevel: {
    division: [
      {
        division: "one",
        score:{from: 7,to:17},
        description: "Excellent",
      },
      {
        division: "two",
        score:{ from:18,to: 21},
        description: "Very Good",
      },
      {
        division: "three",
        score:{from: 22 ,to: 25},
        description: "Good",
      },
      {
        division: "four",
        score:{from: 26,to:33},
        description: "Satisfactory",
      },
      {
        division: "zero",
        score:{ from:34,to: 35},
        description: "Fail",
      },
    ],
  },
  alevel: {
    division: [
      {
        division: "one",
        score:{from:3,to: 9 },
        description: "Excellent",
      },
      {
        division: "two",
        score:{from: 10 ,to: 12},
        description: "Very Good",
      },
      {
        division: "three",
        score:{from: 13 ,to: 17},
        description: "Good",
      },
      {
        division: "four",
        score:{from: 18 ,to: 19},
        description: "Satisfactory",
      },
      {
        division: "zero",
        score:{from: 20, to: 21},
        description: "Fail",
      },
    ],
  },
  diploma6:{
      class:[
          {
              score:{from:4.4,to:5.0},
              description:'First Class'
          },
          {
              score:{from:3.5,to:4.3},
              description:'Upper Second'
          },
          {
              score:{from:2.7,to:3.4},
              description:'Lower Second'
          },
          {
              score:{from:2.0,to:2.6},
              description:'Upper Second'
          },
      ]
  }
};

module.exports = gradding