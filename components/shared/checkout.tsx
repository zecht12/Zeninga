"use client";

import React, { useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { cn } from '@/lib/utils';
import { button } from '@/utils/font';

declare global {
    interface Window {
        snap: any;
    }
}

const Checkout = ({ product, setSelectedProduct }:any) => {
    const [customerInfo, setCustomerInfo] = useState({
        customersFirstName: "",
        customersLastName: "",
        email: "",
        phone: "",
    });

    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setCustomerInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const checkout = async () => {
        const data = {
            id: product.id,
            productName: product.name,
            price: product.values,
            quantity: 1,
            ...customerInfo
        };
        try {
            const response = await fetch("/api/payment", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Failed to fetch token");
            }
            const requestData = await response.json();
            window.snap.pay(requestData.token);
        } catch (error) {
            console.error("Error processing checkout:", error);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="default" size="xl" className={cn(button.className)}>Checkout</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Checkout Your Membership
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="customersFirstName">First Name</label>
                                <Input
                                    id="customersFirstName"
                                    type="text"
                                    name="customersFirstName"
                                    placeholder="First Name"
                                    value={customerInfo.customersFirstName}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="customersLastName">Last Name</label>
                                <Input
                                    id="customersLastName"
                                    type="text"
                                    name="customersLastName"
                                    placeholder="Last Name"
                                    value={customerInfo.customersLastName}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="membership">Membership</label>
                                <Select>
                                    <SelectTrigger id="membership" className="w-full mt-1">
                                        <SelectValue placeholder="Select Membership" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem 
                                            value={product.id} 
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            {product.name}
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={customerInfo.email}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
                                <Input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={customerInfo.phone}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={checkout}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Checkout;
