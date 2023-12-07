import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => {
      setIsOnline(false);
      toast.error("You are offline!", {
        toastId: "offline-toast",
      });
    });
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  return isOnline;
};
