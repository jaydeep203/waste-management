import {create} from "zustand";

interface usePickupModalProps{
    isOpen:boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePickupModal = create<usePickupModalProps>((set)=> ({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}));

export default usePickupModal;

