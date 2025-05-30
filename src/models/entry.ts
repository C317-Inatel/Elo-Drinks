export interface Entry {
  items: {
    fields: {
      name: string;
      type: string;
      image: {
        sys: {
          id: string;
        }
      }
    }
  }[],
  includes: {
    Asset: {
      sys: {
        id: string;
      },
      fields: {
        file: {
          url: string;
        }
      }
    }[]
  }
};
