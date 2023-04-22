import Image from "../model/image.js";
import axios from "axios";

export const createImageLink = async (req, res) => {
  res.send("image");

  const post = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(post.data);
};

//  const cloud_name = import.meta.env.VITE_CLOUDINARY_NAME;
//   const cloud_preset = import.meta.env.VITE_CLOUDINARY_PRESET;

//   const handleSubmit = async () => {
//     let imageURL;

// try {
//   if (image) {
//     const uploadImage = new FormData();

//     uploadImage.append("file", image);
//     uploadImage.append("cloud_name", cloud_name);
//     uploadImage.append("upload_preset", cloud_preset);

//     //save image to cloudinary

//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
//       {
//         method: "post",
//         body: uploadImage,
//       }
//     );
//     const imgData = await res.json();
//     imageURL = imgData?.url?.toString();
//   }
