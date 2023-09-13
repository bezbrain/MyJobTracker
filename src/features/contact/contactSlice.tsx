import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactUsProps } from "../../model";
import axios from "axios";
import { toast } from "react-toastify";

const initialState: ContactUsProps = {
  isLoading: false,
  isDisable: false,
  users: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
};

export const contactForm = createAsyncThunk(
  "feature/contactForm",
  async (users: ContactUsProps["users"], thunkAPI) => {
    try {
      await axios.post(
        "https://jobtrackier-contact-me.onrender.com/contactMe",
        users
      );
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    collectInputs: (state, { payload }) => {
      const { name, value } = payload;
      state.users = { ...state.users, [name]: value };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(contactForm.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(contactForm.fulfilled, (state) => {
        state.isLoading = false;
        state.isDisable = false;
        toast.success("Message Sent");
        state.users.name = "";
        state.users.email = "";
        state.users.subject = "";
        state.users.message = "";
      })
      .addCase(contactForm.rejected, (state, { payload }: any) => {
        toast.error(payload);
        state.isLoading = false;
        state.isDisable = false;
      });
  },
});

export const { collectInputs } = contactSlice.actions;

export default contactSlice.reducer;
