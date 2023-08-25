import { AddJobState } from "../model";

// To clear input field
export const clearFields = (state: AddJobState) => {
  state.inputs.position = "";
  state.inputs.company = "";
  state.inputs.joblocation = "";
  state.inputs.status = "";
  state.inputs.jobType = "";
};
