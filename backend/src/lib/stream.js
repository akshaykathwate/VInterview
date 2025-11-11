import { StreamChat } from "stream-chat";
import { ENV } from "./env";

const apikey =ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apikey || !apiSecret){
    console.error("STREAM_API_KEY OR STREAM_API_SECRET IS MISSING ..");
}

export const chatClient =  StreamChat.getInstance(apikey,apiSecret);

export const createupdateStreamUser= async (userdata)=>{
    try {
        await chatClient.upsertUser(userdata);
        console.log("stream user created / updated successfully",userdata);
    } catch (error) {
        console.error("error while creating user",error);
    }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("stream user deleted successfully", userdata);
  } catch (error) {
    console.error("error deleting  stream user", error);
  }
};
