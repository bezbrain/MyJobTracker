import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../../model";
import { auth, signIn } from "../../firebaseStore";
import { toast } from "react-toastify";
import { extratingErrorMsg, setUserId } from "../../DBSnapShot";

const initialState: LoginState = {
  loginLoading: false,
  loginDisable: false,
  loginUser: {
    login_createdBy: "",
    login_email: "",
    login_password: "",
  },
};

export const login = createAsyncThunk(
  "login/login",
  async (details: any, thunkAPI) => {
    try {
      const { login_email, login_password, navigate } = details;

      const cred = await signIn(auth, login_email, login_password);
      console.log(cred.user.uid);
      const userId = cred.user.uid;
      setUserId(userId); // Function to set data to the local storage
      setTimeout(() => {
        navigate("/dashboard"); // Navigated to dashboard after 3secs
      }, 3000);
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Collect input values in the login input fields
    getLoginValues: (
      state,
      { payload }: PayloadAction<{ name: keyof LoginState; value: any }>
    ) => {
      const { name, value } = payload;
      state.loginUser = { ...state.loginUser, [name]: value };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
        state.loginDisable = true;
      })
      .addCase(login.fulfilled, (state) => {
        toast.success("Login Successful");
        state.loginLoading = false;
        state.loginDisable = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          toast.error(payload); // Assuming payload is now a string error message
        } else {
          // If payload is not a string, convert the error message and then show it
          toast.error(JSON.stringify(payload));
        }
        state.loginLoading = false;
        state.loginDisable = false;
      });
  },
});

export default loginSlice.reducer;

export const { getLoginValues } = loginSlice.actions;
