import React, { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <h1>useRef</h1>
      <form>
        <CustomInput className="border border-blue-500" ref={myRef} />
        <button type="submit" className="px-2 bg-red-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefExample;
