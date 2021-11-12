import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../redux/features";

export const useTypeSelector:TypedUseSelectorHook<rootState> = useSelector;