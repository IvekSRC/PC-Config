export interface Rule {
    arg1: any;
    arg2: any;
    operators: {
      questioningOne: string;
      questioningTwo: string;
      combinationOperator: string;
    };
    errMessage1: string;
    errMessage2: string;
}