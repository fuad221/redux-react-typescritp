import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

// export const useAppSelector = (fn: (state: RootState) => any) => useSelector(fn)

// type UserSelectorFn = (state: RootState) => any

// export const useAppSelector = (selector: UserSelectorFn) => useSelector(selector)

