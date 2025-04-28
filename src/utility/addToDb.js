import { toast } from "react-toastify";

const getStoredReadlist = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    };
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadlist();

    if (storedList.includes(id)) {
        console.log(id, "exist in the read list");
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list", storedListStr);
        toast("This book is added to your readlist");
    };
};

const getStoredWishList = () => {
    const storedListInLocalStorage = localStorage.getItem("wish-list");

    if(storedListInLocalStorage) {
        const storedList = JSON.parse(storedListInLocalStorage);
        return storedList;
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    
    if(storedList.includes(id)) {
        console.log("this is already included");
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("wish-list", storedListStr);
    };
};

export { addToStoredReadList, addToStoredWishList, getStoredReadlist };