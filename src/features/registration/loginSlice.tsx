import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../../model";
import { auth, signIn } from "../../firebaseStore";
import { toast } from "react-toastify";
import { setUserId } from "../../DBSnapShot";

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
      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
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
        console.log(payload);
      });
  },
});

export default loginSlice.reducer;

export const { getLoginValues } = loginSlice.actions;
