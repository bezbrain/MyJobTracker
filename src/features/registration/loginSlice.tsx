import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../../model";
import { auth, signIn } from "../../firebaseStore";
import { toast } from "react-toastify";
import { extratingErrorMsg, setUserId } from "../../DBSnapShot";

const initialState: LoginState = {
  login_createdBy: "",
  login_email: "",
  login_password: "",
};

export const login = createAsyncThunk(
  "login/login",
  async (details: any, thunkAPI) => {
    try {
      const { login_createdBy, login_email, login_password, navigate } =
        details;

      const cred = await signIn(auth, login_email, login_password);
      console.log(cred.user.uid);
      const userId = cred.user.uid;
      setUserId(userId); // Function to set data to the local storage
      // setEmail(login_email); // Set user email into the local storage so that it'll be used in dashboard
      setTimeout(() => {
        navigate("/dashboard"); // Navigated to dashboard after 5secs
      }, 3000);
    } catch (error: any) {
      console.log(error.message);

      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginValues: (
      state,
      { payload }: PayloadAction<{ name: keyof LoginState; value: any }>
    ) => {
      const { name, value } = payload;
      state[name] = value;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        console.log(state);
      })
      .addCase(login.fulfilled, (state) => {
        console.log(state);
        toast.success("Login Successful");
      })
      .addCase(login.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          toast.error(payload); // Assuming payload is now a string error message
        } else {
          // If payload is not a string, convert the error message and then show it
          toast.error(JSON.stringify(payload));
        }
      });
  },
});

export default loginSlice.reducer;

export const { getLoginValues } = loginSlice.actions;
