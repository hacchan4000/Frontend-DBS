import { PurchaseContext } from "@/context/PurchaseContext";
import { useContext } from "react";


export const usePurchase = () =>  useContext(PurchaseContext)