export interface Rules {
  testCpuAndPowerSuply: {
    arg1: number;
    arg2: number;
    operators: {
      questioningOne: string;
      questioningTwo: string;
      combinationOperator: string;
    };
    errMessage1: string;
    errMessage2: string;
  };
  testCpuAndVideoCard: {
    arg1: number;
    arg2: number;
    operators: {
      questioningOne: string;
      questioningTwo: string;
      combinationOperator: string;
    };
    errMessage1: string;
    errMessage2: string;
  };
}