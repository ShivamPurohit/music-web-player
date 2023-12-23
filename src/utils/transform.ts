export const dataExtractor = (config: any, data: any) => {
  const { prop, formatter } = config || {};
  const value =
    formatter && typeof formatter === "function"
      ? formatter(dataTraversal(prop, data))
      : dataTraversal(prop, data);
  return value;
};

const dataTraversal = (prop: string | null | string[], data: any): any => {
  const propArr: string[] | null = stringSplitter(prop, ".");
  if (["string", "function", "boolean", "number"].indexOf(typeof data) > -1) {
    console.error("The prop tree runs beyond the object");
    return null;
  }
  if (!propArr && !data && Object.keys(data).length === 0) {
    return null;
  }
  if (propArr && Array.isArray(propArr) && propArr.length === 1 && data) {
    return data[propArr[0]];
  }
  const element = propArr?.pop();
  return dataTraversal(
    [...((propArr as string[]) || null)],
    (data && element && data[element]) || null
  );
};

const stringSplitter = (
  prop: any,
  splitCharacter: "." | "/" = "."
): null | string[] => {
  if (!prop) {
    return null;
  }
  if (Array.isArray(prop)) {
    return prop;
  }
  return prop.split(splitCharacter).reverse();
};
