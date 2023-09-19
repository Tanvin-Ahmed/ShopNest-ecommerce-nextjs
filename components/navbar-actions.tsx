"use client";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";

const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} className="white" />
        <span className="text-white text-sm ml-2 font-medium">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
