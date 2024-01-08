import { currentUser, pb } from "$lib/pocketbase";
import { doc } from "prettier";

pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(()=> {
    currentUser.set(pb.authStore.model);
    document.cookie = pb.authStore.exportToCookie ({ httpOnly: false });

}); 