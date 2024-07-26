import { safeParse } from "valibot";
import { ProductsSchema } from "../schemas";

export async function getProducts() {
  try {
    const url =
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
    const response = await fetch(url);
    const json = await response.json();
    
    const result = safeParse(ProductsSchema,json);

    if(result.success){
        return result.output;
    }
    
  } catch (error) {
    console.log(error);
  }
}
