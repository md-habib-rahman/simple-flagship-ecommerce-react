import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { FaCartShopping } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavourite } from "../utils";

const PhoneDetails = () => {
  const phoneDetail = useLoaderData();
  const { id } = useParams();
  const singlePhone = phoneDetail.find((phone) => phone.id === parseInt(id));
  const {
    name,
    image,
    // brand,
    // model,
    // price,
    // description,
    // storage,
    // camera_info,
  } = singlePhone || {};
  const handleFavourite = () => {
    addFavourite(singlePhone);
    console.log(singlePhone);
  };
  return (
    <div className="py-12 text-4xl">
      <img src={image} alt="" className="w-full mx-auto mx:w-auto" />
      <div className="flex items-center justify-between mt-12">
        <h1 className="font-thin">{name}</h1>
        <div className="flex justify-end gap-8">
          <Button text={<FaCartShopping size={20} />} />
          <Button
            onClick={handleFavourite}
            text={<MdBookmarkAdd size={20} />}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PhoneDetails;
