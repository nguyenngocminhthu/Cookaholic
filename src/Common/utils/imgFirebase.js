import { storage } from "../../common/config/Firebase";
import { generateString } from "./tool";

const uploadImagesToFirebase = (images = [], folder) => {
    return async () => {

        const result = await Promise.all(
            images.map(async (image) => {
                return await upload(image, folder);
            })
        );

        return result.length > 1 ? result : result[0];
    };
};

const upload = async (image, folder) => {
    if (!(image instanceof File)) return image.preview;
    const storageRef = storage.ref(`${folder}`);
    const name = generateString(24, true);
    const fileRef = storageRef.child(name + "-" + Date.now() + "-" + image.name);
    await fileRef.put(image);
    return await fileRef.getDownloadURL();
};

export { uploadImagesToFirebase };