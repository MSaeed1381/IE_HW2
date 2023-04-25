import BaseUserSchema from "./_core-user.js";

export default mongoose => BaseUserSchema(mongoose).discriminator("itManagers", mongoose.Schema({}));
