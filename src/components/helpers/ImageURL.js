import { Cloudinary } from "@cloudinary/url-gen";

// Cloudinary instance
const cld = new Cloudinary({
    cloud: {
        cloudName: `engagement-lab-home`,
    },
    url: {
        secure: true,
    },
});
    
/**
 * Return a Cloudinary url
 * @returns {string} The image URL
 *
 */
const ImageUrl = ({
  imgId,
  width,
  transforms,
  aspectDefault,
}) => {
  // Instantiate a CloudinaryImage object for the image with public ID;
  const cloudImage = cld.image(`${imgId}`);

  // Create image transforms
  cloudImage.addTransformation(
    transforms ||
      `f_auto,dpr_auto,c_crop,g_center${
        aspectDefault ? '' : ',ar_4:3'
      },w_${width}`
  );

  return cloudImage.toURL();
};
export default ImageUrl