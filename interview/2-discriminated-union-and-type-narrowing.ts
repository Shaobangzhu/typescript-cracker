// Q2 — Discriminated Union & Type Narrowing
// You are given two student categories:
{
  type Undergraduate = {
    type: "undergrad";
    major: string;
    unitsCompleted: number;
  };

  type Graduate = {
    type: "grad";
    advisor: string;
    thesisProgress: number;
  };
  // Write a function:
  // function getStudentLabel(s: Undergraduate | Graduate): string {}
  // Use discriminated union narrowing to return different strings for each student type.

  function getStudentLabel(s: Undergraduate | Graduate): string {
      if (s.type === "undergrad") {
          return `Undergraduate majoring in ${s.major} with ${s.unitsCompleted} units completed.`;
      } else {
          return `Graduate advised by ${s.advisor} with ${s.thesisProgress}% thesis progress.`;
      }
  }
}