import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vRrf1zsE2MsGIQoUgR9h/books';
const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (payload, thunkAPI) => {
  try {
    const response = await axios.post(url, payload);
    thunkAPI.dispatch(fetchBooks());
    return response.payload;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const booksSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(removeBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default booksSlice.reducer;
