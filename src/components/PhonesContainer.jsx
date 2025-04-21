import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "./ui/Button";

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, SetShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);
  console.log(phones);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPhones.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>

      <Button
        onClick={() => {
          SetShowAll((prv) => !prv);
          showAll && window.scrollTo(0, 0);
        }}
        text={showAll ? "Show Less" : "Show More"}
      />
    </div>
  );
};

export default PhonesContainer;
