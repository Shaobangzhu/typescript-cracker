{
  type Residency = "resident" | "nonResident" | "needsReview";

  type StudentRecord = {
    id: number;
    name: string;
    residency: Residency;
    flags?: string[];
  };

  type ResidencyDecision = {
    id: number;
    residency: Residency;
    reason: string;
  };

  function updateResidencyDecision(
    students: StudentRecord[],
    decisions: ResidencyDecision[]
  ): StudentRecord[] {
    // 先做一个decision的map，加速按ID查找
    const decisionMap = new Map(decisions.map((d) => [d.id, d]));

    return students.map((student) => {
      const decision = decisionMap.get(student.id);
      if (!decision) return student; // 无对应decision -> 原样返回

      // 有decision -> 更新residency
      const updated: StudentRecord = {
        ...student,
        residency: decision.residency,
      };

      // 如果需要review -> flags 要append reason (不可变更新)
      if (decision.residency === "needsReview") {
        updated.flags = [...(student.flags ?? []), decision.reason];
      }

      return updated;
    });
  }
}
