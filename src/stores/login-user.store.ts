import { User } from "types/interface";
import { create } from "zustand";

interface LoginUserStore {
    loginUser: User | null;
    setLoginUser: (loginUser: User) => void;
    resetLoginUser: () => void; 
};

// description: 전역변수로 사용한 상태 변수    //
const useLoginUserStore = create<LoginUserStore>(set => ({
    loginUser: null,
    setLoginUser: (loginUser) => set(state => ({...state, loginUser})),
    resetLoginUser: () => set(state => ({ ...state, loginUser:null}))
}));

export default useLoginUserStore;