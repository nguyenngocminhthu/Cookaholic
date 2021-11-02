import { LOADING } from "./types";
export function changeLoading(loading = false) {
    return {
        type: LOADING,
        payload: loading,
    };
}