import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, usersApi, setToken } from "../../config/usersApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await usersApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await usersApi.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await usersApi.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
