import { client } from "../config/contentful";




export const getTextFromCms = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "conekta",
      });
      const text = entries.items.map((e) => {
        const textFrom = e.fields;
        return textFrom;
      });
      const textPrepared = text[0]
      return textPrepared;
    } catch (error) {
      console.log(error);
    }
  };