import { configureStore } from "@reduxjs/toolkit";
import CatalogSlice from "./Slice/CatalogSlice/CatalogSlice";
import ComponentManagementSlice from "./Slice/PageProductComponentManagement/ComponentManagementSlice";

export const store = configureStore({
  reducer: {
    CatalogSliceCounter: CatalogSlice,
    ComponentManagement: ComponentManagementSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
